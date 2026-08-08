/* GLSL used by the cinematic hero. Kept in one place so the visual language
   (noise scale, flicker rate, ember colour ramp) is tuned from a single file. */

export const NOISE = /* glsl */ `
  float hash21(vec2 p){
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float vnoise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  // two octaves is plenty for a sub-1% UV offset and roughly 4x cheaper
  float fbm(vec2 p){
    float v = 0.55 * vnoise(p);
    v += 0.27 * vnoise(p * 2.03);
    return v * 1.22;
  }
`;

/* ------------------------------- LAYER 1 + 4 ------------------------------ */
/* Fire photograph with heat-shimmer distortion, gentle flame flicker and a
   slow orange light pulse. */

export const fireVert = /* glsl */ `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fireFrag = /* glsl */ `
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uHeat;      // heat-shimmer strength
  uniform float uFlicker;   // flame flicker strength
  uniform float uAspect;    // plane aspect
  uniform float uTexAspect; // texture aspect
  uniform float uProgress;  // scroll progress 0..1
  uniform float uPulse;     // dynamic light intensity
  uniform float uOverscan;  // plane padding, so the image covers the visible frame
  varying vec2 vUv;

  ${NOISE}

  vec2 coverUv(vec2 uv, float aPlane, float aTex){
    vec2 s = aPlane < aTex ? vec2(aPlane / aTex, 1.0) : vec2(1.0, aTex / aPlane);
    return (uv - 0.5) * s + 0.5;
  }

  void main(){
    vec2 uvV = (vUv - 0.5) * uOverscan + 0.5;
    vec2 uvC = coverUv(uvV, uAspect, uTexAspect);

    // sample once undistorted to build the heat mask from the actual flames
    vec3 pre  = texture2D(uTex, clamp(uvC, 0.001, 0.999)).rgb;
    float warm = clamp((pre.r - pre.b) * 1.7, 0.0, 1.0);
    float lum  = dot(pre, vec3(0.299, 0.587, 0.114));

    // shimmer rises: sample the noise field moving upward
    float n1 = fbm(vec2(uvC.x * 7.0, uvC.y * 4.5 - uTime * 0.14));
    float n2 = vnoise(vec2(uvC.x * 15.0 + 7.3, uvC.y * 9.0 - uTime * 0.30));

    float heatMask = clamp(warm * 1.25 + lum * 0.30, 0.0, 1.0);
    heatMask *= smoothstep(0.98, 0.30, vUv.y) * 0.75 + 0.25;

    vec2 offset = vec2(n1 - 0.5, (n2 - 0.5) * 1.7) * 0.0115 * uHeat * (0.30 + heatMask);
    vec3 col = texture2D(uTex, clamp(uvC + offset, 0.001, 0.999)).rgb;

    // gentle flicker, only on the burning pixels
    float flick = 1.0
      + (sin(uTime * 3.10) * 0.50
       + sin(uTime * 5.70 + 1.3) * 0.30
       + sin(uTime * 11.3 + 2.1) * 0.20) * 0.045 * uFlicker;
    col *= mix(1.0, flick, warm);

    // dynamic orange light from the fire
    col += vec3(0.055, 0.020, 0.002) * heatMask * uPulse;
    col *= 0.94 + uPulse * 0.09;

    // cinematic contrast + vignette
    col = clamp((col - 0.5) * 1.05 + 0.5, 0.0, 4.0);
    float vig = smoothstep(1.55, 0.40, length((vUv - 0.5) * vec2(uAspect * 0.52, 1.0)));
    col *= mix(0.70, 1.02, vig);

    // fade back as the hero scrolls away
    col *= 1.0 - uProgress * 0.5;

    gl_FragColor = vec4(col, 1.0);
  }
`;

/* --------------------------- LAYERS 2 + 5 (smoke) -------------------------- */

export const smokeVert = /* glsl */ `
  attribute float aOpacity;
  attribute float aSeed;
  varying vec2 vUv;
  varying float vOpacity;
  varying float vSeed;
  void main(){
    vUv = uv;
    vOpacity = aOpacity;
    vSeed = aSeed;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

export const smokeFrag = /* glsl */ `
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uFade;
  uniform vec3 uTint;
  varying vec2 vUv;
  varying float vOpacity;
  varying float vSeed;

  void main(){
    // slow per-puff rotation so the field never repeats visibly
    float a = vSeed * 6.2831 + uTime * (0.012 + vSeed * 0.02);
    float s = sin(a), c = cos(a);
    vec2 p = vUv - 0.5;
    p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);

    // breathing density
    float breathe = 0.82 + 0.18 * sin(uTime * (0.18 + vSeed * 0.22) + vSeed * 9.0);

    vec3 tex = texture2D(uTex, clamp(p * 0.92 + 0.5, 0.001, 0.999)).rgb;
    float lum = dot(tex, vec3(0.30, 0.59, 0.11));
    float radial = smoothstep(0.5, 0.04, length(vUv - 0.5));

    float alpha = lum * radial * vOpacity * uFade * breathe;
    if (alpha < 0.004) discard;

    gl_FragColor = vec4(tex * uTint, alpha);
  }
`;

/* ----------------------------- LAYER 3 (embers) ---------------------------- */

export const emberVert = /* glsl */ `
  attribute float aSize;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSpan;
  uniform float uFade;
  varying float vSeed;
  varying float vAlpha;

  void main(){
    vec3 p = position;
    float t = uTime * aSpeed + aPhase;

    // continuous upward drift, wrapped
    p.y = mod(p.y + t, uSpan) - uSpan * 0.5;
    p.x += sin(t * 0.62 + aSeed * 12.0) * 0.42;
    p.z += cos(t * 0.41 + aSeed * 7.0) * 0.22;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float flick = 0.42 + 0.58 * sin(uTime * (1.6 + aSeed * 6.0) + aSeed * 30.0);
    float depthFade = smoothstep(0.0, 3.0, -mv.z);
    vAlpha = flick * uFade * depthFade * (0.35 + aSeed * 0.65);
    vSeed = aSeed;

    gl_PointSize = aSize * uPixelRatio * (58.0 / max(0.6, -mv.z));
  }
`;

export const emberFrag = /* glsl */ `
  uniform float uTime;
  varying float vSeed;
  varying float vAlpha;

  void main(){
    // rotate the sprite so elongated embers visibly tumble
    float a = uTime * (0.25 + vSeed * 1.2) + vSeed * 20.0;
    float s = sin(a), c = cos(a);
    vec2 uv = gl_PointCoord - 0.5;
    uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);

    float d = length(uv * vec2(1.0, 0.66));
    float core = smoothstep(0.34, 0.0, d);
    float glow = smoothstep(0.5, 0.08, d);

    vec3 col = mix(vec3(1.0, 0.38, 0.08), vec3(1.0, 0.88, 0.62), core * core);
    float alpha = (core * 0.9 + glow * 0.32) * vAlpha;
    if (alpha < 0.008) discard;

    gl_FragColor = vec4(col, alpha);
  }
`;

/* ------------------------------ dynamic light ----------------------------- */

export const lightFrag = /* glsl */ `
  uniform float uTime;
  uniform float uPulse;
  uniform float uFade;
  uniform float uAspect;
  varying vec2 vUv;

  float lobe(vec2 uv, vec2 c, float r){
    return smoothstep(r, 0.0, length((uv - c) * vec2(uAspect * 0.5, 1.0)));
  }

  void main(){
    float l = lobe(vUv, vec2(0.13, 0.34), 0.62) * 1.0
            + lobe(vUv, vec2(0.87, 0.36), 0.58) * 0.9
            + lobe(vUv, vec2(0.52, 0.18), 0.46) * 0.5;
    l *= 0.5 + 0.5 * uPulse;
    vec3 col = vec3(1.0, 0.34, 0.06) * l * 0.16 * uFade;
    gl_FragColor = vec4(col, 1.0);
  }
`;

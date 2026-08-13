import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import fireUrl from '../../assets/hero/fire.jpg';
import smokeUrl from '../../assets/smoke-texture.jpg';
import { deviceTier, signals } from '../../lib/viewportSignals';
import {
  emberFrag,
  emberVert,
  fireFrag,
  fireVert,
  lightFrag,
  smokeFrag,
  smokeVert,
} from './shaders';

/* ------------------------------------------------------------------ helpers */

const TIER = {
  low: { embers: 180, smoke: 14, fgSmoke: 4, dpr: [1, 1.25] },
  mid: { embers: 340, smoke: 22, fgSmoke: 6, dpr: [1, 1.5] },
  high: { embers: 520, smoke: 30, fgSmoke: 8, dpr: [1, 1.75] },
};

function useCoverSize(z, pad = 1.16) {
  const { viewport, camera, size } = useThree();
  return useMemo(() => {
    const v = viewport.getCurrentViewport(camera, [0, 0, z]);
    return [v.width * pad, v.height * pad];
    // size is included so this recomputes on resize
  }, [viewport, camera, z, pad, size.width, size.height]);
}

/** Slow global light pulse shared by the fire plane and the light lobes. */
function usePulse() {
  const ref = useRef(1);
  useFrame(() => {
    const t = signals.time;
    ref.current = 1 + Math.sin(t * 0.41) * 0.22 + Math.sin(t * 0.163 + 2.1) * 0.14;
  });
  return ref;
}

/* -------------------------------------------------- LAYER 1 + 4 · fire plane */

function FirePlane({ pulse }) {
  const mat = useRef();
  const group = useRef();
  const Z = -7;
  const [w, h] = useCoverSize(Z, 1.14);
  const tex = useLoader(THREE.TextureLoader, fireUrl);

  useMemo(() => {
    tex.colorSpace = THREE.NoColorSpace;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.anisotropy = 4;
  }, [tex]);

  const uniforms = useMemo(
    () => ({
      uTex: { value: tex },
      uTime: { value: 0 },
      uHeat: { value: signals.reduced ? 0 : 1 },
      uFlicker: { value: signals.reduced ? 0 : 1 },
      uAspect: { value: 1 },
      uTexAspect: { value: 1672 / 941 },
      uProgress: { value: 0 },
      uPulse: { value: 1 },
      uOverscan: { value: 1.14 },
    }),
    [tex]
  );

  useFrame(() => {
    uniforms.uTime.value = signals.time;
    uniforms.uAspect.value = w / h;
    uniforms.uOverscan.value = 1.14;
    uniforms.uProgress.value = signals.heroProgress;
    uniforms.uPulse.value = pulse.current;
    if (group.current) {
      // deepest layer moves least
      group.current.position.x = signals.x * -0.32;
      group.current.position.y = signals.y * 0.2 + signals.heroProgress * 0.55;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, Z]}>
        <planeGeometry args={[w, h]} />
        <shaderMaterial
          ref={mat}
          vertexShader={fireVert}
          fragmentShader={fireFrag}
          uniforms={uniforms}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ----------------------------------------------- dynamic orange light lobes */

function LightLobes({ pulse }) {
  const Z = -6.2;
  const [w, h] = useCoverSize(Z, 1.2);
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uPulse: { value: 1 }, uFade: { value: 1 }, uAspect: { value: 1 } }),
    []
  );
  useFrame(() => {
    uniforms.uTime.value = signals.time;
    uniforms.uPulse.value = pulse.current;
    uniforms.uAspect.value = w / h;
    uniforms.uFade.value = 1 - signals.heroProgress * 0.8;
  });

  return (
    <mesh position={[0, 0, Z]}>
      <planeGeometry args={[w, h]} />
      <shaderMaterial
        vertexShader={fireVert}
        fragmentShader={lightFrag}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent
        toneMapped={false}
      />
    </mesh>
  );
}

/* --------------------------------------------------- LAYERS 2 + 5 · smoke */

function SmokeLayer({
  count,
  z,
  spread,
  sizeRange,
  rise,
  opacity,
  tint,
  parallax,
  additive = true,
}) {
  const mesh = useRef();
  const group = useRef();
  const tex = useLoader(THREE.TextureLoader, smokeUrl);
  const [vw, vh] = useCoverSize(z, 1.5);

  useMemo(() => {
    tex.colorSpace = THREE.NoColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
  }, [tex]);

  const puffs = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * vw * spread,
        y: Math.random() * vh * 1.6 - vh * 0.8,
        z: (Math.random() - 0.5) * 1.4,
        s: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        rise: rise * (0.6 + Math.random() * 0.9),
        drift: (Math.random() - 0.5) * 0.06,
        seed: Math.random(),
        op: opacity[0] + Math.random() * (opacity[1] - opacity[0]),
      })),
    [count, vw, vh, spread, sizeRange, rise, opacity]
  );

  const attrs = useMemo(() => {
    const o = new Float32Array(puffs.length);
    const s = new Float32Array(puffs.length);
    puffs.forEach((p, i) => {
      o[i] = p.op;
      s[i] = p.seed;
    });
    return { o, s };
  }, [puffs]);

  const uniforms = useMemo(
    () => ({
      uTex: { value: tex },
      uTime: { value: 0 },
      uFade: { value: 1 },
      uTint: { value: new THREE.Color(...tint) },
    }),
    [tex, tint]
  );

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const top = vh * 0.9;
  const bottom = -vh * 0.9;

  useFrame((_, dt) => {
    const d = Math.min(0.05, dt);
    uniforms.uTime.value = signals.time;
    uniforms.uFade.value = Math.max(0, 1 - signals.heroProgress * 1.25);

    const im = mesh.current;
    if (!im) return;
    for (let i = 0; i < puffs.length; i += 1) {
      const p = puffs[i];
      if (!signals.reduced) {
        p.y += p.rise * d;
        p.x += p.drift * d;
        p.rot += p.spin * d;
        if (p.y > top) {
          p.y = bottom;
          p.x = (Math.random() - 0.5) * vw * spread;
        }
      }
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.z = p.rot;
      dummy.scale.setScalar(p.s);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
    }
    im.instanceMatrix.needsUpdate = true;

    if (group.current) {
      group.current.position.x = signals.x * parallax;
      group.current.position.y = signals.y * parallax * -0.55 + signals.heroProgress * parallax * 2.2;
    }
  });

  return (
    <group ref={group} position={[0, 0, z]}>
      <instancedMesh ref={mesh} args={[undefined, undefined, puffs.length]} frustumCulled={false}>
        <planeGeometry args={[1, 1]}>
          <instancedBufferAttribute attach="attributes-aOpacity" args={[attrs.o, 1]} />
          <instancedBufferAttribute attach="attributes-aSeed" args={[attrs.s, 1]} />
        </planeGeometry>
        <shaderMaterial
          vertexShader={smokeVert}
          fragmentShader={smokeFrag}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={additive ? THREE.AdditiveBlending : THREE.NormalBlending}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

/* --------------------------------------------------- LAYER 3 · floating embers */

function Embers({ count }) {
  const group = useRef();
  const Z = -3.4;
  const [vw, vh] = useCoverSize(Z, 1.5);
  const span = vh * 2.2;

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const seed = new Float32Array(count);
    const speed = new Float32Array(count);
    const phase = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * vw * 1.25;
      pos[i * 3 + 1] = Math.random() * span;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3.6;
      size[i] = 0.5 + Math.pow(Math.random(), 2.4) * 3.4;
      seed[i] = Math.random();
      speed[i] = 0.12 + Math.random() * 0.55;
      phase[i] = Math.random() * span;
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    g.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 100);
    return g;
  }, [count, vw, span]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio : 1) },
      uSpan: { value: span },
      uFade: { value: 1 },
    }),
    [span]
  );

  useFrame(() => {
    uniforms.uTime.value = signals.reduced ? 0 : signals.time;
    uniforms.uSpan.value = span;
    // embers keep floating on scroll, just thin out
    uniforms.uFade.value = Math.max(0.12, 1 - signals.heroProgress * 0.55);
    if (group.current) {
      group.current.position.x = signals.x * 0.85;
      group.current.position.y = signals.y * -0.4 + signals.heroProgress * 1.1;
    }
  });

  return (
    <group ref={group} position={[0, 0, Z]}>
      <points geometry={geo} frustumCulled={false}>
        <shaderMaterial
          vertexShader={emberVert}
          fragmentShader={emberFrag}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </points>
    </group>
  );
}

/* ------------------------------------------------------------ camera drift */

function CameraRig() {
  const { camera } = useThree();
  const base = useRef(6);

  useFrame(() => {
    const t = signals.time;
    const drift = signals.reduced ? 0 : 1;

    // very slow lissajous drift + continuous subtle push-in
    const dx = Math.sin(t * 0.052) * 0.34 + Math.sin(t * 0.021 + 1.2) * 0.18;
    const dy = Math.cos(t * 0.041) * 0.2 + Math.sin(t * 0.017 + 0.4) * 0.1;
    const zoom = 0.42 * (1 - Math.cos(Math.min(t, 90) * 0.0175)) * 0.5;

    camera.position.x = (dx + signals.x * 0.42) * drift;
    camera.position.y = (dy - signals.y * 0.26) * drift - signals.heroProgress * 0.35;
    camera.position.z = base.current - zoom * drift;
    camera.lookAt(signals.x * 0.16 * drift, signals.y * -0.1 * drift, -6);
    camera.updateProjectionMatrix();
  });

  return null;
}

/* --------------------------------------------------- adaptive quality guard */
/* Targets 60fps. If the device cannot hold it, step the render scale down
   before dropping the heaviest layer — degrade gracefully rather than stutter. */
function AdaptiveQuality({ onDowngrade }) {
  const setDpr = useThree((s) => s.setDpr);
  const acc = useRef({ t: 0, frames: 0, level: 0 });

  useFrame((_, dt) => {
    const a = acc.current;
    a.t += dt;
    a.frames += 1;
    if (a.t < 1.6) return;

    const avg = a.t / a.frames;
    a.t = 0;
    a.frames = 0;

    if (avg > 0.026 && a.level < 2) {
      a.level += 1;
      setDpr(a.level === 1 ? 1 : 0.75);
      if (a.level === 2) onDowngrade?.();
    }
  });

  return null;
}

/* ------------------------------------------------------------------ scene */

function Scene({ tier }) {
  const pulse = usePulse();
  const [lean, setLean] = useState(false);
  const cfg = TIER[tier] || TIER.high;

  return (
    <>
      <AdaptiveQuality onDowngrade={() => setLean(true)} />
      <CameraRig />
      <FirePlane pulse={pulse} />
      <LightLobes pulse={pulse} />

      {/* Layer 2 — mid-depth volumetric smoke */}
      <SmokeLayer
        count={cfg.smoke}
        z={-4.6}
        spread={1.25}
        sizeRange={[2.6, 6.4]}
        rise={0.16}
        opacity={[0.08, 0.26]}
        tint={[0.9, 0.62, 0.44]}
        parallax={0.55}
      />

      {/* Layer 3 — embers */}
      <Embers count={lean ? Math.round(cfg.embers * 0.45) : cfg.embers} />

      {/* Layer 5 — foreground smoke, drifts fastest, sits in front */}
      <SmokeLayer
        count={lean ? Math.max(2, Math.round(cfg.fgSmoke / 2)) : cfg.fgSmoke}
        z={-1.15}
        spread={1.5}
        sizeRange={[4.5, 9.5]}
        rise={0.24}
        opacity={[0.04, 0.12]}
        tint={[0.5, 0.46, 0.46]}
        parallax={1.55}
      />
    </>
  );
}

export default function HeroStage() {
  const tier = useMemo(() => deviceTier(), []);
  const cfg = TIER[tier] || TIER.high;
  const [active, setActive] = useState(true);

  // once the hero has scrolled away there is nothing to render — stop the loop
  useEffect(() => {
    let raf = 0;
    let current = true;
    const check = () => {
      const next = signals.heroVisible === 1;
      if (next !== current) {
        current = next;
        setActive(next);
      }
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={cfg.dpr}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      }}
      camera={{ fov: 42, near: 0.1, far: 60, position: [0, 0, 6] }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#06162a'), 1);
      }}
    >
      <Scene tier={tier} />
    </Canvas>
  );
}

import { useEffect, useRef } from 'react';
import smokeTexture from '../assets/smoke-texture.jpg';

/**
 * SmokeCanvas
 * ---------------------------------------------------------------------------
 * A depth-projected volumetric smoke field rendered on a 2D canvas.
 *
 * Particles live in a real 3D coordinate space (x, y, z). Each frame they are
 * projected to the screen through a pinhole camera (scale = f / (f + z)), so
 * near puffs are large, fast and bright while far puffs are small, slow and
 * faint. The sprite for each puff is cut from the uploaded smoke photograph
 * and masked with a radial falloff, then composited additively — the dark
 * areas of the photograph contribute nothing, so the puffs blend seamlessly.
 *
 * Pointer movement shifts the camera, producing true parallax between depth
 * layers. Honours prefers-reduced-motion by drawing a single static frame.
 */
export default function SmokeCanvas({
  className = '',
  density = 1,
  speed = 1,
  intensity = 1,
  interactive = true,
}) {
  const canvasRef = useRef(null);
  const stateRef = useRef({ pointer: { x: 0, y: 0 }, target: { x: 0, y: 0 } });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let sprites = [];
    let particles = [];
    const FOCAL = 620;
    const Z_FAR = 1500;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /* Cut soft-edged puff sprites out of the source photograph. */
    const buildSprites = (img) => {
      const SIZE = 256;
      const out = [];
      for (let i = 0; i < 6; i += 1) {
        const c = document.createElement('canvas');
        c.width = SIZE;
        c.height = SIZE;
        const g = c.getContext('2d');
        const cropW = img.width * (0.3 + Math.random() * 0.26);
        const cropH = cropW;
        const sx = Math.random() * Math.max(1, img.width - cropW);
        const sy = Math.random() * Math.max(1, img.height - cropH);
        g.drawImage(img, sx, sy, cropW, cropH, 0, 0, SIZE, SIZE);

        // radial falloff so the square crop reads as a puff
        const mask = g.createRadialGradient(SIZE / 2, SIZE / 2, SIZE * 0.05, SIZE / 2, SIZE / 2, SIZE / 2);
        mask.addColorStop(0, 'rgba(0,0,0,1)');
        mask.addColorStop(0.55, 'rgba(0,0,0,0.85)');
        mask.addColorStop(1, 'rgba(0,0,0,0)');
        g.globalCompositeOperation = 'destination-in';
        g.fillStyle = mask;
        g.fillRect(0, 0, SIZE, SIZE);
        out.push(c);
      }
      return out;
    };

    const spawn = (initial) => {
      const z = initial ? Math.random() * Z_FAR : Z_FAR * (0.82 + Math.random() * 0.18);
      return {
        x: (Math.random() - 0.5) * 1900,
        y: (Math.random() - 0.5) * 1250 + 160,
        z,
        r: 190 + Math.random() * 330,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.0022,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.1 - Math.random() * 0.3,
        vz: -(0.46 + Math.random() * 0.75),
        seed: Math.random() * 1000,
        sprite: 0,
        alpha: 0.36 + Math.random() * 0.46,
      };
    };

    const build = () => {
      const area = width * height;
      const base = Math.round(20 * density * Math.min(1.35, Math.max(0.55, area / 900000)));
      const count = Math.max(9, base);
      particles = Array.from({ length: count }, () => {
        const p = spawn(true);
        p.sprite = Math.floor(Math.random() * sprites.length);
        return p;
      });
    };

    const draw = (t) => {
      const cx = width / 2;
      const cy = height / 2;
      const s = stateRef.current;
      s.pointer.x += (s.target.x - s.pointer.x) * 0.045;
      s.pointer.y += (s.target.y - s.pointer.y) * 0.045;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      // painter's algorithm: far first
      const ordered = particles.slice().sort((a, b) => b.z - a.z);

      for (let i = 0; i < ordered.length; i += 1) {
        const p = ordered[i];
        const scale = FOCAL / (FOCAL + p.z);
        const wob = Math.sin(t * 0.00016 + p.seed) * 26;
        const px = cx + (p.x + wob + s.pointer.x * 190) * scale;
        const py = cy + (p.y + s.pointer.y * 110) * scale;
        const size = p.r * scale * 2;
        if (size < 6) continue;
        if (px < -size || px > width + size || py < -size || py > height + size) continue;

        // fade in from the far plane, fade out as it passes the camera
        const depthFade = Math.min(1, (Z_FAR - p.z) / 420);
        const nearFade = Math.min(1, p.z / 210);
        const a = p.alpha * depthFade * nearFade * intensity;
        if (a <= 0.004) continue;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(0.95, a);
        const sprite = sprites[p.sprite];
        if (sprite) ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    };

    const step = (t) => {
      if (!running) return;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.z += p.vz * speed;
        p.x += p.vx * speed;
        p.y += p.vy * speed;
        p.rot += p.spin * speed;
        if (p.z <= 6) {
          const n = spawn(false);
          n.sprite = Math.floor(Math.random() * sprites.length);
          particles[i] = n;
        }
      }
      draw(t);
      raf = requestAnimationFrame(step);
    };

    const onPointer = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      stateRef.current.target.x = (e.clientX - rect.left) / rect.width - 0.5;
      stateRef.current.target.y = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    const img = new Image();
    img.decoding = 'async';
    img.src = smokeTexture;

    const start = () => {
      resize();
      sprites = buildSprites(img);
      build();
      if (reduced) {
        draw(0);
      } else {
        raf = requestAnimationFrame(step);
      }
    };

    if (img.complete && img.naturalWidth) start();
    else img.onload = start;

    const onResize = () => {
      resize();
      if (sprites.length) build();
      if (reduced) draw(0);
    };

    // stop drawing entirely when the canvas is scrolled off screen
    let onScreen = true;
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              onScreen = entry.isIntersecting;
              if (!onScreen) {
                running = false;
                cancelAnimationFrame(raf);
              } else if (!reduced && !document.hidden && !running) {
                running = true;
                raf = requestAnimationFrame(step);
              }
            },
            { rootMargin: '120px' }
          )
        : null;
    if (io) io.observe(canvas);

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density, speed, intensity, interactive]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

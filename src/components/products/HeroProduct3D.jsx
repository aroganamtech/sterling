import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { getProduct } from '../../data/products';
import { coverFor } from '../../lib/productImages';

/* ---------------------------------------------------------------------------
   Hero product — a real-time 3D presentation of one existing product, shown
   only in the previously empty right-hand area of the Products page hero.

   The subject is the Smoke Damper SCD LD: a flanged steel frame, a stack of
   aerofoil blades and a side-mounted actuator housing. Geometry is built
   procedurally from primitives — a faithful but simplified representation of
   the catalogue unit, not a scan — so no model file is shipped.

   Lighting is image-based: a PMREM of three's RoomEnvironment supplies the
   soft studio reflections you would get in a product photography booth, with
   a key light adding a single soft contact shadow underneath.

   Motion is entirely sinusoidal plus a constant yaw, so the loop is seamless
   by construction — there is no keyframe to jump back to. The loop stops
   whenever it is off screen, on a hidden tab, or when the visitor asks for
   reduced motion, and everything is disposed on unmount.
   --------------------------------------------------------------------------- */

const SUBJECT_SLUG = 'smoke-control-damper';

/* metals sampled from the Sterling palette so the render sits in the brand */
const STEEL = 0xb9c0c7;
const STEEL_DARK = 0x8b949c;
const NAVY = 0x0b1724;
const SIGNAL = 0xc8102e;

function buildDamper() {
  const group = new THREE.Group();

  const W = 1.72; // frame width
  const H = 2.34; // frame height
  const D = 0.3; // frame depth
  const RAIL = 0.13; // flange thickness

  const frameMat = new THREE.MeshStandardMaterial({
    color: STEEL,
    metalness: 0.92,
    roughness: 0.34,
  });
  const bladeMat = new THREE.MeshStandardMaterial({
    color: STEEL_DARK,
    metalness: 0.94,
    roughness: 0.28,
  });
  const caseMat = new THREE.MeshStandardMaterial({
    color: NAVY,
    metalness: 0.5,
    roughness: 0.52,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: SIGNAL,
    metalness: 0.3,
    roughness: 0.45,
  });

  /* ----- flanged frame: rectangular shape with a rectangular hole ----- */
  const shape = new THREE.Shape();
  shape.moveTo(-W / 2, -H / 2);
  shape.lineTo(W / 2, -H / 2);
  shape.lineTo(W / 2, H / 2);
  shape.lineTo(-W / 2, H / 2);
  shape.closePath();

  const hole = new THREE.Path();
  const iw = W / 2 - RAIL;
  const ih = H / 2 - RAIL;
  hole.moveTo(-iw, -ih);
  hole.lineTo(-iw, ih);
  hole.lineTo(iw, ih);
  hole.lineTo(iw, -ih);
  hole.closePath();
  shape.holes.push(hole);

  const frameGeo = new THREE.ExtrudeGeometry(shape, {
    depth: D,
    bevelEnabled: true,
    bevelThickness: 0.014,
    bevelSize: 0.014,
    bevelSegments: 2,
    curveSegments: 1,
  });
  frameGeo.center();
  const frame = new THREE.Mesh(frameGeo, frameMat);
  frame.castShadow = true;
  frame.receiveShadow = true;
  group.add(frame);

  /* ----- blade stack ----- */
  const BLADES = 13;
  const bladeW = (W / 2 - RAIL) * 2 - 0.03;
  const bladeH = H / BLADES - 0.028;
  const bladeGeo = new THREE.BoxGeometry(bladeW, bladeH, 0.032);
  const span = H - RAIL * 2 - bladeH;

  for (let i = 0; i < BLADES; i += 1) {
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = -span / 2 + (span / (BLADES - 1)) * i;
    blade.rotation.x = -0.36; // closed-but-angled, as the catalogue elevation
    blade.castShadow = true;
    blade.receiveShadow = true;
    group.add(blade);
  }

  /* ----- side actuator housing with a single red accent face ----- */
  const caseGeo = new THREE.BoxGeometry(0.3, 0.56, 0.24);
  const housing = new THREE.Mesh(caseGeo, caseMat);
  housing.position.set(W / 2 + 0.12, -H / 2 + 0.62, 0.02);
  housing.castShadow = true;
  group.add(housing);

  const plateGeo = new THREE.BoxGeometry(0.015, 0.2, 0.16);
  const plate = new THREE.Mesh(plateGeo, accentMat);
  plate.position.set(W / 2 + 0.28, -H / 2 + 0.72, 0.02);
  group.add(plate);

  /* linkage rod between actuator and blade stack */
  const rodGeo = new THREE.CylinderGeometry(0.018, 0.018, H - RAIL * 2 - 0.1, 10);
  const rod = new THREE.Mesh(rodGeo, bladeMat);
  rod.position.set(W / 2 - RAIL - 0.06, 0, 0.13);
  rod.castShadow = true;
  group.add(rod);

  return {
    group,
    dispose: () => {
      frameGeo.dispose();
      bladeGeo.dispose();
      caseGeo.dispose();
      plateGeo.dispose();
      rodGeo.dispose();
      frameMat.dispose();
      bladeMat.dispose();
      caseMat.dispose();
      accentMat.dispose();
    },
  };
}

export default function HeroProduct3D() {
  const mountRef = useRef(null);
  const [failed, setFailed] = useState(false);

  const product = getProduct(SUBJECT_SLUG);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduced =
      typeof window !== 'undefined' &&
      !!window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer;
    let pmrem;
    let envRT;
    let damper;
    let raf = 0;
    let disposed = false;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setFailed(true);
      return undefined;
    }
    if (!renderer.getContext()) {
      setFailed(true);
      return undefined;
    }

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 460;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    /* image-based lighting — soft studio reflections, no HDRI file needed */
    pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    envRT = pmrem.fromScene(room, 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.85;
    room.dispose?.();

    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    const CAM_Z = 6.4;
    camera.position.set(0, 0, CAM_Z);
    camera.lookAt(0, 0, 0);

    /* key light drives the single soft contact shadow */
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(1.1, 5.6, 2.4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.radius = 5;
    key.shadow.bias = -0.0012;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 16;
    key.shadow.camera.left = -3;
    key.shadow.camera.right = 3;
    key.shadow.camera.top = 3;
    key.shadow.camera.bottom = -3;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xdfe6ee, 0.5);
    rim.position.set(-3.4, 1.4, -2.6);
    scene.add(rim);

    /* shadow catcher — invisible plane, shows only the shadow */
    const shadowGeo = new THREE.PlaneGeometry(9, 9);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.13 });
    const floor = new THREE.Mesh(shadowGeo, shadowMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.52;
    floor.receiveShadow = true;
    scene.add(floor);

    damper = buildDamper();
    const pivot = new THREE.Group();
    pivot.add(damper.group);
    pivot.rotation.x = 0.07;
    scene.add(pivot);

    const draw = (t) => {
      const s = t / 1000;
      /* constant yaw + pure sine offsets => the loop has no seam */
      pivot.rotation.y = s * 0.2;
      pivot.position.y = Math.sin(s * 0.5) * 0.055;
      pivot.rotation.z = Math.sin(s * 0.34) * 0.014;
      camera.position.x = Math.sin(s * 0.23) * 0.16;
      camera.position.y = Math.sin(s * 0.31) * 0.13;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    /* ---- run only while visible, on screen, and motion is welcome ---- */
    let onScreen = true;
    let hidden = document.hidden;

    const loop = (t) => {
      if (disposed) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (disposed || raf || reduced || !onScreen || hidden) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    if (reduced) draw(0);
    else start();

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                onScreen = e.isIntersecting;
                if (onScreen) start();
                else stop();
              });
            },
            { threshold: 0.05 }
          )
        : null;
    io?.observe(mount);

    const onVis = () => {
      hidden = document.hidden;
      if (hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVis);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      if (reduced) draw(0);
    };
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro?.observe(mount);
    window.addEventListener('resize', resize);

    return () => {
      disposed = true;
      stop();
      io?.disconnect();
      ro?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      shadowGeo.dispose();
      shadowMat.dispose();
      damper?.dispose();
      envRT?.dispose();
      pmrem?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  const cover = coverFor(SUBJECT_SLUG);

  return (
    <div className="relative select-none">
      {/* studio backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 52% at 50% 40%, rgba(255,255,255,.95), rgba(247,248,250,0) 70%), radial-gradient(40% 34% at 62% 78%, rgba(200,16,46,.05), transparent 72%)',
        }}
        aria-hidden="true"
      />

      <div
        ref={mountRef}
        className="relative h-[320px] w-full sm:h-[380px] lg:h-[400px]"
        role="img"
        aria-label={
          product
            ? `${product.name} — rotating three-dimensional product presentation`
            : 'Rotating three-dimensional product presentation'
        }
      >
        {failed && cover ? (
          <img
            src={cover}
            alt={`${product?.name ?? 'Product'} technical illustration`}
            className="h-full w-full object-contain"
          />
        ) : null}
      </div>

      {product ? (
        <div className="relative mt-1 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest2 text-signal-600">{product.model}</p>
          <p className="mt-1.5 font-display text-[15px] font-semibold text-navy-900">{product.name}</p>
        </div>
      ) : null}
    </div>
  );
}

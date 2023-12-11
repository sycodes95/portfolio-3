import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SmokeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Basic setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 0.75);
    light.position.set(-1, 0, 1);
    scene.add(light);

    // Smoke particles
    const smokeParticles: THREE.Mesh[] = [];
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('https://rawgit.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/background.jpg', texture => {
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: texture,
        transparent: false
      });

      const smokeGeometry = new THREE.BufferGeometry();
      const vertices = new Float32Array( [
        -1.0, -1.0,  1.0, // v0
        1.0, -1.0,  1.0, // v1
        1.0,  1.0,  1.0, // v2
        -1.0,  1.0,  1.0, // v3
      ] );
      smokeGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      for (let p = 0; p < 150; p++) {
        const particle = new THREE.Mesh(smokeGeometry, smokeMaterial);
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 2 * Math.PI;

        
        smokeParticles.push(particle);
        scene.add(particle);
      }
    });

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      let delta = clock.getDelta();
      smokeParticles.forEach(particle => {
        particle.rotation.z += delta * 0.2;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      // Additional cleanup logic here if needed
    };
  }, []);

  return <div className='fixed top-0 left-0 flex w-full h-full grow' ref={containerRef}></div>;
};

export default SmokeBackground;


// import { useEffect, useRef } from "react"
// import * as THREE from 'three';

// export default function SmokeBackground () {

//   const rendererRef = useRef<HTMLDivElement | null>(null)

//   useEffect(()=> {
//     const clock = new THREE.Clock()

//     const renderer = new THREE.WebGL1Renderer();
//     renderer.setSize(window.innerWidth, window.innerHeight)

//     const scene = new THREE.Scene();

//     const meshGeometry = new THREE.BufferGeometry() // l8

//     const meshMaterial = new THREE.MeshLambertMaterial({
//       color: 0xaa6666,
//       wireframe: false
//     });

//     const mesh = new THREE.Mesh(meshGeometry, meshMaterial)

//     cubeSineDriver = 0;

    
//   },[])
//   return (
//     <div ref={rendererRef}>asdasd</div>
//   )
// }
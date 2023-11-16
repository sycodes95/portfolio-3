
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Smoke: React.FC = () => {
  
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Variables with types
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let geometry: THREE.BoxGeometry;
    let material: THREE.MeshLambertMaterial;
    let mesh: THREE.Mesh;
    let smokeTexture: THREE.Texture;
    let smokeMaterial: THREE.MeshLambertMaterial;
    let smokeParticles: THREE.Mesh[] = [];

    // Clock for animations
    const clock = new THREE.Clock();

    // Initialize scene, camera, and renderer
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);

    // Add the renderer to the DOM
    mountRef.current!.appendChild(renderer.domElement);

    // Add cube
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshLambertMaterial({ color: 0x5354ff });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 0, 1);
    scene.add(light);

    // Add smoke
    smokeTexture = new THREE.TextureLoader().load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    );
    smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0x353030,
      map: smokeTexture,
      transparent: true
    });
    const smokeGeo = new THREE.PlaneGeometry(300, 300);

    for (let p = 0; p < 200; p++) {
      const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
      particle.position.set(
        Math.random() * 500 - 250,
        Math.random() * 500 - 200,
        Math.random() * 1000 - 500
      );
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      evolveSmoke();
      render();
    };

    // Smoke animation
    const evolveSmoke = () => {
      const delta = clock.getDelta();
      smokeParticles.forEach(particle => {
        particle.rotation.z += delta * 0.15;
      });
    };

    // Render loop
    const render = () => {
      renderer.render(scene, camera);
    };

    // Handle resize
    // const handleResize = () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
    // };

    // // Listeners
    // window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      mountRef.current!.removeChild(renderer.domElement);
      // window.removeEventListener('resize', handleResize);
      smokeParticles.forEach(particle => scene.remove(particle));
      geometry.dispose();
      material.dispose();
      smokeMaterial.dispose();
      smokeTexture.dispose();
    };
  }, []);

  return (
      <div ref={mountRef} className="fixed transition-all duration-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 Smoke" />
  )
  
};

export default Smoke;

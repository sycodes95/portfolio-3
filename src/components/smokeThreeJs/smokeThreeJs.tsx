import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import smokeElementImage from '../../assets/smoke/Smoke-Element.webp';
type SmokeProps = {
  inverted: boolean;
  side: 'left' | 'right';
}
const Smoke: React.FC<SmokeProps> = ({inverted, side}) => {
  
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(inverted ? 0x000000 : 0xffffff);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 0, 1);
    scene.add(light);

    // Smoke
    const smokeTexture = new THREE.TextureLoader().load(smokeElementImage);
    const smokeMaterial = new THREE.MeshLambertMaterial({
      color: inverted ? 0xffffff : 0x303030,
      map: smokeTexture,
      transparent: true
    });
    const smokeGeo = new THREE.PlaneGeometry(300, 300);
    const smokeParticles: THREE.Mesh[] = [];

    for (let p = 0; p < 150; p++) { // Reduced particle count
      const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
      particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 500);
      particle.rotation.z = Math.random() * 2 * Math.PI;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      smokeParticles.forEach(particle => {
        particle.rotation.z += delta * 0.1;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      smokeParticles.forEach(particle => scene.remove(particle));
      smokeGeo.dispose();
      smokeMaterial.dispose();
      smokeTexture.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`fixed  transition-all duration-500 w-full Smoke -z-10`} />;
};

export default Smoke;

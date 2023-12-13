import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AudioVisualizer = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.background = null;
    if(mountRef && mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Create the dots
    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0xffffff });

    const dots = [];
    const spacing = 2;
    const size = 100; // Size of the grid
    for (let x = -size; x < size; x += spacing) {
      for (let y = -size; y < size; y += spacing) {
        const dot = new THREE.Vector3(x, y, 0);
        dots.push(dot);
      }
    }

    dotGeometry.setFromPoints(dots);
    const points = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(points);

    // Audio setup
    const audioContext = new (window.AudioContext || window.AudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    // Set up the audio input
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
      })
      .catch(error => console.error('Error accessing media devices.', error));

    camera.position.z = size * 0.5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Get frequency data
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      // Update dots based on frequency data
      for (let i = 0; i < dataArray.length; i++) {
        const intensity = dataArray[i] / 128.0;
        const scale = intensity * spacing;
        points.geometry.attributes.position.setX(i, scale);
        points.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if(mountRef && mountRef.current) mountRef.current.removeChild(renderer.domElement);
      scene.remove(points);
      // geometry.dispose();
      // material.dispose();
    };
  }, []);

  return <div className='absolute top-0 left-0' ref={mountRef} />;
};

export default AudioVisualizer;

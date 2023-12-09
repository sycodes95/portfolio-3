import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ShaderMaterial, PlaneGeometry } from 'three';
import { shaderMaterial } from '@react-three/drei';
interface TVStaticShaderProps {
  uniforms: {
    time: { value: number };
  };
  vertexShader: string;
  fragmentShader: string;
}

const TVStaticShader: TVStaticShaderProps = {
  uniforms: {
    time: { value: 0.0 },
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 4.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    
    float random (in vec2 st) {
      return fract(sin(dot(st.xy,
      vec2(12.9898,78.233 + time)))
      * 43758.5453123);
    }

    void main() {
      vec2 st = gl_FragCoord.xy/800.0 + time;
      vec3 color = vec3(random(st));

      gl_FragColor = vec4(color,10.0);
    }
  `
};

const StaticPlane: React.FC = () => {
  const shaderRef = useRef<ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial ref={shaderRef} args={[TVStaticShader]} />
    </mesh>
  );
};

const TVStatic: React.FC = () => (
  <Canvas className='w-full h-full -z-10'>
    <StaticPlane />
  </Canvas>
);

export default TVStatic;



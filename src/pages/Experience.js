import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  useHelper,
} from '@react-three/drei';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/CraneWorkout.glb');
  const { actions } = useAnimations(animations, group);
  console.log(actions);

  const directionalLight = useRef();
  useHelper(directionalLight, RectAreaLightHelper, 1);
  return (
    <group ref={group} {...props} dispose={null}>
      <rectAreaLight
        position={[0, 1, 1]}
        intensity={10}
      />

      <group name='Scene'>
        <group
          name='Hand_Mirror'
          position={[-1.505, 1.508, 0.615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name='Cylinder001'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Mirror Frame']}
          />
          <mesh
            name='Cylinder001_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials['Mirror Lens']}
          />
        </group>
        <group
          name='Sweatband'
          position={[-0.005, 1.043, 1.009]}
          rotation={[-0.071, -0.039, 0.101]}
          scale={[-0.046, -0.175, -0.118]}
        >
          <mesh
            name='Torus002'
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={materials['Sweatband white']}
          />
          <mesh
            name='Torus002_1'
            castShadow
            receiveShadow
            geometry={nodes.Torus002_1.geometry}
            material={materials['Sweatband Red']}
          />
          <mesh
            name='Torus002_2'
            castShadow
            receiveShadow
            geometry={nodes.Torus002_2.geometry}
            material={materials['Sweatband Blue']}
          />
        </group>
        <group
          name='Dumbbell'
          position={[0.366, 0.505, 0.636]}
          rotation={[1.249, 0.51, -1.782]}
          scale={[0.018, 0.157, 0.018]}
        >
          <mesh
            name='Cylinder003'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['Dumbell Black']}
          />
          <mesh
            name='Cylinder003_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials['Dumbell Gray']}
          />
        </group>
        <group
          name='Dumbbell_2'
          position={[-0.404, 0.28, 0.927]}
          rotation={[1.534, -0.274, 1.565]}
          scale={[0.018, 0.157, 0.018]}
        >
          <mesh
            name='Cylinder002'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Dumbell Black']}
          />
          <mesh
            name='Cylinder002_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials['Dumbell Gray']}
          />
        </group>
        <group name='Armature' rotation={[-Math.PI, 0, -Math.PI]}>
          <skinnedMesh
            name='Crane'
            geometry={nodes.Crane.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Crane.skeleton}
          />
          <primitive object={nodes.Wing_Elbow_IK_R} />
          <primitive object={nodes.Main_Controller} />
          <primitive object={nodes.Wing_Elbow_IK_L} />
        </group>
        <mesh
          name='Shadow_Catcher'
          castShadow
          receiveShadow
          geometry={nodes.Shadow_Catcher.geometry}
          material={nodes.Shadow_Catcher.material}
          rotation={[0, -Math.PI / 2, 0]}
          scale={6.813}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/CraneWorkout.glb');

const Experience = () => {
  return (
    <div className='experience-wrapper header-wrapper'>
      <Canvas>
        <OrbitControls makeDefault />

        <Model />
      </Canvas>
      <h1 className='header-text'>Experience</h1>
    </div>
  );
};

export default Experience;

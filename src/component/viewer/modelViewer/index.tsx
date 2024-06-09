import styles from "./modelviewer.module.scss";
import { Suspense } from "react";
import ModelRender from "./model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

// const CAMERA_SETTING = {
//   position: new THREE.Vector3(1.9, -0.01, -0.8),
//   near: 0.1,
//   far: 10,
// };

THREE.Cache.enabled = true;
const CAMERA_SETTING = {
  // position: new THREE.Vector3(1, 0.3, -0.5), // 기존
  position: new THREE.Vector3(0.2, 0.5, -0.5), // 1번
  // position: new THREE.Vector3(0.2, 0.5, 5), // 1번
  // fov: 75, // 2번 카메라 이거 설정하기
  near: 0.1,
  far: 10,
  zoom: 120,
};

interface Props {
  modelUrl: string;
}

export default function ModelViewer({ modelUrl }: Props) {
  return (
    <>
      <div className={styles.glbWrapper}>
        <Canvas
          camera={CAMERA_SETTING}
          style={{ width: "100%", margin: "0 auto" }}
        >
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 0]} />
          <Suspense>
            <ModelRender url={modelUrl} />
          </Suspense>
          <OrbitControls enableDamping={true} />
        </Canvas>
      </div>
    </>
  );
}

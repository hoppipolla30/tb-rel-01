import styles from "./modelviewer.module.scss";
import { Suspense } from "react";
import ModelRender from "./model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

THREE.Cache.enabled = true;

const individualSetting = (index: number) => {
  console.log(typeof index);
  switch (index) {
    case 0:
      return {
        px: 0.2,
        py: 0.5,
        pz: -0.5,
        zm: 1,
      };
    case 1:
      return {
        px: 0.2,
        py: 0.5,
        pz: -0.5,
        zm: 14,
      };
    case 2:
      return {
        px: 1.2,
        py: -0.01,
        pz: -4,
        zm: 0,
      };
    case 3:
      return {
        px: 0,
        py: 0.5,
        pz: 1,
        zm: 0.5,
      };
    case 4:
      return {
        px: 0,
        py: 0,
        pz: 1,
        zm: 0.8,
      };
    default:
      return {
        px: 0.2,
        py: 0.5,
        pz: -0.5,
        zm: 0,
      };
  }
};

interface Props {
  modelUrl: string;
  selected: number;
}

export default function ModelViewer({ modelUrl, selected }: Props) {
  return (
    <>
      <div className={styles.glbWrapper}>
        <Canvas
          camera={{
            // position: new THREE.Vector3(0, 0, 1),
            position: new THREE.Vector3(
              individualSetting(selected).px,
              individualSetting(selected).py,
              individualSetting(selected).pz
            ),
            near: 0.1,
            far: 10,
            zoom: individualSetting(selected).zm,
          }}
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

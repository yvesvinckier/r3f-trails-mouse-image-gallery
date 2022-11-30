import { Canvas } from "@react-three/fiber";
import Photos from "./Photos";

const Scene = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <color attach="background" args={["black"]} />
      <Photos />
    </Canvas>
  );
};

export default Scene;

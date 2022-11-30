import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useMemo, useRef, useState } from "react";
import photo1 from "../assets/image_grid.png";
import { appliedForces } from "./helpers";

const Photo = ({ x, y, offset = { x: 0, y: 0 } }) => {
  const { viewport } = useThree();
  const photos = useTexture(photo1);
  const photoMap = useMemo(() => photos.clone(), [photos]);
  photoMap.wrapS = THREE.RepeatWrapping;
  photoMap.wrapT = THREE.RepeatWrapping;
  photoMap.repeat.set(1 / 5, 1 / 5);
  photoMap.offset.set(offset.x, offset.y);
  const ref = useRef();
  const [t, setT] = useState(0);
  const direction = useRef();

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }

    if (!direction.current) {
      direction.current = x > (viewport.width * mouse.x) / 2 ? -1 : 1;
    }
    ref.current.position.add(appliedForces(t, direction.current));
    setT(t + 1);
  });

  return (
    <mesh ref={ref} position-x={x} position-y={y}>
      <planeGeometry args={[1.4, 1.4]} />
      <meshBasicMaterial map={photoMap} />
    </mesh>
  );
};

export default memo(Photo);

import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Photo from "./Photo";
import getPositions from "./helpers";

const Photos = () => {
  const [photos, updatePhotos] = useState([
    {
      x: 0,
      y: 0,
      index: 0,
    },
  ]);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (viewport.width * mouse.x) / 2;
    const y = (viewport.height * mouse.y) / 2;

    updatePhotos((photos) => getPositions(photos, { x, y }));
  });

  return (
    <>
      {photos.map((photo, i) => (
        <Photo
          key={`plane${photo.index}`}
          index={photo.index}
          offset={photo.offset}
          x={photo.x}
          y={photo.y}
        />
      ))}
    </>
    // <Photo index={photo.index} x={photo.x} y={photo.y} />
  );
};

export default Photos;

import { Vector2, Vector3 } from "three";

let t = 0;

const updatedPositions = (
  photos,
  mousePosition,
  distance = 0.6,
  maxphotosCount = 20
) => {
  const d = new Vector2(mousePosition.x, mousePosition.y).distanceTo(
    new Vector2(photos.at(-1)?.x, photos.at(-1)?.y)
  );
  if (d > distance && photos.length < maxphotosCount + 1) {
    t++;
    return [
      // return all the existing photos
      ...photos,
      {
        // plus a new one (photo)
        ...mousePosition,
        index: t,
        offset: {
          x: Math.floor(Math.random() * 5) / 5,
          y: Math.floor(Math.random() * 5) / 5,
        },
      },
    ];
  }

  return photos.length > maxphotosCount
    ? //  if the photos array is longer than the maxphotosCount
      photos.splice(1)
    : //  return the photos array without the first element
      photos.map((plane) => ({ ...plane }));
  // otherwise, return the photos array
};

export default updatedPositions;

export const appliedForces = (t, dir) => {
  return new Vector3(0.5 * dir * t, 10 - t, 0).multiplyScalar(0.001);
};

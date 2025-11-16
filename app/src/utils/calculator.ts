export const calculateMaxDistance = (
  filterSize: number,
  sensorWidth: number,
  sensorHeight: number,
  focalLength: number,
  aperture: number
): number => {
  const sensorDiagonal = Math.sqrt(
    Math.pow(sensorWidth, 2) + Math.pow(sensorHeight, 2)
  );
  const maxDistance =
    ((filterSize - sensorDiagonal) * focalLength) / aperture;
  return maxDistance;
};

import { calculateMaxDistance } from "./calculator";

describe("calculateMaxDistance", () => {
  it("should calculate the maximum distance correctly", () => {
    const filterSize = 36;
    const sensorWidth = 17.7;
    const sensorHeight = 13.4;
    const focalLength = 250;
    const aperture = 51;
    const expectedMaxDistance = 67.64595588235294;

    const result = calculateMaxDistance(
      filterSize,
      sensorWidth,
      sensorHeight,
      focalLength,
      aperture
    );

    expect(result).toBeCloseTo(expectedMaxDistance);
  });
});

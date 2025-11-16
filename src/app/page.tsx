"use client";

import { useState, ChangeEvent } from "react";
import cameras from "@/data/cameras.json";
import filters from "@/data/filters.json";
import telescopes from "@/data/telescopes.json";
import { calculateMaxDistance } from "@/utils/calculator";

export default function Home() {
  const [filterSize, setFilterSize] = useState(filters[0].size);
  const [sensorWidth, setSensorWidth] = useState(cameras[0].sensorWidth);
  const [sensorHeight, setSensorHeight] = useState(cameras[0].sensorHeight);
  const [focalLength, setFocalLength] = useState(telescopes[0].focalLength);
  const [aperture, setAperture] = useState(telescopes[0].aperture);

  const [result, setResult] = useState(0);
  const [sensorDiagonal, setSensorDiagonal] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);

  const calculate = () => {
    const diagonal = Math.sqrt(
      Math.pow(sensorWidth, 2) + Math.pow(sensorHeight, 2)
    );
    setSensorDiagonal(diagonal);
    const maxDistance = calculateMaxDistance(
      filterSize,
      sensorWidth,
      sensorHeight,
      focalLength,
      aperture
    );
    setResult(maxDistance);
    setShowCalculation(true);
  };

  const handleCameraChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const camera = cameras.find((c) => c.name === e.target.value);
    if (camera) {
      setSensorWidth(camera.sensorWidth);
      setSensorHeight(camera.sensorHeight);
    }
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const filter = filters.find((f) => f.name === e.target.value);
    if (filter) {
      setFilterSize(filter.size);
    }
  };

  const handleTelescopeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const telescope = telescopes.find((t) => t.name === e.target.value);
    if (telescope) {
      setFocalLength(telescope.focalLength);
      setAperture(telescope.aperture);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 bg-white p-8 dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Filter Vignetting Calculator
        </h1>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="camera" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Camera
            </label>
            <select
              id="camera"
              onChange={handleCameraChange}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            >
              {cameras.map((camera) => (
                <option key={camera.name} value={camera.name}>
                  {camera.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="filter" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Filter
            </label>
            <select
              id="filter"
              onChange={handleFilterChange}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            >
              {filters.map((filter) => (
                <option key={filter.name} value={filter.name}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telescope" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Telescope
            </label>
            <select
              id="telescope"
              onChange={handleTelescopeChange}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            >
              {telescopes.map((telescope) => (
                <option key={telescope.name} value={telescope.name}>
                  {telescope.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="filterSize" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Filter Size (mm)
            </label>
            <input
              id="filterSize"
              type="number"
              value={filterSize}
              onChange={(e) => setFilterSize(Number(e.target.value))}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sensorWidth" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Sensor Width (mm)
            </label>
            <input
              id="sensorWidth"
              type="number"
              value={sensorWidth}
              onChange={(e) => setSensorWidth(Number(e.target.value))}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sensorHeight" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Sensor Height (mm)
            </label>
            <input
              id="sensorHeight"
              type="number"
              value={sensorHeight}
              onChange={(e) => setSensorHeight(Number(e.target.value))}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="focalLength" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Focal Length (mm)
            </label>
            <input
              id="focalLength"
              type="number"
              value={focalLength}
              onChange={(e) => setFocalLength(Number(e.target.value))}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="aperture" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Aperture (mm)
            </label>
            <input
              id="aperture"
              type="number"
              value={aperture}
              onChange={(e) => setAperture(Number(e.target.value))}
              className="rounded-md border border-solid border-black/[.08] bg-white px-3 py-2 text-black dark:border-white/[.145] dark:bg-black dark:text-white"
            />
          </div>
        </div>
        <button
          onClick={calculate}
          className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
        >
          Calculate
        </button>
        {showCalculation && (
          <div className="flex w-full flex-col gap-4 rounded-md border border-solid border-black/[.08] p-4 dark:border-white/[.145]">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Calculation
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Sensor Diagonal = &radic;(Sensor Width&sup2; + Sensor Height&sup2;)
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Sensor Diagonal = &radic;({sensorWidth}&sup2; + {sensorHeight}&sup2;) = {sensorDiagonal.toFixed(2)} mm
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Max Distance = (Filter Size - Sensor Diagonal) * Focal Length / Aperture
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Max Distance = ({filterSize} - {sensorDiagonal.toFixed(2)}) * {focalLength} / {aperture} = <span className={`font-semibold ${result < 0 ? 'text-red-500' : 'text-black dark:text-white'}`}>{result.toFixed(2)} mm</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Result
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Maximum distance from sensor to filter:{" "}
                <span className={`font-semibold ${result < 0 ? 'text-red-500' : 'text-black dark:text-white'}`}>
                  {result.toFixed(2)} mm
                </span>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

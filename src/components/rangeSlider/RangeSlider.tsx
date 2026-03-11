"use client";
import React, { useState, useEffect, useRef } from "react";

interface RangeSliderProps {
  initialMin: number;
  initialMax: number;
  min: number;
  max: number;
  step: number;
  priceCap: number;
}

const RangeSlider = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}: RangeSliderProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > maxValue) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < minValue) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    if (!progressRef.current) return;

    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="range-slider">
      <div className="slider ">
        <div className="progress " ref={progressRef}></div>
      </div>

      <div className="range-input">
        <div className="value-label" style={{ left: `${minPosition}%` }}>
          ${minValue}
        </div>
        <input
          onChange={handleMin}
          type="range"
          value={minValue}
          min={min}
          step={step}
          max={max}
          className="range-min "
        />
        <div className="value-label" style={{ left: `${maxPosition}%` }}>
          ${maxValue}
        </div>
        <input
          onChange={handleMax}
          type="range"
          value={maxValue}
          min={min}
          step={step}
          max={max}
          className="range-max "
        />
      </div>
    </div>
  );
};

export default RangeSlider;

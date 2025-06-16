import { useState } from "react";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState("1");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleOpacityChange = (e) => {
    const opacityValue = Number(e.target.value);
    setOpacity(opacityValue);
  };

  const getOpacityPercentage = () => {
    const opacityPercentage = Math.round(opacity * 100);
    return `${opacityPercentage}`;
  };

  const getCssCode = () => {
    const CSSCode = `
    background-color: ${color};
    opacity: ${opacity}
    `;
    return CSSCode.trim();
  };

  const r = hexToRgb(color).r;
  const g = hexToRgb(color).g;
  const b = hexToRgb(color).b;
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl">Color Generator</h1>
      <div className="flex flex-col items-center gap-3 mt-4">
        <input
          type="color"
          className="border-1 rounded-sm"
          onChange={handleColorChange}
          value={color}
        />
        <input
          type="range"
          max="1"
          min="0"
          step="0.1"
          onChange={handleOpacityChange}
          value={opacity}
          className="w-60"
        />
        {color && (
          <div
            className="w-40 h-40 mx-auto"
            style={{ background: color, opacity: opacity }}
          ></div>
        )}
        <span>Hex: {color}</span>
        <span>
          RGB: rgb
          {`(${r}, ${g}, ${b})`}
        </span>
        <span>Opacity: {getOpacityPercentage()} %</span>
        <span>{getCssCode()}</span>
      </div>
    </div>
  );
}

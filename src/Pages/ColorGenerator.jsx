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

  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl">Color Generator</h1>
      <div className="flex flex-col items-center gap-2 mt-4">
        <input
          type="color"
          className="border-1 rounded-sm"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="range"
          max="1"
          min="0"
          defaultValue="1"
          step="0.1"
          onChange={(e) => setOpacity(e.target.value)}
        />
        <div
          className="w-40 h-40 mx-auto"
          style={{ background: `${color}`, opacity: `${opacity}` }}
        ></div>
        <span>Hex: {color}</span>
        <span>Opacity: {opacity * 100}%</span>
        <span>
          RGB: rgb
          {`(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b})`}
        </span>
      </div>
    </div>
  );
}

import React from "react";

const KundliChart = ({ houses, title = "Lagna Chart" }) => {
  // SVG coordinates for a standard North Indian Chart (Diamond/Square layout)

  // Coordinates (0-100 scale)
  const center = { x: 50, y: 50 };
  const top = { x: 50, y: 0 };
  const right = { x: 100, y: 50 };
  const bottom = { x: 50, y: 100 };
  const left = { x: 0, y: 50 };
  const topLeft = { x: 0, y: 0 };
  const topRight = { x: 100, y: 0 };
  const bottomLeft = { x: 0, y: 100 };
  const bottomRight = { x: 100, y: 100 };

  // Text positions for each house (approximate center of each zone)
  const housePositions = [
    { id: 1, x: 50, y: 25 }, // H1 (Top Diamond)
    { id: 2, x: 25, y: 12 }, // H2 (Top Left Triangle)
    { id: 3, x: 12, y: 25 }, // H3 (Left Top Triangle)
    { id: 4, x: 25, y: 50 }, // H4 (Left Diamond)
    { id: 5, x: 12, y: 75 }, // H5 (Left Bottom Triangle)
    { id: 6, x: 25, y: 88 }, // H6 (Bottom Left Triangle)
    { id: 7, x: 50, y: 75 }, // H7 (Bottom Diamond)
    { id: 8, x: 75, y: 88 }, // H8 (Bottom Right Triangle)
    { id: 9, x: 88, y: 75 }, // H9 (Right Bottom Triangle)
    { id: 10, x: 75, y: 50 }, // H10 (Right Diamond)
    { id: 11, x: 88, y: 25 }, // H11 (Right Top Triangle)
    { id: 12, x: 75, y: 12 }, // H12 (Top Right Triangle)
  ];

  return (
    <div className="flex flex-col items-center my-4">
      <h3 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <div className="relative w-full max-w-[300px] aspect-square bg-orange-50/30 rounded-lg border border-orange-200 shadow-sm p-1">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-orange-800 stroke-[0.5]"
        >
          {/* Outer Border */}
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="none"
            strokeWidth="1"
          />

          {/* Diagonals */}
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />

          {/* Inner Diamond (Midpoints) */}
          <line x1="50" y1="0" x2="100" y2="50" />
          <line x1="100" y1="50" x2="50" y2="100" />
          <line x1="50" y1="100" x2="0" y2="50" />
          <line x1="0" y1="50" x2="50" y2="0" />

          {/* House Numbers & Planets */}
          {housePositions.map((pos) => {
            const planets = houses[pos.id] || [];
            return (
              <g key={pos.id} className="text-[3px] md:text-[4px]">
                {/* House Number */}
                <text
                  x={pos.x}
                  y={pos.y}
                  dy="-8"
                  textAnchor="middle"
                  className="fill-orange-900/30 font-bold"
                  style={{ fontSize: "6px" }}
                >
                  {pos.id}
                </text>

                {/* Planets List */}
                {planets.map((planet, index) => (
                  <text
                    key={index}
                    x={pos.x}
                    y={pos.y}
                    dy={-2 + index * 5}
                    textAnchor="middle"
                    className="fill-slate-900 font-semibold"
                    style={{ fontSize: "3.5px" }}
                  >
                    {planet}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default KundliChart;

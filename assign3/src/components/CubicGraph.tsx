import { useEffect, useRef } from "react";
import type { CubicCoefficients } from "../types";

interface Props {
  coefficients: CubicCoefficients;
}

export default function CubicGraph({ coefficients }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    for (let x = -10; x <= 10; x += 0.1) {
      const y =
        coefficients.a * x ** 3 +
        coefficients.b * x ** 2 +
        coefficients.c * x +
        coefficients.d;

      const canvasX = x * 20 + canvas.width / 2;
      const canvasY = -y * 20 + canvas.height / 2;

      if (x === -10) {
        ctx.moveTo(canvasX, canvasY);
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }

    ctx.stroke();
  }, [coefficients]);

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-lg ring-1 ring-slate-200">
      <div className="mb-4 flex items-center justify-between">
      </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-300">
        <canvas ref={canvasRef} width={400} height={400} className="block w-full" />
      </div>
    </div>
  );
}

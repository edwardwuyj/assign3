import type { CubicCoefficients } from "../types";

function formatValue(value: number) {
  return Number.isFinite(value) ? value.toFixed(4) : String(value);
}

export default function CubicEquation({ a, b, c, d }: CubicCoefficients) {
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-lg ring-1 ring-slate-200">
      <div className="space-y-5">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600">
            Current Cubic
          </div>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            {a}x^3 + {b}x^2 + {c}x + {d}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">p</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">{formatValue(p)}</div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">q</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">{formatValue(q)}</div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">discriminant</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">{formatValue(discriminant)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

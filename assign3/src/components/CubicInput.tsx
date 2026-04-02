import type { CubicCoefficients } from "../types";

interface Props {
  coefficients: CubicCoefficients;
  onChange: (coeffs: CubicCoefficients) => void;
  onSave: () => void;
}

export default function CubicInput({ coefficients, onChange, onSave }: Props) {
  const handleChange = (key: keyof CubicCoefficients, value: string) => {
    onChange({
      ...coefficients,
      [key]: Number(value),
    });
  };

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-lg ring-1 ring-slate-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Cubic Inputs</h2>
          <p className="mt-1 text-sm text-slate-500">
            Change coefficients for a, b, c, and d.
          </p>
        </div>
        <button
          onClick={onSave}
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Save equation
        </button>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {(["a", "b", "c", "d"] as (keyof CubicCoefficients)[]).map((key) => (
          <label key={key} className="flex flex-col gap-2">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-600">
              {key}
            </span>
            <input
              type="number"
              value={coefficients[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

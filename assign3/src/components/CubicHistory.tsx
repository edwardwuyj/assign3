import type { CubicCoefficients } from "../types";

interface Props {
  history: CubicCoefficients[];
  onSelect: (coeffs: CubicCoefficients) => void;
}

export default function CubicHistory({ history, onSelect }: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-200">
      
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Saved Equations
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Click a row to restore a previous coefficient set.
        </p>
      </div>

      {/* Empty State */}
      {history.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">
          No saved equations yet.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          
          <table className="min-w-full text-sm">
            
            {/* Table Head */}
            <thead className="bg-slate-100">
              <tr>
                {["a", "b", "c", "d"].map((label) => (
                  <th
                    key={label}
                    className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => onSelect(item)}
                  className="cursor-pointer border-t transition duration-200 hover:bg-blue-50 hover:scale-[1.01]"
                >
                  <td className="px-5 py-3 font-medium text-slate-700">
                    {item.a}
                  </td>
                  <td className="px-5 py-3 text-slate-700">
                    {item.b}
                  </td>
                  <td className="px-5 py-3 text-slate-700">
                    {item.c}
                  </td>
                  <td className="px-5 py-3 text-slate-700">
                    {item.d}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}
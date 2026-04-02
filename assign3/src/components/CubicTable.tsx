import type { CubicCoefficients } from "../types";

interface Props {
  coefficients: CubicCoefficients;
}

export default function CubicTable({ coefficients }: Props) {
  const { a, b, c, d } = coefficients;
    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  return (
    <table className="table-auto border mt-4">
      <tbody>
        <tr>
          <td className="border px-4">p</td>
          <td className="border px-4">{p.toFixed(4)}</td>
        </tr>
        <tr>
          <td className="border px-4">q</td>
          <td className="border px-4">{q.toFixed(4)}</td>
        </tr>
        <tr>
          <td className="border px-4">Discriminant</td>
          <td className="border px-4">{discriminant.toFixed(4)}</td>
        </tr>
      </tbody>
    </table>
  );
}
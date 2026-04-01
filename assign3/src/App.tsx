import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    </>
  )
}

export default App

function solveCubic(a: number, b: number, c: number, d: number) {
  const p = (3 * a * c - b ** 2) / (3 * a * a);
  const q = (2 * b ** 3 - 9 * a * b * c + 27 * a * a * d) / (27 * a ** 3);
  const discriminant = q * q / 4 + p * p * p / 27;
  const shift = -b / (3 * a);

  if (discriminant > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
    const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
    return { p, q, discriminant, roots: [u + v + shift, "Complex", "Complex"] };
  }

  if (discriminant === 0) {
    const u = Math.cbrt(-q / 2);
    return { p, q, discriminant, roots: [2 * u + shift, -u + shift, -u + shift] };
  }

  const r = Math.sqrt(-p * 3 / 27);
  const theta = Math.acos(-q / (2 * r));
  const t = 2 * Math.cbrt(r);

  return {
    p,
    q,
    discriminant,
    roots: [
      t * Math.cos(theta / 3) + shift,
      t * Math.cos((theta + 2 * Math.PI) / 3) + shift,
      t * Math.cos((theta + 4 * Math.PI) / 3) + shift,
    ],
  };
}
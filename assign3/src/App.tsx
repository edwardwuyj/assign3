import { useState } from "react";
import CubicInput from "./components/CubicInput";
import CubicEquation from "./components/CubicEquation";
import CubicGraph from "./components/CubicGraph";
import CubicHistory from "./components/CubicHistory";
import type { CubicCoefficients } from "./types";

export default function App() {
  const [coefficients, setCoefficients] = useState<CubicCoefficients>({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  });

  const [history, setHistory] = useState<CubicCoefficients[]>([]);

  const handleSave = () => {
    setHistory([...history, coefficients]);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
    
    <div className="w-full max-w-5xl p-6 space-y-6">
      
      <h1 className="text-3xl font-bold text-center text-slate-800">
        Cubic Function Calculator
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <CubicInput
          coefficients={coefficients}
          onChange={setCoefficients}
          onSave={handleSave}
        />

        <CubicEquation {...coefficients} />
      </div>

      <CubicGraph coefficients={coefficients} />

      <CubicHistory
        history={history}
        onSelect={setCoefficients}
      />

    </div>
  </div>
);


}

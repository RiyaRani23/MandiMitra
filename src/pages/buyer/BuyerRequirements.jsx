import { useState } from "react";
import { Mic, Keyboard } from "lucide-react";

import ManualRequirementForm from "../../components/buyer/ManualRequirementForm";
import VoiceRequirementForm from "../../components/buyer/VoiceRequirementForm";

const BuyerRequirements = () => {
  const [mode, setMode] = useState("manual");

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      <section>
        <p className="text-sm text-gray-500">Buyer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Buying Requirements
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Tell us what you want to buy and connect with suitable farmers.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => setMode("manual")}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
              mode === "manual"
                ? "bg-[#123c2c] text-white"
                : "bg-[#f6f8f5] text-gray-600"
            }`}
          >
            <Keyboard size={18} />
            Manual Entry
          </button>

          <button
            onClick={() => setMode("voice")}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
              mode === "voice"
                ? "bg-[#f7941d] text-white"
                : "bg-[#f6f8f5] text-gray-600"
            }`}
          >
            <Mic size={18} />
            Voice Mode
          </button>
        </div>
      </section>

      {mode === "manual" ? (
        <ManualRequirementForm />
      ) : (
        <VoiceRequirementForm />
      )}
    </div>
  );
};

export default BuyerRequirements;
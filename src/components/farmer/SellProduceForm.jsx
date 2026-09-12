import { useState } from "react";
import ManualProductionForm from "./ManualProductionForm";
import VoiceProductionForm from "./VoiceProductionForm";
import { FileText, Mic } from "lucide-react";

const SellProduceForm = ({ onSubmit }) => {
  const [inputMode, setInputMode] = useState("manual");

  const handleManualSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <section className="rounded-3xl border border-black/5 bg-white/90 backdrop-blur-xl p-6 shadow-sm md:p-8 space-y-6">
      {/* Toggle */}
      <div className="flex rounded-2xl bg-gray-100/80 p-1.5 border border-black/5">
        <button
          type="button"
          onClick={() => setInputMode("manual")}
          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
            inputMode === "manual"
              ? "bg-white text-emerald-800 shadow-sm scale-[1.01]"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FileText size={16} className={inputMode === "manual" ? "text-emerald-600" : "text-gray-400"} />
          <span>Enter Details</span>
        </button>

        <button
          type="button"
          onClick={() => setInputMode("voice")}
          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
            inputMode === "voice"
              ? "bg-white text-emerald-800 shadow-sm scale-[1.01]"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <Mic size={16} className={inputMode === "voice" ? "text-emerald-600" : "text-gray-400"} />
          <span>Tell by Voice</span>
        </button>
      </div>

      {/* Form Container */}
      <div className="transition-all duration-300">
        {inputMode === "manual" ? (
          <ManualProductionForm onSubmit={handleManualSubmit} />
        ) : (
          <VoiceProductionForm />
        )}
      </div>
    </section>
  );
};

export default SellProduceForm;
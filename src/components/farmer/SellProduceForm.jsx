import { useState } from "react";
import ManualProductionForm from "./ManualProductionForm";
import VoiceProductionForm from "./VoiceProductionForm";

const SellProduceForm = ({ onSubmit }) => {
  const [inputMode, setInputMode] = useState("manual");

  const handleManualSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
      {/* Toggle */}
      <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setInputMode("manual")}
          className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
            inputMode === "manual"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          📝 Enter Details
        </button>

        <button
          type="button"
          onClick={() => setInputMode("voice")}
          className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
            inputMode === "voice"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          🎙️ Tell by Voice
        </button>
      </div>

      {/* Form */}
      {inputMode === "manual" ? (
        <ManualProductionForm onSubmit={handleManualSubmit} />
      ) : (
        <VoiceProductionForm />
      )}
    </section>
  );
};

export default SellProduceForm;
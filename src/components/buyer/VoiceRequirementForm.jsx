import { useState } from "react";
import { Mic } from "lucide-react";

const VoiceRequirementForm = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center sm:p-12">
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
          listening
            ? "animate-pulse bg-red-100 text-red-500"
            : "bg-[#eaf4eb] text-[#197044]"
        }`}
      >
        <Mic size={36} />
      </div>

      <h2 className="mt-5 text-xl font-semibold text-[#123c2c]">
        {listening ? "Listening..." : "Tell us what you want to buy"}
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
        Speak naturally about the crop, quantity, quality and location you
        need.
      </p>

      <button
        onClick={startVoice}
        disabled={listening}
        className={`mt-6 rounded-xl px-6 py-3 text-sm font-medium text-white ${
          listening
            ? "cursor-not-allowed bg-gray-400"
            : "bg-[#f7941d] hover:bg-[#e8830d]"
        }`}
      >
        <span className="flex items-center gap-2">
          <Mic size={18} />
          {listening ? "Listening..." : "Start Speaking"}
        </span>
      </button>

      {transcript && (
        <div className="mx-auto mt-6 max-w-xl rounded-xl bg-[#f6f8f5] p-4 text-left">
          <p className="text-xs font-medium text-gray-500">
            What you said
          </p>

          <p className="mt-2 text-sm text-[#123c2c]">
            {transcript}
          </p>
        </div>
      )}

      <p className="mt-5 text-xs text-gray-400">
        Example: “I need 50 quintals of Grade A onion in Nashik.”
      </p>
    </section>
  );
};

export default VoiceRequirementForm;
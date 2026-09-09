import { useRef, useState } from "react";

const VoiceProductionForm = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [error, setError] = useState("");

  const recognitionRef = useRef(null);

  const startListening = () => {
    setError("");

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError(
        "Voice recognition is not supported in this browser. Please use Chrome or Edge."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsListening(true);
      setError("");
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setSpokenText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);

      setIsListening(false);

      if (event.error === "not-allowed") {
        setError(
          "Microphone permission was denied. Please allow microphone access."
        );
      } else if (event.error === "no-speech") {
        setError("No speech detected. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleVoice = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          Voice Mode
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-900">
          Tell us about your produce
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-sm text-gray-500">
          Speak naturally. Tell us what crop you have, how much you have,
          its quality, where it is, and when you want to sell.
        </p>
      </div>

      <div className="mx-auto mb-6 max-w-xl rounded-xl bg-green-50 p-4">
        <p className="text-xs font-semibold text-green-700">
          You can say something like:
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          “I have 500 kg of Grade A onion in Nashik and I want to sell it
          today.”
        </p>
      </div>

      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleVoice}
          className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl shadow-md transition ${
            isListening
              ? "animate-pulse bg-red-500 text-white"
              : "bg-green-700 text-white hover:bg-green-800"
          }`}
        >
          🎙️
        </button>

        <p className="mt-4 text-sm font-medium text-gray-700">
          {isListening
            ? "Listening... Tap to stop"
            : "Tap the microphone to speak"}
        </p>
      </div>

      {error && (
        <div className="mx-auto mt-5 max-w-xl rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="mt-7">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Your voice input
        </label>

        <textarea
          value={spokenText}
          onChange={(e) => setSpokenText(e.target.value)}
          placeholder="Your spoken details will appear here..."
          rows={4}
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <button
        type="button"
        disabled={!spokenText.trim()}
        className="mt-5 w-full rounded-xl bg-green-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Find Best Selling Option →
      </button>
    </div>
  );
};

export default VoiceProductionForm;
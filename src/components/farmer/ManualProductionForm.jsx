import { useState } from "react";
import { Sparkles, ArrowRight, MapPin } from "lucide-react";

const ManualProductionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    crop: "",
    quantity: "",
    quality: "",
    location: "",
    sellTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const sellOptions = [
    {
      value: "today",
      title: "Today",
      icon: "⚡",
    },
    {
      value: "tomorrow",
      title: "Tomorrow",
      icon: "📅",
    },
    {
      value: "within-3-days",
      title: "Within 3 days",
      icon: "🗓️",
    },
    {
      value: "within-week",
      title: "Within a week",
      icon: "📆",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 tracking-wide border border-emerald-200/50">
          <Sparkles size={13} className="text-emerald-600" />
          STEP 01 · Your Produce
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
          Tell us about your produce
        </h2>

        <p className="max-w-xl text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
          Enter a few details about your crop. We'll use this information to find the best selling opportunities for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* CROP + QUANTITY */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* CROP */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">
              What are you selling?
            </label>

            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              placeholder="e.g. Wheat, Onion, Tomato"
              required
              className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-3.5 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 shadow-2xs"
            />

            <p className="text-[11px] text-gray-400 font-medium pl-1">
              Enter the name of your crop
            </p>
          </div>

          {/* QUANTITY */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">
              How much do you have?
            </label>

            <div className="flex shadow-2xs rounded-2xl overflow-hidden border border-gray-100 focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500"
                min="1"
                required
                className="w-full bg-[#f8faf8] px-4 py-3.5 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white"
              />

              <span className="flex items-center bg-gray-100/80 px-5 text-xs font-bold text-gray-500 border-l border-gray-200/60">
                kg
              </span>
            </div>

            <p className="text-[11px] text-gray-400 font-medium pl-1">
              Approximate quantity is okay
            </p>
          </div>
        </div>

        {/* QUALITY */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">
            What is the quality?
          </label>

          <select
            name="quality"
            value={formData.quality}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-3.5 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 cursor-pointer shadow-2xs"
          >
            <option value="">Select produce quality</option>
            <option value="Grade A">Grade A — Premium</option>
            <option value="Grade B">Grade B — Good</option>
            <option value="Grade C">Grade C — Standard</option>
          </select>

          <p className="text-[11px] text-gray-400 font-medium pl-1">
            Choose the quality/grade of your produce
          </p>
        </div>

        {/* LOCATION */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">
            Where is your produce located?
          </label>

          <div className="relative shadow-2xs rounded-2xl overflow-hidden">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
              <MapPin size={18} />
            </span>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Akola, Maharashtra"
              required
              className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <p className="text-[11px] text-gray-400 font-medium pl-1">
            We'll look for nearby markets from this location
          </p>
        </div>

        {/* SELLING TIME */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">
              When do you want to sell?
            </label>

            <p className="mt-0.5 text-[11px] text-gray-400 font-medium">
              Select your preferred selling time
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sellOptions.map((option) => {
              const selected = formData.sellTime === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      sellTime: option.value,
                    }))
                  }
                  className={`group rounded-2xl border p-4 text-left transition-all duration-300 shadow-2xs ${
                    selected
                      ? "border-emerald-300 bg-emerald-50/80 ring-2 ring-emerald-500/10 shadow-sm scale-[1.02]"
                      : "border-gray-100 bg-[#f8faf8] hover:border-emerald-200 hover:bg-white"
                  }`}
                >
                  <div className="text-xl">
                    {option.icon}
                  </div>

                  <p
                    className={`mt-2 text-xs sm:text-sm font-bold tracking-tight ${
                      selected
                        ? "text-emerald-900"
                        : "text-gray-800"
                    }`}
                  >
                    {option.title}
                  </p>

                  {selected && (
                    <p className="mt-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                      Selected ✓
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {!formData.sellTime && (
            <input
              type="text"
              required
              value=""
              onChange={() => {}}
              className="pointer-events-none absolute h-0 w-0 opacity-0"
              tabIndex={-1}
              aria-hidden="true"
            />
          )}
        </div>

        {/* SUBMIT */}
        <div className="border-t border-gray-100 pt-6">
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 py-4 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:scale-[1.01] active:scale-[0.98]"
          >
            <span>Find Best Selling Option</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-3 text-center text-[11px] text-gray-400 font-medium">
            We'll compare available market prices for your produce.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ManualProductionForm;
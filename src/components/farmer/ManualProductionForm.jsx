import { useState } from "react";

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
      <div className="mb-7">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            STEP 01
          </span>
          <span className="text-xs text-gray-400">
            Your Produce
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Tell us about your produce
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
          Enter a few details about your crop. We'll use this
          information to find the best selling opportunities for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* CROP + QUANTITY */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* CROP */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              What are you selling?
            </label>

            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              placeholder="e.g. Wheat, Onion, Tomato"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50"
            />

            <p className="mt-1.5 text-xs text-gray-400">
              Enter the name of your crop
            </p>
          </div>

          {/* QUANTITY */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              How much do you have?
            </label>

            <div className="flex">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500"
                min="1"
                required
                className="w-full rounded-l-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50"
              />

              <span className="flex items-center rounded-r-xl border border-l-0 border-gray-200 bg-gray-100 px-5 text-sm font-semibold text-gray-500">
                kg
              </span>
            </div>

            <p className="mt-1.5 text-xs text-gray-400">
              Approximate quantity is okay
            </p>
          </div>
        </div>

        {/* QUALITY */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            What is the quality?
          </label>

          <select
            name="quality"
            value={formData.quality}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50"
          >
            <option value="">Select produce quality</option>
            <option value="Grade A">Grade A — Premium</option>
            <option value="Grade B">Grade B — Good</option>
            <option value="Grade C">Grade C — Standard</option>
          </select>

          <p className="mt-1.5 text-xs text-gray-400">
            Choose the quality/grade of your produce
          </p>
        </div>

        {/* LOCATION */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Where is your produce located?
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              📍
            </span>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Akola, Maharashtra"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50"
            />
          </div>

          <p className="mt-1.5 text-xs text-gray-400">
            We'll look for nearby markets from this location
          </p>
        </div>

        {/* SELLING TIME */}
        <div>
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700">
              When do you want to sell?
            </label>

            <p className="mt-1 text-xs text-gray-400">
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
                  className={`rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-green-500 bg-green-50 ring-2 ring-green-100"
                      : "border-gray-200 bg-gray-50 hover:border-green-300 hover:bg-green-50/50"
                  }`}
                >
                  <div className="text-xl">
                    {option.icon}
                  </div>

                  <p
                    className={`mt-2 text-sm font-semibold ${
                      selected
                        ? "text-green-700"
                        : "text-gray-700"
                    }`}
                  >
                    {option.title}
                  </p>

                  {selected && (
                    <p className="mt-1 text-xs font-medium text-green-600">
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
        <div className="border-t border-gray-100 pt-5">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-green-800 hover:shadow-md active:scale-[0.99]"
          >
            <span>Find Best Selling Option</span>
            <span className="text-lg">→</span>
          </button>

          <p className="mt-3 text-center text-xs text-gray-400">
            We'll compare available market prices for your produce.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ManualProductionForm;

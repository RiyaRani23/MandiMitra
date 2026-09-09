import { useState } from "react";
import { CalendarDays, MapPin, Plus, Wheat } from "lucide-react";

const ManualRequirementForm = () => {
  const [form, setForm] = useState({
    crop: "",
    quantity: "",
    unit: "Quintal",
    grade: "",
    location: "",
    expectedPrice: "",
    requiredBy: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buying Requirement:", form);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#197044]";

  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-[#eaf4eb] p-3 text-[#197044]">
          <Wheat size={22} />
        </div>

        <div>
          <h2 className="font-semibold text-[#123c2c]">
            Post a Buying Requirement
          </h2>
          <p className="text-xs text-gray-500">
            Tell farmers what produce you need.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-5 md:grid-cols-2"
      >
        <div>
          <label className="text-sm font-medium text-gray-700">
            Crop / Commodity
          </label>
          <select
            name="crop"
            value={form.crop}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select crop</option>
            {["Onion", "Tomato", "Potato", "Wheat", "Rice", "Maize"].map(
              (crop) => (
                <option key={crop}>{crop}</option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Quantity Required
          </label>

          <div className="mt-2 flex gap-2">
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#197044]"
              required
            />

            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="rounded-xl border border-gray-200 px-3 text-sm"
            >
              <option>Quintal</option>
              <option>Ton</option>
              <option>Kg</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Quality / Grade
          </label>
          <select
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select grade</option>
            {["Grade A", "Grade B", "Grade C", "Any Grade"].map((grade) => (
              <option key={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Preferred Location
          </label>

          <div className="relative">
            <MapPin
              size={17}
              className="absolute left-3 top-5 text-gray-400"
            />
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. Nashik"
              className={`${inputClass} pl-10`}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Expected Price / Quintal
          </label>
          <input
            type="number"
            name="expectedPrice"
            value={form.expectedPrice}
            onChange={handleChange}
            placeholder="₹ Enter expected price"
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Required By
          </label>

          <div className="relative">
            <CalendarDays
              size={17}
              className="absolute left-3 top-5 text-gray-400"
            />
            <input
              type="date"
              name="requiredBy"
              value={form.requiredBy}
              onChange={handleChange}
              className={`${inputClass} pl-10`}
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Additional Requirements
          </label>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Packaging, delivery or other requirements..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="flex w-fit items-center gap-2 rounded-xl bg-[#123c2c] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d3024]"
        >
          <Plus size={18} />
          Post Buying Requirement
        </button>
      </form>
    </section>
  );
};

export default ManualRequirementForm;
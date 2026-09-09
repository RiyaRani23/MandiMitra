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

  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          Your Produce
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-900">
          Tell us about your produce
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter the details below so we can find the best selling option for
          you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Crop */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Crop
          </label>

          <input
            type="text"
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            placeholder="e.g. Onion"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Quantity
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
              className="w-full rounded-l-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />

            <span className="flex items-center rounded-r-xl border border-l-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500">
              kg
            </span>
          </div>
        </div>

        {/* Quality */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Quality
          </label>

          <select
            name="quality"
            value={formData.quality}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            <option value="">Select quality</option>
            <option value="Grade A">Grade A</option>
            <option value="Grade B">Grade B</option>
            <option value="Grade C">Grade C</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Nashik"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* Sell Time */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            When do you want to sell?
          </label>

          <select
            name="sellTime"
            value={formData.sellTime}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            <option value="">Select option</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="within-3-days">Within 3 days</option>
            <option value="within-week">Within a week</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-green-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Find Best Selling Option →
        </button>
      </form>
    </div>
  );
};

export default ManualProductionForm;
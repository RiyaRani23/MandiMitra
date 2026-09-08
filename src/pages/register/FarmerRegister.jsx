import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationSelector from "../../components/LocationSelector";

function FarmerRegister() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    district: "",
    block: "",
    village: "",
    pincode: "",
    crops: "",
    landSize: "",
    irrigationType: "",
    farmingType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Farmer Registration Data:", formData);

    navigate("/otp-verification", {
      state: {
        role: "farmer",
        mobile: formData.mobile,
      },
    });
    // backend will be added later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="text-2xl font-bold text-green-700">
          MandiMitra
        </Link>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Main */}
      <main className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl rounded-3xl bg-white p-7 shadow-xl sm:p-10">
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              👨‍🌾
            </div>

            <p className="text-sm font-semibold tracking-wider text-green-600">
              FARMER REGISTRATION
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Create your farmer account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {step === 1
                ? "Tell us a little about yourself to get started."
                : "Tell us about your farm and location."}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center">
              {/* Step 1 */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                  step >= 1
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              {/* Progress Line */}
              <div className="h-1 flex-1 bg-gray-200">
                <div
                  className={`h-1 transition-all duration-300 ${
                    step === 2 ? "w-full bg-green-600" : "w-0"
                  }`}
                />
              </div>

              {/* Step 2 */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                  step === 2
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
            </div>

            <div className="mt-2 flex justify-between text-xs">
              <span
                className={
                  step === 1 ? "font-semibold text-green-700" : "text-gray-400"
                }
              >
                Account Details
              </span>

              <span
                className={
                  step === 2 ? "font-semibold text-green-700" : "text-gray-400"
                }
              >
                Farm & Location
              </span>
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Mobile + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Continue */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Continue →
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location Heading */}
              <div className="rounded-2xl bg-green-50 p-5">
                <h2 className="font-semibold text-green-800">
                  📍 Farm Location
                </h2>

                <p className="mt-1 text-sm text-green-700">
                  Your location helps us provide nearby mandi prices, buyers and
                  logistics options.
                </p>
              </div>

              <LocationSelector
                onLocationChange={(location) => {
                  setFormData((prev) => ({
                    ...prev,
                    state: location.state,
                    district: location.district,
                    pincode: location.pincode,
                  }));
                }}
              />

              {/* Block + Village */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Block
                  </label>

                  <input
                    type="text"
                    name="block"
                    value={formData.block}
                    onChange={handleChange}
                    placeholder="Enter your block"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Village
                  </label>

                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    placeholder="Enter your village"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Farm Details */}
              <div className="rounded-2xl bg-gray-50 p-5">
                <h2 className="font-semibold text-gray-800">🌾 Farm Details</h2>

                <p className="mt-1 text-sm text-gray-500">
                  This information will help MandiMitra match you with suitable
                  buyers and opportunities.
                </p>
              </div>

              {/* Crops */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Main Crops
                </label>

                <input
                  type="text"
                  name="crops"
                  value={formData.crops}
                  onChange={handleChange}
                  placeholder="e.g. Onion, Wheat, Rice"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />

                <p className="mt-1 text-xs text-gray-400">
                  You can enter multiple crops separated by commas.
                </p>
              </div>

              {/* Land Size + Irrigation */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Farm Size (in acres)
                  </label>

                  <input
                    type="number"
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    min="0"
                    step="0.1"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Irrigation Type
                  </label>

                  <select
                    name="irrigationType"
                    value={formData.irrigationType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select irrigation type</option>
                    <option value="rainfed">Rainfed</option>
                    <option value="canal">Canal</option>
                    <option value="borewell">Borewell</option>
                    <option value="drip">Drip Irrigation</option>
                    <option value="sprinkler">Sprinkler</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Farming Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Farming Type
                </label>

                <select
                  name="farmingType"
                  value={formData.farmingType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                >
                  <option value="">Select farming type</option>
                  <option value="individual">Individual Farmer</option>
                  <option value="family">Family Farming</option>
                  <option value="lease">Lease Farming</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 rounded-xl border border-gray-200 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-2/3 rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          {/* Back to Role Selection */}
          <div className="mt-6 text-center">
            <Link
              to="/register"
              className="text-sm font-medium text-gray-500 hover:text-green-700"
            >
              ← Change registration type
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FarmerRegister;

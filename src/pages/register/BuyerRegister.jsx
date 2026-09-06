import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function BuyerRegister() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contactPerson: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",

    businessName: "",
    buyerType: "",

    state: "",
    district: "",
    city: "",
    address: "",
    pincode: "",

    crops: "",
    qualityGrade: "",
    buyingCapacity: "",
    procurementArea: "",
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

    console.log("Buyer Registration Data:", formData);

    navigate("/verification-pending", {
    state: {
      role: "buyer",
    },
  });

    // Backend will be connected later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

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
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              🏪
            </div>

            <p className="text-sm font-semibold tracking-wider text-blue-600">
              BUYER REGISTRATION
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Create your buyer account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {step === 1
                ? "Tell us about yourself and your business."
                : "Tell us about your business location and procurement needs."}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center">

              {/* Step 1 */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                  step >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              {/* Progress Line */}
              <div className="h-1 flex-1 bg-gray-200">
                <div
                  className={`h-1 transition-all duration-300 ${
                    step === 2 ? "w-full bg-blue-600" : "w-0"
                  }`}
                />
              </div>

              {/* Step 2 */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                  step === 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
            </div>

            <div className="mt-2 flex justify-between text-xs">
              <span
                className={
                  step === 1
                    ? "font-semibold text-blue-700"
                    : "text-gray-400"
                }
              >
                Account & Business
              </span>

              <span
                className={
                  step === 2
                    ? "font-semibold text-blue-700"
                    : "text-gray-400"
                }
              >
                Procurement Details
              </span>
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">

              {/* Contact Person */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Contact Person Name
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Enter contact person's name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                    placeholder="Enter business email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Business Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Business / Company Name
                </label>

                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business or company name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Buyer Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Buyer Type
                </label>

                <select
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select buyer type</option>
                  <option value="trader">Trader</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="processor">Processor</option>
                  <option value="retailer">Retailer</option>
                  <option value="exporter">Exporter</option>
                  <option value="other">Other</option>
                </select>
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Continue */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Continue →
              </button>

            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Business Location */}
              <div className="rounded-2xl bg-blue-50 p-5">
                <h2 className="font-semibold text-blue-800">
                  📍 Business Location
                </h2>

                <p className="mt-1 text-sm text-blue-700">
                  Your location helps us connect you with nearby farmers,
                  FPOs and agricultural markets.
                </p>
              </div>

              {/* State + District */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    District
                  </label>

                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter your district"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* City / Block + Pincode */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    City / Block
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city or block"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter 6-digit pincode"
                    maxLength="6"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Business Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Business Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete business address"
                  rows="3"
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Procurement Section */}
              <div className="rounded-2xl bg-gray-50 p-5">
                <h2 className="font-semibold text-gray-800">
                  🌾 Procurement Requirements
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  This helps MandiMitra find suitable farmers and FPOs
                  for your requirements.
                </p>
              </div>

              {/* Crops */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Crops Interested In
                </label>

                <input
                  type="text"
                  name="crops"
                  value={formData.crops}
                  onChange={handleChange}
                  placeholder="e.g. Onion, Wheat, Potato"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-1 text-xs text-gray-400">
                  Enter multiple crops separated by commas.
                </p>
              </div>

              {/* Quality */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Required Quality / Grade
                </label>

                <select
                  name="qualityGrade"
                  value={formData.qualityGrade}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select required quality</option>
                  <option value="premium">Premium / Grade A</option>
                  <option value="standard">Standard / Grade B</option>
                  <option value="mixed">Mixed Grades</option>
                  <option value="any">Any Quality</option>
                </select>
              </div>

              {/* Buying Capacity */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Approximate Buying Capacity
                </label>

                <select
                  name="buyingCapacity"
                  value={formData.buyingCapacity}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select monthly capacity</option>
                  <option value="under-50">Under 50 Quintals</option>
                  <option value="50-200">50–200 Quintals</option>
                  <option value="200-500">200–500 Quintals</option>
                  <option value="500-1000">500–1,000 Quintals</option>
                  <option value="1000-plus">1,000+ Quintals</option>
                </select>
              </div>

              {/* Procurement Area */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Procurement Area
                </label>

                <input
                  type="text"
                  name="procurementArea"
                  value={formData.procurementArea}
                  onChange={handleChange}
                  placeholder="e.g. Nashik district or within 100 km"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
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
                  className="w-2/3 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
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

export default BuyerRegister;


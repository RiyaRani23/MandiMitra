import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FPORegister() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fpoName: "",
    contactPerson: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",

    registrationType: "",
    establishmentYear: "",

    state: "",
    district: "",
    block: "",
    cityVillage: "",
    address: "",
    pincode: "",

    memberFarmers: "",
    mainCrops: "",
    totalArea: "",
    procurementAreas: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FPO Registration Data:", formData);

    navigate("/verification-pending", {
    state: {
      role: "fpo",
    },
  });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 px-4 py-10">

      {/* Header */}
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <Link
          to="/"
          className="text-3xl font-bold text-green-700"
        >
          Mandi<span className="text-orange-500">Mitra</span>
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Register as an FPO
        </h1>

        <p className="mt-2 text-gray-600">
          Create your FPO profile and connect with farmers and buyers.
        </p>
      </div>

      {/* Main Card */}
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        {/* Progress */}
        <div className="mb-8 flex items-center justify-center">

          <div className="flex items-center">

            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  step >= 1
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>

              <span className="mt-2 text-sm font-medium text-gray-700">
                Account & Organization
              </span>
            </div>

            <div
              className={`mx-3 h-1 w-16 sm:w-24 ${
                step >= 2 ? "bg-green-600" : "bg-gray-200"
              }`}
            ></div>

            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  step >= 2
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>

              <span className="mt-2 text-sm font-medium text-gray-700">
                FPO Profile & Location
              </span>
            </div>

          </div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                Account & Organization Details
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                {/* FPO Name */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    FPO Name
                  </label>

                  <input
                    type="text"
                    name="fpoName"
                    value={formData.fpoName}
                    onChange={handleChange}
                    placeholder="Enter FPO / organization name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Authorized / Contact Person
                  </label>

                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Enter contact person's name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Registration Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Registration Type
                  </label>

                  <select
                    name="registrationType"
                    value={formData.registrationType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  >
                    <option value="">Select registration type</option>
                    <option value="FPO">Farmer Producer Organization</option>
                    <option value="FPC">Farmer Producer Company</option>
                    <option value="Cooperative">Cooperative</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Establishment Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Year of Establishment
                  </label>

                  <input
                    type="number"
                    name="establishmentYear"
                    value={formData.establishmentYear}
                    onChange={handleChange}
                    placeholder="e.g. 2020"
                    min="1900"
                    max={new Date().getFullYear()}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                FPO Profile & Location
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                {/* State */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* District */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    District
                  </label>

                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter district"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Block */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Block
                  </label>

                  <input
                    type="text"
                    name="block"
                    value={formData.block}
                    onChange={handleChange}
                    placeholder="Enter block"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Village / City */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Village / City
                  </label>

                  <input
                    type="text"
                    name="cityVillage"
                    value={formData.cityVillage}
                    onChange={handleChange}
                    placeholder="Enter village or city"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    maxLength="6"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Member Farmers */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Number of Member Farmers
                  </label>

                  <input
                    type="number"
                    name="memberFarmers"
                    value={formData.memberFarmers}
                    onChange={handleChange}
                    placeholder="e.g. 250"
                    min="1"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Main Crops */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Main Crops
                  </label>

                  <input
                    type="text"
                    name="mainCrops"
                    value={formData.mainCrops}
                    onChange={handleChange}
                    placeholder="e.g. Wheat, Rice, Onion, Tomato"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Total Area */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Total Area Covered (Acres)
                  </label>

                  <input
                    type="number"
                    name="totalArea"
                    value={formData.totalArea}
                    onChange={handleChange}
                    placeholder="e.g. 1200"
                    min="0"
                    step="0.01"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Procurement Areas */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Major Procurement Areas
                  </label>

                  <input
                    type="text"
                    name="procurementAreas"
                    value={formData.procurementAreas}
                    onChange={handleChange}
                    placeholder="e.g. 5 nearby blocks"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Office Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete FPO office address"
                    rows="3"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    required
                  ></textarea>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">

                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-2/3 rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Create FPO Account
                </button>

              </div>
            </div>
          )}

        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-600 hover:text-green-700"
          >
            Login
          </Link>
        </p>

      </div>

      {/* Verification Note */}
      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-500">
        Your FPO profile will remain{" "}
        <span className="font-semibold text-yellow-600">
          Pending Verification
        </span>{" "}
        until the submitted details are reviewed and approved.
      </p>

    </div>
  );
}

export default FPORegister;
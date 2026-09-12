import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationSelector from "../../components/LocationSelector";
import { logoImg } from "../../assets/assets.js";
import { ArrowRight, ArrowLeft, ShieldCheck, UserCheck, MapPin } from "lucide-react";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f0e6] via-[#f7f5ed] to-[#ede7d9] flex flex-col justify-between selection:bg-green-100 selection:text-green-900">
      
      {/* Header Optimized for Mobile Single Row */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-8 py-3.5 sm:py-5">
        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-[#f7941d] shadow-lg shadow-orange-950/25 transition-transform duration-300 group-hover:scale-105">
            <img src={logoImg} alt="MandiMitra Logo" className="h-full w-full object-cover" />
          </div>

          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-bold tracking-tight text-[#113329]">
              <span>Mandi</span>
              <span className="text-[#f7941d]">Mitra</span>
            </div>
            {/* Tagline hidden on mobile screens */}
            <div className="hidden sm:block text-[9px] font-bold tracking-[1.5px] text-[#58706b] uppercase">
              Sahi Mandi, Sahi Daam
            </div>
          </div>
        </Link>

        {/* Condensed login CTA for mobile view */}
        <p className="text-xs sm:text-sm text-gray-600 font-medium">
          <span className="hidden sm:inline">Already have an account? </span>
          <span className="sm:hidden">Have account? </span>
          <Link
            to="/login"
            className="font-semibold text-green-700 underline hover:text-green-800"
          >
            Login
          </Link>
        </p>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-8 py-6">
        <div className="w-full max-w-3xl rounded-[32px] bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-xl border border-black/5">
          
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl shadow-inner">
              👨‍🌾
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3.5 py-1 border border-green-500/20 mb-3 ml-3">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-green-700 uppercase">
                Farmer Registration
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Create your farmer account
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              {step === 1
                ? "Provide your account credentials to get started on MandiMitra."
                : "Enter your farm location and agricultural details."}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-10">
            <div className="flex items-center">
              {/* Step 1 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step >= 1
                    ? "bg-green-600 text-white shadow-md shadow-green-600/30"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              {/* Progress Line */}
              <div className="h-1 flex-1 bg-gray-100 mx-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    step === 2 ? "w-full bg-green-600" : "w-0"
                  }`}
                />
              </div>

              {/* Step 2 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step === 2
                    ? "bg-green-600 text-white shadow-md shadow-green-600/30"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
            </div>

            <div className="mt-2.5 flex justify-between text-xs font-medium">
              <span className={step === 1 ? "text-green-700 font-semibold" : "text-gray-400"}>
                Account Details
              </span>
              <span className={step === 2 ? "text-green-700 font-semibold" : "text-gray-400"}>
                Farm & Location
              </span>
            </div>
          </div>

          {/* STEP 1: Account Details */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-700 py-4 text-sm font-semibold text-white shadow-lg shadow-green-950/20 transition-all hover:bg-green-800 hover:scale-[1.01] active:scale-95"
              >
                <span>Continue to Farm Details</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {/* STEP 2: Farm & Location */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Location Banner */}
              <div className="rounded-2xl bg-green-50/80 border border-green-200/60 p-4 sm:p-5 flex items-start gap-3">
                <MapPin className="text-green-700 shrink-0 mt-0.5" size={20} />
                <div>
                  <h2 className="font-semibold text-green-900 text-sm sm:text-base">
                    Farm Location Setup
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-green-700">
                    Accurate location helps us provide exact mandi pricing, nearby verified buyers, and localized logistics.
                  </p>
                </div>
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

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Block / Tehsil
                  </label>
                  <input
                    type="text"
                    name="block"
                    value={formData.block}
                    onChange={handleChange}
                    placeholder="Enter block or tehsil"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Village
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    placeholder="Enter village name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Farm Details Banner */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200/60 p-4 sm:p-5">
                <h2 className="font-semibold text-gray-900 text-sm sm:text-base">🌾 Farm Specifications</h2>
                <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                  Helps us match you with suitable wholesale buyers and bulk procurement opportunities.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Main Crops Cultivated
                </label>
                <input
                  type="text"
                  name="crops"
                  value={formData.crops}
                  onChange={handleChange}
                  placeholder="e.g. Onion, Wheat, Paddy, Potato"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  Separate multiple crops with commas.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Farm Size (in Acres)
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
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Irrigation Type
                  </label>
                  <select
                    name="irrigationType"
                    value={formData.irrigationType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100 cursor-pointer"
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

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Farming Type
                </label>
                <select
                  name="farmingType"
                  value={formData.farmingType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100 cursor-pointer"
                >
                  <option value="">Select farming type</option>
                  <option value="individual">Individual Farmer</option>
                  <option value="family">Family Farming</option>
                  <option value="lease">Lease Farming</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white py-3.5 px-6 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-700 py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-green-950/25 transition-all hover:bg-green-800 hover:scale-[1.01] active:scale-95"
                >
                  <span>Create Account & Verify</span>
                  <ShieldCheck size={17} className="text-emerald-300" />
                </button>
              </div>
            </form>
          )}

          {/* Switch Role Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <Link
              to="/register"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-green-700 underline"
            >
              ← Change registration role (Farmer, Buyer, or FPO)
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Notice */}
      <footer className="py-6 text-center text-xs text-gray-500">
        <p>© 2026 MandiMitra. Empowering farmers with better market access.</p>
      </footer>
    </div>
  );
}

export default FarmerRegister;
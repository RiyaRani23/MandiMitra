import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationSelector from "../../components/LocationSelector";
import { logoImg } from "../../assets/assets.js";
import { ArrowRight, ArrowLeft, ShieldCheck, MapPin } from "lucide-react";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Registration Data:", formData);

    navigate("/otp-verification", {
      state: {
        role: "buyer",
        mobile: formData.mobile,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f0e6] via-[#f7f5ed] to-[#ede7d9] flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-8 py-5">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#f7941d] shadow-lg shadow-orange-950/20 transition-transform duration-300 group-hover:scale-105">
            <img src={logoImg} alt="MandiMitra Logo" className="h-full w-full object-cover" />
          </div>

          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight text-[#113329]">
              <span>Mandi</span>
              <span className="text-[#f7941d]">Mitra</span>
            </div>
            <div className="text-[9px] font-bold tracking-[1.5px] text-[#58706b] uppercase">
              Sahi Mandi, Sahi Daam
            </div>
          </div>
        </Link>

        <p className="text-xs sm:text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-700 underline hover:text-blue-800"
          >
            Login
          </Link>
        </p>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-8 py-8">
        <div className="w-full max-w-3xl rounded-[32px] bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-xl border border-black/5">
          
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl shadow-inner">
              🏪
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1 border border-blue-500/20 mb-3 ml-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-blue-700 uppercase">
                Buyer Registration
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Create your buyer account
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              {step === 1
                ? "Tell us about yourself and your business entity."
                : "Enter your location and bulk procurement requirements."}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-10">
            <div className="flex items-center">
              {/* Step 1 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step >= 1
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              {/* Progress Line */}
              <div className="h-1 flex-1 bg-gray-100 mx-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    step === 2 ? "w-full bg-blue-600" : "w-0"
                  }`}
                />
              </div>

              {/* Step 2 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step === 2
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
            </div>

            <div className="mt-2.5 flex justify-between text-xs font-medium">
              <span className={step === 1 ? "text-blue-700 font-semibold" : "text-gray-400"}>
                Account & Business
              </span>
              <span className={step === 2 ? "text-blue-700 font-semibold" : "text-gray-400"}>
                Procurement Needs
              </span>
            </div>
          </div>

          {/* STEP 1: Account & Business */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Enter contact person's name"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
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
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Business Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter business email"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business or company name"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Buyer Type
                </label>
                <select
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 cursor-pointer"
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
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
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
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-95"
              >
                <span>Continue to Procurement Needs</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {/* STEP 2: Procurement Details */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Location Banner */}
              <div className="rounded-2xl bg-blue-50/80 border border-blue-200/60 p-4 sm:p-5 flex items-start gap-3">
                <MapPin className="text-blue-700 shrink-0 mt-0.5" size={20} />
                <div>
                  <h2 className="font-semibold text-blue-900 text-sm sm:text-base">
                    Business Location Setup
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-blue-700">
                    Helps us match you with nearby farmers, FPOs, and localized trade logistics.
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
                    City / Block
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city or block"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Business Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    readOnly
                    placeholder="Auto-filled from location"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3.5 text-sm text-gray-500 outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Complete Business Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete office or warehouse address"
                  rows="3"
                  required
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Procurement Banner */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200/60 p-4 sm:p-5">
                <h2 className="font-semibold text-gray-900 text-sm sm:text-base">🌾 Procurement Requirements</h2>
                <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                  Specifies what agricultural harvest you are looking to source in bulk.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Crops Interested In
                </label>
                <input
                  type="text"
                  name="crops"
                  value={formData.crops}
                  onChange={handleChange}
                  placeholder="e.g. Onion, Wheat, Potato, Paddy"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  Separate multiple crops with commas.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Required Quality / Grade
                  </label>
                  <select
                    name="qualityGrade"
                    value={formData.qualityGrade}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 cursor-pointer"
                  >
                    <option value="">Select required quality</option>
                    <option value="premium">Premium / Grade A</option>
                    <option value="standard">Standard / Grade B</option>
                    <option value="mixed">Mixed Grades</option>
                    <option value="any">Any Quality</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Approximate Buying Capacity
                  </label>
                  <select
                    name="buyingCapacity"
                    value={formData.buyingCapacity}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 cursor-pointer"
                  >
                    <option value="">Select monthly capacity</option>
                    <option value="under-50">Under 50 Quintals</option>
                    <option value="50-200">50–200 Quintals</option>
                    <option value="200-500">200–500 Quintals</option>
                    <option value="500-1000">500–1,000 Quintals</option>
                    <option value="1000-plus">1,000+ Quintals</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                  Preferred Procurement Area
                </label>
                <input
                  type="text"
                  name="procurementArea"
                  value={formData.procurementArea}
                  onChange={handleChange}
                  placeholder="e.g. Nashik district or within 100 km radius"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
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
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-95"
                >
                  <span>Create Account & Verify</span>
                  <ShieldCheck size={17} className="text-blue-200" />
                </button>
              </div>
            </form>
          )}

          {/* Switch Role Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <Link
              to="/register"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-700 underline"
            >
              ← Change registration role (Farmer, Buyer, or FPO)
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Notice */}
      <footer className="py-6 text-center text-xs text-gray-500">
        <p>© 2026 MandiMitra. Connecting buyers with quality agricultural produce.</p>
      </footer>
    </div>
  );
}

export default BuyerRegister;
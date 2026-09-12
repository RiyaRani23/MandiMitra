import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationSelector from "../../components/LocationSelector";
import { logoImg } from "../../assets/assets.js";
import { ArrowRight, ArrowLeft, ShieldCheck, Building2, MapPin } from "lucide-react";

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
    console.log("FPO Registration Data:", formData);

    navigate("/otp-verification", {
      state: {
        role: "fpo",
        mobile: formData.mobile,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f0e6] via-[#f7f5ed] to-[#ede7d9] flex flex-col justify-between selection:bg-orange-100 selection:text-orange-900">
      
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
            className="font-semibold text-orange-600 underline hover:text-orange-700"
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
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-inner">
              <Building2 size={24} />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1 border border-orange-500/20 mb-3 ml-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-orange-700 uppercase">
                FPO Registration
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Register as an FPO
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              {step === 1
                ? "Create your organization profile and administrative account."
                : "Enter your headquarters location and member farmer network details."}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-10">
            <div className="flex items-center">
              {/* Step 1 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step >= 1
                    ? "bg-[#f7941d] text-white shadow-md shadow-orange-950/20"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              {/* Progress Line */}
              <div className="h-1 flex-1 bg-gray-100 mx-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    step === 2 ? "w-full bg-[#f7941d]" : "w-0"
                  }`}
                />
              </div>

              {/* Step 2 Circle */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all ${
                  step === 2
                    ? "bg-[#f7941d] text-white shadow-md shadow-orange-950/20"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
            </div>

            <div className="mt-2.5 flex justify-between text-xs font-medium">
              <span className={step === 1 ? "text-orange-600 font-semibold" : "text-gray-400"}>
                Account & Organization
              </span>
              <span className={step === 2 ? "text-orange-600 font-semibold" : "text-gray-400"}>
                FPO Profile & Location
              </span>
            </div>
          </div>

          <form onSubmit={step === 1 ? handleNext : handleSubmit}>
            
            {/* STEP 1: Account & Organization Details */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    FPO / Organization Name
                  </label>
                  <input
                    type="text"
                    name="fpoName"
                    value={formData.fpoName}
                    onChange={handleChange}
                    placeholder="Enter FPO / company name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                      Authorized / Contact Person
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Enter contact person's name"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

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
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                      Registration Type
                    </label>
                    <select
                      name="registrationType"
                      value={formData.registrationType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100 cursor-pointer"
                    >
                      <option value="">Select registration type</option>
                      <option value="FPO">Farmer Producer Organization</option>
                      <option value="FPC">Farmer Producer Company</option>
                      <option value="Cooperative">Cooperative</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
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
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
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
                      placeholder="Create password"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
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
                      placeholder="Confirm password"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f7941d] py-4 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition-all hover:bg-[#e8850b] hover:scale-[1.01] active:scale-95"
                >
                  <span>Continue to FPO Profile</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

            {/* STEP 2: FPO Profile & Location */}
            {step === 2 && (
              <div className="space-y-6">
                
                {/* Location Banner */}
                <div className="rounded-2xl bg-orange-50/80 border border-orange-200/60 p-4 sm:p-5 flex items-start gap-3">
                  <MapPin className="text-[#f7941d] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h2 className="font-semibold text-orange-900 text-sm sm:text-base">
                      Headquarters Location Setup
                    </h2>
                    <p className="mt-0.5 text-xs sm:text-sm text-orange-700">
                      Your registered location enables bulk buyers and regional markets to find your FPO.
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
                      Block
                    </label>
                    <input
                      type="text"
                      name="block"
                      value={formData.block}
                      onChange={handleChange}
                      placeholder="Enter block"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                      Village / City
                    </label>
                    <input
                      type="text"
                      name="cityVillage"
                      value={formData.cityVillage}
                      onChange={handleChange}
                      placeholder="Enter village or city"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Complete Office Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete FPO office address"
                    rows="3"
                    required
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* Profile Banner */}
                <div className="rounded-2xl bg-gray-50 border border-gray-200/60 p-4 sm:p-5">
                  <h2 className="font-semibold text-gray-900 text-sm sm:text-base">🌾 Organization Capacity</h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                    Provide details about your network size and primary aggregated harvest.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                      Number of Member Farmers
                    </label>
                    <input
                      type="number"
                      name="memberFarmers"
                      value={formData.memberFarmers}
                      onChange={handleChange}
                      placeholder="e.g. 250"
                      min="1"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
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
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Main Crops Aggregated
                  </label>
                  <input
                    type="text"
                    name="mainCrops"
                    value={formData.mainCrops}
                    onChange={handleChange}
                    placeholder="e.g. Wheat, Rice, Onion, Tomato"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                  <p className="mt-1.5 text-xs text-gray-400">
                    Separate multiple crops with commas.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                    Major Procurement Areas
                  </label>
                  <input
                    type="text"
                    name="procurementAreas"
                    value={formData.procurementAreas}
                    onChange={handleChange}
                    placeholder="e.g. 5 nearby blocks or district wide"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
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
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#f7941d] py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-950/25 transition-all hover:bg-[#e8850b] hover:scale-[1.01] active:scale-95"
                  >
                    <span>Create FPO Account & Verify</span>
                    <ShieldCheck size={17} className="text-orange-200" />
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Switch Role Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <Link
              to="/register"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-orange-600 underline"
            >
              ← Change registration role (Farmer, Buyer, or FPO)
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Notice */}
      <footer className="py-6 text-center text-xs text-gray-500 px-4">
        <p>
          Your FPO profile will remain{" "}
          <span className="font-semibold text-yellow-600">Pending Verification</span> until administrative review.
        </p>
        <p className="mt-1">© 2026 MandiMitra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FPORegister;
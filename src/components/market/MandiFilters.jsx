const MandiFilters = ({
  marketPrices,
  selectedState,
  selectedDistrict,
  selectedMarket,
  onStateChange,
  onDistrictChange,
  onMarketChange,
}) => {
  // ================= BACKEND INTEGRATION =================
  // CURRENT:
  // State list is temporarily maintained on the frontend.
  //
  // FUTURE SPRING BOOT:
  // GET /api/mandi/states
  // GET /api/mandi/districts?state=Maharashtra
  // GET /api/mandi/markets?state=Maharashtra&district=Nashik
  //
  // This will allow complete location lists from our backend.
  // ========================================================

  const states = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Goa",
  ].sort();

  // Get unique districts from API data
  const districts = [
    ...new Set(
      marketPrices
        .map((item) => item.district)
        .filter(Boolean)
    ),
  ].sort();

  // Get markets based on selected district
  const markets = [
    ...new Set(
      marketPrices
        .filter(
          (item) =>
            !selectedDistrict ||
            item.district === selectedDistrict
        )
        .map((item) => item.market)
        .filter(Boolean)
    ),
  ].sort();

  return (
    <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-5 sm:p-6 shadow-sm space-y-4">
      <div>
        <h3 className="text-sm font-bold text-gray-900 tracking-tight">
          Check Mandi Prices
        </h3>

        <p className="mt-0.5 text-xs text-gray-500 font-medium">
          Select your location to see local mandi prices
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* State */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
            State
          </label>

          <select
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 cursor-pointer shadow-2xs"
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
            District
          </label>

          <select
            value={selectedDistrict}
            onChange={(e) => onDistrictChange(e.target.value)}
            className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 cursor-pointer shadow-2xs"
          >
            <option value="">All Districts</option>

            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Mandi */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
            Mandi
          </label>

          <select
            value={selectedMarket}
            onChange={(e) => onMarketChange(e.target.value)}
            className="w-full rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 cursor-pointer shadow-2xs"
          >
            <option value="">All Mandis</option>

            {markets.map((market) => (
              <option key={market} value={market}>
                {market}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MandiFilters;
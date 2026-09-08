const MandiFilters = ({
  marketPrices,
  selectedDistrict,
  selectedMarket,
  onDistrictChange,
  onMarketChange,
}) => {
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
    <div className="mb-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-900">
          Check Mandi Prices
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Select your location to see local mandi prices
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {/* District */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-gray-600">
            District
          </label>

          <select
            value={selectedDistrict}
            onChange={(e) => onDistrictChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:bg-white"
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
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-gray-600">
            Mandi
          </label>

          <select
            value={selectedMarket}
            onChange={(e) => onMarketChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:bg-white"
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
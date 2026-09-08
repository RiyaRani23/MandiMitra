import { useEffect, useState } from "react";
import { fetchMandiPrices } from "../../services/mandiApi";
import MarketPriceCard from "./MarketPriceCard";
import MandiFilters from "./MandiFilters";

const MarketPriceSection = () => {
  const [marketPrices, setMarketPrices] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [priceError, setPriceError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllPrices, setShowAllPrices] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");

  useEffect(() => {
    const loadPrices = async () => {
      try {
        setLoadingPrices(true);
        setPriceError("");

        const data = await fetchMandiPrices({
          state: "Maharashtra",
          limit: 100,
        });

        setMarketPrices(data.records || []);
      } catch (error) {
        console.error(error);
        setPriceError("Unable to fetch market prices.");
      } finally {
        setLoadingPrices(false);
      }
    };

    loadPrices();
  }, []);

  // FUTURE BACKEND:
  // This filtering can be moved to Spring Boot:
  //
  // GET /api/mandi/prices
  //     ?state=Maharashtra
  //     &district=Nashik
  //     &market=Lasalgaon
  //
  // This will be useful when the database contains
  // larger amounts of mandi-price data.
  // ====================================================

  const filteredPrices = marketPrices.filter((item) => {
    const matchesSearch = item.commodity
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDistrict =
      !selectedDistrict || item.district === selectedDistrict;

    const matchesMarket = !selectedMarket || item.market === selectedMarket;

    return matchesSearch && matchesDistrict && matchesMarket;
  });

  const visiblePrices = showAllPrices
    ? filteredPrices
    : filteredPrices.slice(0, 12);

  return (
    <div>
      <div className="mb-8">
        {/* Section Header */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-100 text-lg">
                📊
              </span>

              <p className="text-sm font-semibold text-green-700">
                LIVE MARKET DATA
              </p>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Today's Mandi Prices
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Compare today's mandi prices and find the right market for your
              produce.
            </p>
          </div>

          {/* Location + Refresh */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
              <span>📍</span>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  State
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  Maharashtra
                </p>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg shadow-sm transition hover:bg-gray-50"
              title="Refresh prices"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Search + Status Bar */}
        {!loadingPrices && !priceError && (
          <>
            {/* ================= MANDI LOCATION FILTER ================= */}
            <MandiFilters
              marketPrices={marketPrices}
              selectedDistrict={selectedDistrict}
              selectedMarket={selectedMarket}
              onDistrictChange={(district) => {
                setSelectedDistrict(district);
                setSelectedMarket("");
              }}
              onMarketChange={setSelectedMarket}
            />

            {/* ================= SEARCH BAR ================= */}
            <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for a crop..."
                  className="w-full rounded-xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="flex items-center gap-2 px-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>

                <span className="text-xs font-medium text-gray-500">
                  Live government market data
                </span>
              </div>
            </div>
          </>
        )}
        {/* Loading State */}
        {loadingPrices && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 h-5 w-32 rounded bg-gray-200"></div>
                <div className="mb-5 h-3 w-44 rounded bg-gray-100"></div>
                <div className="mb-5 h-8 w-28 rounded bg-gray-200"></div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-10 rounded bg-gray-100"></div>
                  <div className="h-10 rounded bg-gray-100"></div>
                  <div className="h-10 rounded bg-gray-100"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loadingPrices && priceError && (
          <div className="rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
              ⚠️
            </div>

            <h4 className="font-semibold text-gray-800">
              Market prices unavailable
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              We couldn't fetch the latest mandi data. Please try again.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Market Data */}
        {!loadingPrices && !priceError && (
          <>
            {/* Best Price Banner */}
            {filteredPrices.length > 0 &&
              (() => {
                const bestMarket = filteredPrices.reduce(
                  (best, current) =>
                    Number(current.modal_price) > Number(best.modal_price)
                      ? current
                      : best,
                  filteredPrices[0],
                );

                return (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-white shadow-sm">
                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-xl text-white shadow-sm">
                          ⭐
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                            Best available modal price
                          </p>

                          <h4 className="mt-1 text-lg font-bold text-gray-900">
                            {bestMarket.commodity}
                          </h4>

                          <p className="text-sm text-gray-500">
                            {bestMarket.market}
                          </p>
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <p className="text-2xl font-extrabold text-green-700">
                          ₹
                          {Number(bestMarket.modal_price).toLocaleString(
                            "en-IN",
                          )}
                          <span className="ml-1 text-sm font-medium text-gray-500">
                            / quintal
                          </span>
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Highest modal price in current results
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

            {/* Price Cards */}
            {filteredPrices.length === 0 ? (
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* Search Result Header */}
                <div className="border-b border-gray-100 bg-gradient-to-r from-green-50 to-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                      🌱
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                        Crop Search
                      </p>

                      <h4 className="mt-1 text-xl font-bold text-gray-900">
                        {searchTerm}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        We couldn't find a current mandi price for this crop in
                        the available results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fallback Information */}
                <div className="p-6">
                  {/* Important Notice */}
                  <div className="flex gap-3 rounded-xl border border-yellow-100 bg-yellow-50 p-4">
                    <span className="text-xl">⚠️</span>

                    <div>
                      <p className="text-sm font-semibold text-yellow-800">
                        Current price unavailable
                      </p>

                      <p className="mt-1 text-xs leading-5 text-yellow-700">
                        This does not mean you cannot sell your {searchTerm}. It
                        only means that a current price was not found in the
                        mandi data currently available to MandiMitra.
                      </p>
                    </div>
                  </div>

                  {/* Next Actions */}
                  <div className="mt-6">
                    <h5 className="text-sm font-bold text-gray-900">
                      What would you like to do?
                    </h5>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {/* Nearby Markets */}
                      <button className="group rounded-xl border border-gray-200 p-4 text-left transition hover:border-green-200 hover:bg-green-50">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg">
                          📍
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                          Check other markets
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Look for {searchTerm} prices in other mandi markets.
                        </p>

                        <span className="mt-3 inline-block text-xs font-semibold text-green-700">
                          Explore markets →
                        </span>
                      </button>

                      {/* Buyers */}
                      <button className="group rounded-xl border border-gray-200 p-4 text-left transition hover:border-green-200 hover:bg-green-50">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                          🛒
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                          Find buyers
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          See buyers or FPOs looking to purchase {searchTerm}.
                        </p>

                        <span className="mt-3 inline-block text-xs font-semibold text-green-700">
                          Find buyers →
                        </span>
                      </button>

                      {/* Price History */}
                      <button className="group rounded-xl border border-gray-200 p-4 text-left transition hover:border-green-200 hover:bg-green-50">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-lg">
                          📈
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                          Check price history
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Review previously available prices before deciding
                          when to sell.
                        </p>

                        <span className="mt-3 inline-block text-xs font-semibold text-green-700">
                          View history →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Search Again */}
                  <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-400">
                      Tip: Try another crop name or check other markets.
                    </p>

                    <button
                      onClick={() => setSearchTerm("")}
                      className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      Show today's prices
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visiblePrices.map((item, index) => {
                    const modal = Number(item.modal_price);

                    const isBest =
                      modal ===
                      Math.max(
                        ...filteredPrices.map((market) =>
                          Number(market.modal_price),
                        ),
                      );

                    return (
                      <MarketPriceCard
                        key={`${item.commodity}-${item.market}-${index}`}
                        item={item}
                        isBest={isBest}
                      />
                    );
                  })}
                </div>
                {filteredPrices.length > 12 && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => setShowAllPrices((prev) => !prev)}
                      className="rounded-xl border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50"
                    >
                      {showAllPrices ? "Show Less ↑" : "Show More ↓"}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Data Source */}
            <div className="mt-4 flex items-center justify-between rounded-xl px-1 text-[11px] text-gray-400">
              <span>Source: Government of India • data.gov.in</span>

              <span>{marketPrices.length} markets shown</span>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loadingPrices && !priceError && marketPrices.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-2xl">
              🌾
            </div>

            <h4 className="font-semibold text-gray-800">
              No market prices found
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Try selecting another location or crop.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPriceSection;

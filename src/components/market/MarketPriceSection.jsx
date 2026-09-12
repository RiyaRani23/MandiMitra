import { useEffect, useState } from "react";
import { fetchMandiPrices } from "../../services/mandiApi";
import MarketPriceCard from "./MarketPriceCard";
import MandiFilters from "./MandiFilters";
import MarketExplorer from "./MarketExplorer";
import { 
  TrendingUp, 
  Search, 
  RefreshCw, 
  MapPin, 
  AlertCircle, 
  Sparkles, 
  Store, 
  ShoppingBag, 
  LineChart, 
  ChevronRight 
} from "lucide-react";

const MarketPriceSection = () => {
  const [marketPrices, setMarketPrices] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [priceError, setPriceError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllPrices, setShowAllPrices] = useState(false);
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [showMarketExplorer, setShowMarketExplorer] = useState(false);

  const refreshPrices = async () => {
    try {
      setLoadingPrices(true);
      setPriceError("");

      const data = await fetchMandiPrices({
        state: selectedState,
        district: selectedDistrict,
        market: selectedMarket,
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

  useEffect(() => {
    const loadPrices = async () => {
      try {
        setLoadingPrices(true);
        setPriceError("");

        const data = await fetchMandiPrices({
          state: selectedState,
          district: selectedDistrict,
          market: selectedMarket,
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
  }, [selectedState, selectedDistrict, selectedMarket]);

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8faf7] via-[#f3f7f2] to-[#edf3eb] px-4 py-6 sm:px-8 sm:py-8 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-10 h-[350px] w-[350px] rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 tracking-wide border border-emerald-200/50">
              <Sparkles size={13} className="text-emerald-600" />
              LIVE MARKET DATA
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-[#123c2c] md:text-3xl">
              Today's Mandi Prices
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Compare today's mandi prices and find the right market for your produce.
            </p>
          </div>

          {/* Location + Refresh */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-2xl border border-gray-100 bg-[#f8faf8] px-4 py-2.5 shadow-xs">
              <MapPin size={16} className="text-emerald-700" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  State
                </p>
                <p className="text-xs sm:text-sm font-bold text-gray-800">
                  {selectedState}
                </p>
              </div>
            </div>

            <button
              onClick={refreshPrices}
              className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-100 bg-[#f8faf8] text-gray-700 shadow-xs transition-all hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 active:scale-95"
              title="Refresh prices"
            >
              <RefreshCw size={17} className="transition-transform duration-500 group-hover:rotate-180" />
            </button>
          </div>
        </div>

        {/* Search + Status Bar */}
        {!loadingPrices && !priceError && (
          <div className="space-y-4">
            <MandiFilters
              marketPrices={marketPrices}
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              selectedMarket={selectedMarket}
              onStateChange={(state) => {
                setSelectedState(state);
                setSelectedDistrict("");
                setSelectedMarket("");
              }}
              onDistrictChange={(district) => {
                setSelectedDistrict(district);
                setSelectedMarket("");
              }}
              onMarketChange={setSelectedMarket}
            />

            <div className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </span>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for a crop..."
                  className="w-full rounded-2xl bg-[#f8faf8] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-700 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 border border-transparent focus:border-emerald-300"
                />
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/60 border border-emerald-100/50">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-800">
                  Live government market data
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loadingPrices && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm space-y-4"
              >
                <div className="h-5 w-32 rounded-lg bg-gray-200" />
                <div className="h-3 w-44 rounded-lg bg-gray-100" />
                <div className="h-8 w-28 rounded-lg bg-gray-200 pt-2" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-10 rounded-xl bg-gray-100" />
                  <div className="h-10 rounded-xl bg-gray-100" />
                  <div className="h-10 rounded-xl bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loadingPrices && priceError && (
          <div className="rounded-3xl border border-red-100 bg-white/90 backdrop-blur-xl p-10 text-center shadow-sm space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 border border-red-100">
              <AlertCircle size={26} />
            </div>

            <h4 className="font-bold text-gray-900 text-lg">
              Market prices unavailable
            </h4>

            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              We couldn't fetch the latest mandi data. Please try again.
            </p>

            <button
              onClick={refreshPrices}
              className="mt-2 rounded-2xl bg-emerald-700 px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-emerald-800 shadow-sm"
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
                  <div className="overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50/90 via-white to-emerald-50/40 shadow-sm">
                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-md">
                          ⭐
                        </div>

                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                            Best available modal price
                          </p>

                          <h4 className="mt-0.5 text-lg font-bold text-gray-900">
                            {bestMarket.commodity}
                          </h4>

                          <p className="text-xs text-gray-500 font-medium">
                            📍 {bestMarket.market}
                          </p>
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <p className="text-2xl font-extrabold tracking-tight text-emerald-800">
                          ₹
                          {Number(bestMarket.modal_price).toLocaleString(
                            "en-IN",
                          )}
                          <span className="ml-1 text-xs font-semibold text-gray-400">
                            / quintal
                          </span>
                        </p>

                        <p className="mt-0.5 text-xs text-gray-500 font-medium">
                          Highest modal price in current results
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

            {/* Price Cards */}
            {filteredPrices.length === 0 ? (
              <div className="overflow-hidden rounded-3xl border border-black/5 bg-white/90 backdrop-blur-xl shadow-sm">
                
                {/* Search Result Header */}
                <div className="border-b border-gray-100 bg-gradient-to-r from-emerald-50/60 to-white p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100/80 text-2xl border border-emerald-200/50">
                      🌱
                    </div>

                    <div className="space-y-1">
                      <span className="inline-block rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                        Crop Search
                      </span>

                      <h4 className="text-xl font-bold tracking-tight text-gray-900 pt-1">
                        {searchTerm}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        We couldn't find a current mandi price for this crop in the available results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fallback Information */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Important Notice */}
                  <div className="flex gap-3 rounded-2xl border border-amber-200/60 bg-amber-50/70 p-4 sm:p-5">
                    <span className="text-xl">⚠️</span>

                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-amber-900">
                        Current price unavailable
                      </p>

                      <p className="text-xs leading-relaxed text-amber-800/80 font-medium">
                        This does not mean you cannot sell your {searchTerm}. It only means that a current price was not found in the mandi data currently available to MandiMitra.
                      </p>
                    </div>
                  </div>

                  {/* Next Actions */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-bold text-gray-900 tracking-tight">
                      What would you like to do?
                    </h5>

                    <div className="grid gap-4 md:grid-cols-3">
                      
                      {/* Nearby Markets */}
                      <button
                        onClick={() => setShowMarketExplorer(true)}
                        className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#f8faf8] p-5 text-left transition-all hover:border-emerald-300 hover:bg-white hover:shadow-md"
                      >
                        <div className="space-y-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-2xs">
                            <Store size={20} />
                          </div>

                          <p className="text-sm font-bold text-gray-900">
                            Check other markets
                          </p>

                          <p className="text-xs leading-relaxed text-gray-500 font-medium">
                            Look for {searchTerm} prices in other mandi markets.
                          </p>
                        </div>

                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                          <span>Explore markets</span>
                          <ChevronRight size={14} />
                        </span>
                      </button>

                      {/* Buyers */}
                      <button className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#f8faf8] p-5 text-left transition-all hover:border-blue-300 hover:bg-white hover:shadow-md">
                        <div className="space-y-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shadow-2xs">
                            <ShoppingBag size={20} />
                          </div>

                          <p className="text-sm font-bold text-gray-900">
                            Find buyers
                          </p>

                          <p className="text-xs leading-relaxed text-gray-500 font-medium">
                            See buyers or FPOs looking to purchase {searchTerm}.
                          </p>
                        </div>

                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                          <span>Find buyers</span>
                          <ChevronRight size={14} />
                        </span>
                      </button>

                      {/* Price History */}
                      <button className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#f8faf8] p-5 text-left transition-all hover:border-purple-300 hover:bg-white hover:shadow-md">
                        <div className="space-y-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 shadow-2xs">
                            <LineChart size={20} />
                          </div>

                          <p className="text-sm font-bold text-gray-900">
                            Check price history
                          </p>

                          <p className="text-xs leading-relaxed text-gray-500 font-medium">
                            Review previously available prices before deciding when to sell.
                          </p>
                        </div>

                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                          <span>View history</span>
                          <ChevronRight size={14} />
                        </span>
                      </button>

                    </div>
                  </div>

                  {/* Search Again */}
                  <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-400 font-medium">
                      Tip: Try another crop name or check other markets.
                    </p>

                    <button
                      onClick={() => setSearchTerm("")}
                      className="rounded-2xl bg-emerald-700 px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-emerald-800 shadow-sm"
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
                      className="rounded-2xl border border-emerald-200 bg-white/90 px-6 py-3 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs transition hover:bg-emerald-50 hover:scale-[1.02]"
                    >
                      {showAllPrices ? "Show Less ↑" : "Show More ↓"}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Data Source Footer */}
            <div className="flex items-center justify-between rounded-2xl bg-white/40 px-3 py-2 text-[11px] text-gray-400 font-medium">
              <span>Source: Government of India • data.gov.in</span>
              <span>{marketPrices.length} markets shown</span>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loadingPrices && !priceError && marketPrices.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-white/90 backdrop-blur-xl p-10 text-center shadow-sm space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl border border-emerald-100">
              🌾
            </div>

            <h4 className="font-bold text-gray-900 text-lg">
              No market prices found
            </h4>

            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
              Try selecting another location or crop.
            </p>
          </div>
        )}

      </div>

      {showMarketExplorer && (
        <MarketExplorer
          searchTerm={searchTerm}
          marketPrices={marketPrices}
          selectedDistrict={selectedDistrict}
          onClose={() => setShowMarketExplorer(false)}
        />
      )}
    </div>
  );
};

export default MarketPriceSection;
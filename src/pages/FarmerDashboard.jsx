import { useRef, useState, useEffect } from "react";
import { fetchMandiPrices } from "../services/mandiApi";
import SellProduceForm from "../components/farmer/SellProduceForm";
import BestSellingOption from "../components/farmer/BestSellingOption";
import { Link } from "react-router-dom";
import { TrendingUp, Package, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const FarmerDashboard = () => {
  const [sellingStep, setSellingStep] = useState(1);
  const [produceData, setProduceData] = useState(null);
  const sellSectionRef = useRef(null);

  const [marketPrices, setMarketPrices] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(true);

  useEffect(() => {
    const loadMarketPrices = async () => {
      try {
        const data = await fetchMandiPrices({
          state: "Maharashtra",
          district: "",
          market: "",
          limit: 100,
        });

        setMarketPrices(data.records || []);
      } catch (error) {
        console.error("Failed to load farmer market prices:", error);
      } finally {
        setLoadingPrices(false);
      }
    };

    loadMarketPrices();
  }, []);

  const handleSellProduce = () => {
    sellSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleProduceSubmit = (data) => {
    setProduceData(data);
    setSellingStep(2);
    console.log("Submitted Produce:", data);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8faf7] via-[#f3f7f2] to-[#edf3eb] px-4 py-6 sm:px-8 sm:py-8 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-10 h-[350px] w-[350px] rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-8">

        {/* Dashboard Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 p-6 sm:p-8 text-white shadow-lg shadow-emerald-950/10">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-100 border border-emerald-600/40">
                <Sparkles size={13} className="text-amber-400" />
                Farmer Home
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Welcome back, Ravi! 👋
              </h2>

              <p className="max-w-xl text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                See a clear price, clear costs, and the amount you may receive.
              </p>
            </div>

            {/* Main Sell Button */}
            <button
              type="button"
              onClick={handleSellProduce}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 shadow-md transition-all duration-300 hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>+ Sell New Produce</span>
            </button>
          </div>
        </div>

        {/* Your Produce Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                Your Produce
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#113329]">Current Produce</h3>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-1 border-b pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4 border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Produce</p>
                <p className="text-base font-semibold text-gray-800 flex items-center gap-2">
                  <Package size={16} className="text-emerald-600" />
                  500 kg Onion · Grade A
                </p>
              </div>

              <div className="space-y-1 border-b pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4 border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Market Price</p>
                <p className="text-base font-semibold text-gray-800">₹2,300/q</p>
                <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  📍 Nashik · Today
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Buyer Offer</p>
                <p className="text-base font-semibold text-emerald-700">₹2,450/q</p>
                <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  🛡️ Mumbai Buyer
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 p-5">
              <div>
                <p className="text-xs font-medium text-emerald-800/70 uppercase tracking-wider">You May Receive</p>
                <p className="mt-0.5 text-2xl font-bold tracking-tight text-emerald-800">₹2,270/q</p>
                <p className="mt-0.5 text-xs text-emerald-900/60 font-medium">
                  After estimated selling costs
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-3 py-1.5 rounded-xl border border-emerald-200/50">
                <ShieldCheck size={15} className="text-emerald-600" />
                Transparent Pricing
              </div>
            </div>
          </div>
        </section>

        {/* Live Mandi Prices Section */}
        <section className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-700" />
                <h2 className="text-lg font-bold tracking-tight text-[#123c2c]">
                  Live Mandi Prices
                </h2>
              </div>
              <p className="mt-0.5 text-xs text-gray-500 font-medium">
                Latest government mandi prices
              </p>
            </div>

            <Link
              to="/farmer/market-prices"
              className="group inline-flex items-center gap-1 text-xs font-bold text-[#197044] hover:text-[#123c2c] transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {loadingPrices
              ? [1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3"
                  >
                    <div className="h-4 w-24 rounded bg-gray-200" />
                    <div className="h-3 w-32 rounded bg-gray-200" />
                    <div className="pt-2 h-6 w-20 rounded bg-gray-200" />
                  </div>
                ))
              : marketPrices.slice(0, 4).map((item, index) => (
                  <div
                    key={`${item.commodity}-${item.market}-${index}`}
                    className="group rounded-2xl border border-gray-100 bg-[#f8faf8] p-5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-sm font-bold text-gray-800 tracking-tight">
                      {item.commodity}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-500 font-medium">
                      📍 {item.market} Mandi
                    </p>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-xl font-bold tracking-tight text-[#123c2c]">
                        ₹{Number(item.modal_price).toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-medium text-gray-400">/q</span>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        {/* Selling Journey Section */}
        <section className="space-y-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Selling Journey
            </p>
            <h3 className="text-xl font-bold tracking-tight text-gray-800">
              From Produce to Payment
            </h3>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex min-w-max gap-3">
              {[
                "Your Produce",
                "Best Selling Option",
                "Compare Options",
                "Choose How to Sell",
                "Price Offer",
                "Deal Confirmed",
                "Transportation",
                "Delivery Confirmation",
                "Payment",
                "Sale Complete",
              ].map((step, index) => (
                <div
                  key={step}
                  className={`w-40 rounded-2xl border px-4 py-3.5 transition-all duration-200 shadow-xs ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50/90 shadow-sm"
                      : "border-gray-200/80 bg-white/80 backdrop-blur-md"
                  }`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <p
                    className={`mt-1.5 text-xs font-bold leading-tight ${
                      index === 0 ? "text-emerald-800" : "text-gray-700"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sell Produce Form Section */}
        <section ref={sellSectionRef} className="scroll-mt-24 space-y-4">
          <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
            <div className="mb-6 space-y-1 border-b border-gray-100 pb-5">
              <span className="inline-block rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                Step 01
              </span>

              <h3 className="text-xl font-bold tracking-tight text-gray-900 pt-1">Your Produce</h3>

              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Tell us about your produce to find the best selling option.
              </p>
            </div>

            {sellingStep === 1 && (
              <SellProduceForm onSubmit={handleProduceSubmit} />
            )}

            {sellingStep === 2 && produceData && (
              <BestSellingOption produceData={produceData} />
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default FarmerDashboard;
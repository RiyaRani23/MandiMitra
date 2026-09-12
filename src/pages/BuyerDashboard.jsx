import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMandiPrices } from "../services/mandiApi";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  ArrowRight, 
  Sparkles, 
  PackageCheck, 
  CreditCard,
  PlusCircle,
  Search,
  ChevronRight
} from "lucide-react";

function BuyerDashboard() {
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
        console.error("Failed to load buyer market prices:", error);
      } finally {
        setLoadingPrices(false);
      }
    };

    loadMarketPrices();
  }, []);

  const stats = [
    {
      title: "Active Requirements",
      value: "12",
      note: "+3 this week",
      icon: <ShoppingBag size={20} className="text-emerald-700" />,
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Offers Received",
      value: "28",
      note: "+8 this week",
      icon: <Users size={20} className="text-blue-700" />,
      accent: "bg-blue-50 text-blue-700",
    },
    {
      title: "Active Deals",
      value: "6",
      note: "2 awaiting delivery",
      icon: <PackageCheck size={20} className="text-amber-700" />,
      accent: "bg-amber-50 text-amber-700",
    },
    {
      title: "Pending Payments",
      value: "₹42,500",
      note: "3 payments",
      icon: <CreditCard size={20} className="text-purple-700" />,
      accent: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f4f7f4] px-4 py-6 sm:px-8 sm:py-8">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Top Minimal Modern Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between rounded-3xl bg-white p-6 sm:p-8 border border-black/5 shadow-xs">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 tracking-wide border border-emerald-200/50">
              <Sparkles size={13} className="text-emerald-600" />
              Buyer Portal
            </div>
            
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Welcome back 👋</p>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#123c2c]">
              Good Morning, Buyer
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-xl">
              Manage your purchases, compare prices and connect with reliable farmers.
            </p>
          </div>

          {/* Action Hub / Quick Shortcuts */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/buyer/requirements"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#123c2c] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0d3024] hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlusCircle size={16} />
              Post Requirement
            </Link>

            <Link
              to="/buyer/find-farmers"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 py-3 text-xs sm:text-sm font-bold text-[#123c2c] shadow-xs transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02]"
            >
              <Search size={16} className="text-emerald-700" />
              Find Farmers
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.title}</p>
                <div className={`p-2.5 rounded-2xl ${stat.accent}`}>
                  {stat.icon}
                </div>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#123c2c]">
                {stat.value}
              </h2>

              <p className="mt-1.5 text-xs font-bold text-emerald-600 flex items-center gap-1">
                {stat.note}
              </p>
            </div>
          ))}
        </section>

        {/* Current Market Prices Section */}
        <section className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-700" />
                <h2 className="text-lg font-bold tracking-tight text-[#123c2c]">
                  Current Market Prices
                </h2>
              </div>
              <p className="mt-0.5 text-xs text-gray-400 font-medium">
                Latest mandi prices for major commodities
              </p>
            </div>

            <Link
              to="/buyer/market-prices"
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
                    className="group rounded-2xl border border-gray-100 bg-[#f9faf9] p-5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-sm font-bold text-gray-800 tracking-tight">
                      {item.commodity}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-400 font-medium">
                      📍 {item.market} Mandi
                    </p>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-xl font-extrabold tracking-tight text-[#123c2c]">
                        ₹{Number(item.modal_price).toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">/q</span>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        {/* Bottom Sections: Requirements & Recommendations */}
        <section className="grid gap-6 lg:grid-cols-2">
          
          {/* My Buying Requirements */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold tracking-tight text-[#123c2c]">
                My Buying Requirements
              </h2>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                2 Active
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-gray-100 bg-[#f9faf9] p-4 transition-all hover:bg-white hover:shadow-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800 text-sm">
                    Onion · Grade A
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/70 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                    Active
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500 font-medium">
                  Required: 50 Quintals · Nashik
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#f9faf9] p-4 transition-all hover:bg-white hover:shadow-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800 text-sm">
                    Tomato · Grade A
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/70 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                    Active
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500 font-medium">
                  Required: 30 Quintals · Pune
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Produce */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold tracking-tight text-[#123c2c]">
                Recommended Produce
              </h2>
              <span className="text-xs font-bold text-gray-400">Curated for you</span>
            </div>

            <div className="space-y-3">
              {["Onion", "Potato", "Wheat"].map((crop) => (
                <div
                  key={crop}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-[#f9faf9] p-4 transition-all hover:bg-white hover:shadow-xs"
                >
                  <div>
                    <p className="text-sm font-bold text-gray-800">{crop}</p>

                    <p className="mt-0.5 text-xs text-gray-400 font-medium">
                      Verified farmers available
                    </p>
                  </div>

                  <button className="inline-flex items-center gap-1 rounded-xl bg-[#123c2c] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#0d3024] hover:scale-[1.02] active:scale-[0.98]">
                    <span>Explore</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default BuyerDashboard;
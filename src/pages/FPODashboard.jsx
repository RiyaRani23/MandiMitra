import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMandiPrices } from "../services/mandiApi";
import { 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingBag, 
  CreditCard, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

function FPODashboard() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPrices = async () => {
      try {
        const data = await fetchMandiPrices({
          state: "Maharashtra",
          limit: 100,
        });

        setPrices(data.records || []);
      } catch (error) {
        console.error("Failed to load mandi prices:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPrices();
  }, []);

  const stats = [
    {
      title: "Approved Farmers",
      value: "48",
      note: "4 added this month",
      icon: <Users size={18} className="text-[#6b6255]" />,
    },
    {
      title: "Produce Available",
      value: "1,240 kg",
      note: "Across 12 crops",
      icon: <Package size={18} className="text-[#6b6255]" />,
    },
    {
      title: "Active Deals",
      value: "6",
      note: "2 awaiting delivery",
      icon: <ShoppingBag size={18} className="text-[#6b6255]" />,
    },
    {
      title: "Pending Payments",
      value: "₹32,500",
      note: "3 payments pending",
      icon: <CreditCard size={18} className="text-[#6b6255]" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f7f5ed] px-4 py-6 sm:px-8 sm:py-8 overflow-hidden">
      
      {/* Background Soft Warm Glow */}
      <div className="absolute top-0 right-10 h-[350px] w-[350px] rounded-full bg-[#e8e2d2]/40 blur-[100px] pointer-events-none" />

      <main className="relative z-10 space-y-8 max-w-7xl mx-auto">

        {/* Welcome Banner (Simple Clean White) */}
        <section className="relative overflow-hidden rounded-3xl border border-[#e3dcd0] bg-white p-6 sm:p-8 shadow-sm">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#f7f5ed] blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f5ed] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#6b6255] border border-[#e3dcd0]">
              <Sparkles size={13} className="text-[#8c8273]" />
              FPO Portal
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#8c8273]">
              FPO Dashboard
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2d2822]">
              Welcome back, FPO 👋
            </h1>

            <p className="max-w-2xl text-xs sm:text-sm text-[#6b6255] leading-relaxed pt-1">
              Manage your farmers, aggregated produce, buyers and market opportunities from one place.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-[#e3dcd0] bg-white/90 backdrop-blur-md p-6 shadow-2xs transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-[#8c8273] uppercase tracking-wide">{stat.title}</p>
                <div className="p-2 rounded-xl border border-[#e8e2d2] bg-[#fbf9f4] shadow-2xs">
                  {stat.icon}
                </div>
              </div>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#2d2822]">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs font-semibold text-[#8c8273] flex items-center gap-1">
                {stat.note}
              </p>
            </div>
          ))}
        </section>

        {/* Market Prices Section */}
        <section className="rounded-3xl border border-[#e3dcd0] bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-[#4a4238]" />
                <h2 className="text-lg font-bold tracking-tight text-[#2d2822]">
                  Current Market Prices
                </h2>
              </div>

              <p className="mt-0.5 text-xs text-[#8c8273] font-medium">
                Latest live mandi prices
              </p>
            </div>

            <Link
              to="/fpo/market-prices"
              className="group inline-flex items-center gap-1 text-xs font-bold text-[#4a4238] hover:text-[#2d2822] transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-36 animate-pulse rounded-2xl bg-[#f0ebd9] border border-[#e3dcd0]"
                />
              ))}
            </div>
          ) : prices.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#d9d0c1] p-8 text-center bg-[#fbf9f4]">
              <p className="text-xs text-[#8c8273] font-medium">
                No market prices available right now.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {prices.slice(0, 4).map((item, index) => (
                <div
                  key={`${item.commodity}-${item.market}-${index}`}
                  className="group rounded-2xl border border-[#e8e2d2] bg-[#fbf9f4]/70 p-5 transition-all duration-300 hover:border-[#b5ad9e] hover:bg-white hover:shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#2d2822] tracking-tight">
                      {item.commodity}
                    </h3>

                    <span className="rounded-full bg-[#e8e2d2] px-2 py-0.5 text-[10px] font-bold text-[#524b43]">
                      LIVE
                    </span>
                  </div>

                  <p className="mt-1 truncate text-xs text-[#8c8273] font-medium">
                    📍 {item.market} Mandi
                  </p>

                  <div className="mt-4">
                    <p className="text-[11px] font-medium text-[#a39988] uppercase tracking-wide">
                      Modal Price
                    </p>

                    <p className="mt-0.5 text-xl font-bold tracking-tight text-[#2d2822]">
                      ₹
                      {Number(item.modal_price).toLocaleString("en-IN")}
                      <span className="ml-1 text-xs font-medium text-[#8c8273]">
                        /q
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Bottom Sections */}
        <div className="grid gap-6 xl:grid-cols-2">

          {/* Approved Farmers */}
          <section className="rounded-3xl border border-[#e3dcd0] bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg tracking-tight text-[#2d2822]">
                  Approved Farmers
                </h2>

                <p className="mt-0.5 text-xs text-[#8c8273] font-medium">
                  Farmers connected with your FPO
                </p>
              </div>

              <Link
                to="/fpo/approved-farmers"
                className="group inline-flex items-center gap-1 text-xs font-bold text-[#4a4238] hover:text-[#2d2822] transition-colors"
              >
                <span>View All</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-[#e8e2d2] bg-[#fbf9f4]/70 p-4 transition-all hover:bg-white hover:shadow-2xs">
                <p className="text-sm font-bold text-[#2d2822]">
                  Rajesh Kumar
                </p>

                <p className="mt-1 text-xs text-[#8c8273] font-medium">
                  Onion • 25 Quintals
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8e2d2] bg-[#fbf9f4]/70 p-4 transition-all hover:bg-white hover:shadow-2xs">
                <p className="text-sm font-bold text-[#2d2822]">
                  Sunita Devi
                </p>

                <p className="mt-1 text-xs text-[#8c8273] font-medium">
                  Tomato • 15 Quintals
                </p>
              </div>
            </div>
          </section>

          {/* Buyer Requirements */}
          <section className="rounded-3xl border border-[#e3dcd0] bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg tracking-tight text-[#2d2822]">
                  Buyer Requirements
                </h2>

                <p className="mt-0.5 text-xs text-[#8c8273] font-medium">
                  Current demand from buyers
                </p>
              </div>

              <Link
                to="/fpo/buyer-requirements"
                className="group inline-flex items-center gap-1 text-xs font-bold text-[#4a4238] hover:text-[#2d2822] transition-colors"
              >
                <span>View All</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-[#e8e2d2] bg-[#fbf9f4]/70 p-4 transition-all hover:bg-white hover:shadow-2xs">
                <p className="text-sm font-bold text-[#2d2822]">
                  Onion
                </p>

                <p className="mt-1 text-xs text-[#8c8273] font-medium">
                  Grade A • 50 Quintals
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8e2d2] bg-[#fbf9f4]/70 p-4 transition-all hover:bg-white hover:shadow-2xs">
                <p className="text-sm font-bold text-[#2d2822]">
                  Tomato
                </p>

                <p className="mt-1 text-xs text-[#8c8273] font-medium">
                  Grade A • 30 Quintals
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default FPODashboard;
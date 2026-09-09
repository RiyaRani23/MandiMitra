import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMandiPrices } from "../services/mandiApi";

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
    },
    {
      title: "Offers Received",
      value: "28",
      note: "+8 this week",
    },
    {
      title: "Active Deals",
      value: "6",
      note: "2 awaiting delivery",
    },
    {
      title: "Pending Payments",
      value: "₹42,500",
      note: "3 payments",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f5]">
      <main className="space-y-6 p-5 sm:p-8">
        {/* Welcome */}
        <section>
          <p className="text-sm text-gray-500">Welcome back 👋</p>

          <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
            Good Morning, Buyer
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your purchases, compare prices and connect with reliable
            farmers.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/buyer/requirements"
              className="rounded-lg bg-[#123c2c] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0d3024]"
            >
              Post Buying Requirement
            </Link>

            <Link
              to="/buyer/find-farmers"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-[#123c2c] hover:bg-gray-50"
            >
              Find Farmers
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <p className="text-sm text-gray-500">{stat.title}</p>

              <h2 className="mt-3 text-2xl font-semibold text-[#123c2c]">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs text-green-600">{stat.note}</p>
            </div>
          ))}
        </section>

        {/* Market Prices */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#123c2c]">
                Current Market Prices
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Latest mandi prices for major commodities
              </p>
            </div>

            <Link
              to="/buyer/market-prices"
              className="text-xs font-medium text-[#197044] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {loadingPrices
              ? [1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse rounded-xl bg-[#f6f8f5] p-4"
                  >
                    <div className="h-4 w-24 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-32 rounded bg-gray-200" />
                    <div className="mt-5 h-6 w-20 rounded bg-gray-200" />
                  </div>
                ))
              : marketPrices.slice(0, 4).map((item, index) => (
                  <div
                    key={`${item.commodity}-${item.market}-${index}`}
                    className="rounded-xl bg-[#f6f8f5] p-4"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {item.commodity}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      📍 {item.market} Mandi
                    </p>

                    <div className="mt-4">
                      <span className="text-lg font-semibold text-[#123c2c]">
                        ₹{Number(item.modal_price).toLocaleString("en-IN")}
                      </span>

                      <span className="ml-1 text-xs text-gray-500">/q</span>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        {/* Bottom Sections */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Buying Requirements */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-[#123c2c]">
              My Buying Requirements
            </h2>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-gray-100 p-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    Onion · Grade A
                  </span>

                  <span className="text-xs text-green-600">Active</span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Required: 50 Quintals · Nashik
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    Tomato · Grade A
                  </span>

                  <span className="text-xs text-green-600">Active</span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Required: 30 Quintals · Pune
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Produce */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-[#123c2c]">
              Recommended Produce
            </h2>

            <div className="mt-5 space-y-3">
              {["Onion", "Potato", "Wheat"].map((crop) => (
                <div
                  key={crop}
                  className="flex items-center justify-between rounded-xl bg-[#f6f8f5] p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">{crop}</p>

                    <p className="mt-1 text-xs text-gray-500">
                      Verified farmers available
                    </p>
                  </div>

                  <button className="rounded-lg bg-[#123c2c] px-3 py-2 text-xs text-white hover:bg-[#0d3024]">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BuyerDashboard;

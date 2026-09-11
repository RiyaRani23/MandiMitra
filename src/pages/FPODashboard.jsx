import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMandiPrices } from "../services/mandiApi";

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
    },
    {
      title: "Produce Available",
      value: "1,240 kg",
      note: "Across 12 crops",
    },
    {
      title: "Active Deals",
      value: "6",
      note: "2 awaiting delivery",
    },
    {
      title: "Pending Payments",
      value: "₹32,500",
      note: "3 payments pending",
    },
  ];

  return (
    <div className="space-y-6 p-5 sm:p-8">

      {/* Welcome */}
      <section>
        <p className="text-sm font-medium text-green-600">
          FPO Dashboard
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Welcome back, FPO 👋
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Manage your farmers, aggregated produce, buyers and market
          opportunities from one place.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {stat.value}
            </h2>

            <p className="mt-1 text-xs text-green-600">
              {stat.note}
            </p>
          </div>
        ))}
      </section>

      {/* Market Prices */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Current Market Prices
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest live mandi prices
            </p>
          </div>

          <Link
            to="/fpo/market-prices"
            className="text-sm font-semibold text-green-700 hover:text-green-800"
          >
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-36 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        ) : prices.length === 0 ? (
          <div className="rounded-xl border border-dashed p-6 text-center">
            <p className="text-sm text-gray-500">
              No market prices available right now.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {prices.slice(0, 4).map((item, index) => (
              <div
                key={`${item.commodity}-${item.market}-${index}`}
                className="rounded-xl border border-gray-100 p-4 transition hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">
                    {item.commodity}
                  </h3>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-700">
                    LIVE
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  📍 {item.market} Mandi
                </p>

                <div className="mt-4">
                  <p className="text-xs text-gray-500">
                    Modal Price
                  </p>

                  <p className="mt-1 text-xl font-bold text-green-700">
                    ₹
                    {Number(item.modal_price).toLocaleString("en-IN")}
                    <span className="ml-1 text-xs font-normal text-gray-500">
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
        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-900">
                Approved Farmers
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Farmers connected with your FPO
              </p>
            </div>

            <Link
              to="/fpo/approved-farmers"
              className="text-sm font-semibold text-green-700 hover:text-green-800"
            >
              View All →
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold text-gray-900">
                Rajesh Kumar
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Onion • 25 Quintals
              </p>
            </div>

            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold text-gray-900">
                Sunita Devi
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Tomato • 15 Quintals
              </p>
            </div>
          </div>
        </section>

        {/* Buyer Requirements */}
        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-900">
                Buyer Requirements
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Current demand from buyers
              </p>
            </div>

            <Link
              to="/fpo/buyer-requirements"
              className="text-sm font-semibold text-green-700 hover:text-green-800"
            >
              View All →
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold text-gray-900">
                Onion
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Grade A • 50 Quintals
              </p>
            </div>

            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold text-gray-900">
                Tomato
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Grade A • 30 Quintals
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default FPODashboard;
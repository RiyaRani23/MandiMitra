import { useState } from "react";
import {
  Search,
  Package,
  MapPin,
  IndianRupee,
  Eye,
  CheckCircle2,
  Clock,
  Truck,
} from "lucide-react";

const Deals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const deals = [
    {
      id: "MM-1001",
      buyer: "FreshMart Traders",
      crop: "Onion",
      quantity: "50 Quintals",
      price: "₹2,800 / Quintal",
      total: "₹1,40,000",
      location: "Pune, Maharashtra",
      status: "Confirmed",
      payment: "Pending",
      date: "10 Sep 2026",
    },
    {
      id: "MM-1002",
      buyer: "AgroFresh Foods",
      crop: "Tomato",
      quantity: "30 Quintals",
      price: "₹2,400 / Quintal",
      total: "₹72,000",
      location: "Mumbai, Maharashtra",
      status: "In Transit",
      payment: "Paid",
      date: "08 Sep 2026",
    },
    {
      id: "MM-1003",
      buyer: "Green Basket Pvt. Ltd.",
      crop: "Potato",
      quantity: "40 Quintals",
      price: "₹2,200 / Quintal",
      total: "₹88,000",
      location: "Nashik, Maharashtra",
      status: "Delivered",
      payment: "Paid",
      date: "05 Sep 2026",
    },
    {
      id: "MM-1004",
      buyer: "Shree Foods",
      crop: "Wheat",
      quantity: "100 Quintals",
      price: "₹2,600 / Quintal",
      total: "₹2,60,000",
      location: "Nagpur, Maharashtra",
      status: "Confirmed",
      payment: "Pending",
      date: "03 Sep 2026",
    },
  ];

  const filteredDeals = deals.filter((deal) =>
    `${deal.id} ${deal.buyer} ${deal.crop} ${deal.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-50 text-green-700";
    }

    if (status === "In Transit") {
      return "bg-blue-50 text-blue-700";
    }

    return "bg-orange-50 text-orange-700";
  };

  const getPaymentStyle = (payment) => {
    return payment === "Paid"
      ? "bg-green-50 text-green-700"
      : "bg-yellow-50 text-yellow-700";
  };

  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">FPO Dashboard</p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          My Deals
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Track your confirmed deals with buyers, delivery progress and
          payment status.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Package size={21} className="text-green-700" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Total Deals</p>
              <p className="text-xl font-bold text-gray-900">6</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Clock size={21} className="text-orange-500" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Active Deals</p>
              <p className="text-xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Truck size={21} className="text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">In Transit</p>
              <p className="text-xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <IndianRupee size={21} className="text-purple-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Deal Value</p>
              <p className="text-xl font-bold text-gray-900">₹5.6L</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deals */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {/* Search */}
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Deal History
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and track all buyer deals
              </p>
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search buyer, crop or deal ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Deal List */}
        {filteredDeals.length === 0 ? (
          <div className="p-10 text-center">
            <Package size={32} className="mx-auto text-gray-300" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No deals found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching with a different buyer, crop or deal ID.
            </p>
          </div>
        ) : (
          filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                {/* Buyer + Deal */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {deal.buyer}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${getStatusStyle(
                        deal.status
                      )}`}
                    >
                      {deal.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400">
                    Deal ID: {deal.id} • {deal.date}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Package size={14} />
                      {deal.crop} • {deal.quantity}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {deal.location}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="rounded-xl bg-gray-50 px-4 py-3 xl:min-w-48">
                  <p className="text-[11px] text-gray-400">
                    Agreed Price
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {deal.price}
                  </p>

                  <p className="mt-1 text-xs text-green-700">
                    Total: {deal.total}
                  </p>
                </div>

                {/* Payment + View */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium ${getPaymentStyle(
                      deal.payment
                    )}`}
                  >
                    {deal.payment === "Paid" ? (
                      <CheckCircle2 size={14} />
                    ) : (
                      <Clock size={14} />
                    )}

                    {deal.payment}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-green-600 hover:text-green-700"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Deals;
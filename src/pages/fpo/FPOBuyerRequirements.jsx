import { useState } from "react";
import {
  Search,
  MapPin,
  Package,
  IndianRupee,
  CheckCircle2,
  Users,
} from "lucide-react";

const BuyerRequirements = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const requirements = [
    {
      buyer: "FreshMart Traders",
      crop: "Onion",
      quantity: "50 Quintals",
      grade: "Grade A",
      price: "₹2,800 / Quintal",
      location: "Pune, Maharashtra",
      status: "Open",
    },
    {
      buyer: "AgroFresh Foods",
      crop: "Tomato",
      quantity: "30 Quintals",
      grade: "Grade A",
      price: "₹2,400 / Quintal",
      location: "Mumbai, Maharashtra",
      status: "Open",
    },
    {
      buyer: "Green Basket Pvt. Ltd.",
      crop: "Potato",
      quantity: "40 Quintals",
      grade: "Grade A",
      price: "₹2,200 / Quintal",
      location: "Nashik, Maharashtra",
      status: "Open",
    },
    {
      buyer: "Shree Foods",
      crop: "Wheat",
      quantity: "100 Quintals",
      grade: "Grade A",
      price: "₹2,600 / Quintal",
      location: "Nagpur, Maharashtra",
      status: "Open",
    },
    {
      buyer: "Daily Harvest",
      crop: "Soybean",
      quantity: "25 Quintals",
      grade: "Grade B",
      price: "₹4,500 / Quintal",
      location: "Ahmednagar, Maharashtra",
      status: "Open",
    },
  ];

  const filteredRequirements = requirements.filter((item) =>
    `${item.buyer} ${item.crop} ${item.grade} ${item.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">
          FPO Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Buyer Requirements
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Discover what buyers are looking for and match their
          requirements with your available produce.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Package size={21} className="text-green-700" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Open Requirements
              </p>

              <p className="text-xl font-bold text-gray-900">
                12
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Users size={21} className="text-orange-500" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Active Buyers
              </p>

              <p className="text-xl font-bold text-gray-900">
                8
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <CheckCircle2 size={21} className="text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Matched Opportunities
              </p>

              <p className="text-xl font-bold text-gray-900">
                5
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Current Requirements
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Buyer demand that your FPO can potentially fulfill
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search buyer, crop or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-600 focus:bg-white"
              />
            </div>

          </div>
        </div>

        {/* Requirements */}
        {filteredRequirements.length === 0 ? (
          <div className="p-10 text-center">
            <Package
              size={32}
              className="mx-auto text-gray-300"
            />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No requirements found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching for another buyer or crop.
            </p>
          </div>
        ) : (
          <div>
            {filteredRequirements.map((item) => (
              <div
                key={`${item.buyer}-${item.crop}`}
                className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                  {/* Buyer */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123c2c]">
                      <Users
                        size={21}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {item.buyer}
                        </h3>

                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Package size={14} />
                          {item.crop}
                        </span>

                        <span>
                          {item.quantity}
                        </span>

                        <span>
                          {item.grade}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expected Price */}
                  <div className="rounded-xl bg-gray-50 px-5 py-3 xl:min-w-44">
                    <p className="text-[11px] text-gray-400">
                      Expected Price
                    </p>

                    <p className="mt-1 flex items-center text-sm font-bold text-gray-900">
                      <IndianRupee size={14} />
                      {item.price.replace("₹", "")}
                    </p>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    className="rounded-xl bg-[#123c2c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3023]"
                  >
                    Match Inventory
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerRequirements;
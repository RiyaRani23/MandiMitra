import { useState } from "react";
import {
  Search,
  Package,
  Scale,
  Users,
  CheckCircle2,
} from "lucide-react";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const inventory = [
    {
      crop: "Onion",
      quantity: "245 Quintals",
      farmers: 12,
      grade: "Grade A",
      status: "Available",
    },
    {
      crop: "Tomato",
      quantity: "180 Quintals",
      farmers: 9,
      grade: "Grade A",
      status: "Available",
    },
    {
      crop: "Potato",
      quantity: "120 Quintals",
      farmers: 7,
      grade: "Grade A",
      status: "Available",
    },
    {
      crop: "Wheat",
      quantity: "320 Quintals",
      farmers: 14,
      grade: "Grade A",
      status: "Available",
    },
    {
      crop: "Soybean",
      quantity: "95 Quintals",
      farmers: 6,
      grade: "Grade B",
      status: "Available",
    },
  ];

  const filteredInventory = inventory.filter((item) =>
    `${item.crop} ${item.grade}`
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
          Produce Inventory
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Track aggregated produce collected from approved farmers
          and manage your available stock.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Package size={21} className="text-green-700" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Total Produce
              </p>

              <p className="text-xl font-bold text-gray-900">
                960 Q
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Scale size={21} className="text-orange-500" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Active Crops
              </p>

              <p className="text-xl font-bold text-gray-900">
                5
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Users size={21} className="text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Contributing Farmers
              </p>

              <p className="text-xl font-bold text-gray-900">
                48
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <CheckCircle2 size={21} className="text-green-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Available Stock
              </p>

              <p className="text-xl font-bold text-gray-900">
                100%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Available Produce
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Aggregated stock currently available for buyers
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
                placeholder="Search crop or grade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Inventory List */}
        {filteredInventory.length === 0 ? (
          <div className="p-10 text-center">
            <Package
              size={32}
              className="mx-auto text-gray-300"
            />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No produce found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching for another crop.
            </p>
          </div>
        ) : (
          <div>
            {filteredInventory.map((item) => (
              <div
                key={item.crop}
                className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Crop Info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123c2c]">
                      <Package
                        size={21}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {item.crop}
                        </h3>

                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                          {item.grade}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
                        <span>
                          {item.farmers} contributing farmers
                        </span>

                        <span>
                          Aggregated through FPO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="rounded-xl bg-gray-50 px-5 py-3 lg:min-w-40">
                    <p className="text-[11px] text-gray-400">
                      Available Quantity
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {item.quantity}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                    <CheckCircle2 size={17} />
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
import { useState } from "react";
import { Search, MapPin, Package, CheckCircle2, Users } from "lucide-react";

const ApprovedFarmers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const farmers = [
    {
      name: "Rajesh Kumar",
      crop: "Onion",
      quantity: "25 Quintals",
      location: "Nashik, Maharashtra",
      status: "Approved",
    },
    {
      name: "Sunita Devi",
      crop: "Tomato",
      quantity: "15 Quintals",
      location: "Pune, Maharashtra",
      status: "Approved",
    },
    {
      name: "Amit Patil",
      crop: "Potato",
      quantity: "30 Quintals",
      location: "Ahmednagar, Maharashtra",
      status: "Approved",
    },
    {
      name: "Meena Sharma",
      crop: "Wheat",
      quantity: "40 Quintals",
      location: "Nagpur, Maharashtra",
      status: "Approved",
    },
    {
      name: "Suresh Pawar",
      crop: "Onion",
      quantity: "20 Quintals",
      location: "Nashik, Maharashtra",
      status: "Approved",
    },
  ];

  const filteredFarmers = farmers.filter((farmer) =>
    `${farmer.name} ${farmer.crop} ${farmer.location}`
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
          Approved Farmers
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Manage farmers approved to supply produce through your FPO
          and keep track of their available produce.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Users className="text-green-700" size={21} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Total Farmers
              </p>

              <p className="text-xl font-bold text-gray-900">
                48
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Package className="text-orange-500" size={21} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Active Produce
              </p>

              <p className="text-xl font-bold text-gray-900">
                1,240 kg
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <CheckCircle2 className="text-blue-600" size={21} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Approved
              </p>

              <p className="text-xl font-bold text-gray-900">
                48
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        {/* Card Header */}
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Farmer List
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Farmers currently approved by your FPO
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
                placeholder="Search farmer, crop or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Farmer List */}
        <div>
          {filteredFarmers.length === 0 ? (
            <div className="p-10 text-center">
              <Users
                size={32}
                className="mx-auto text-gray-300"
              />

              <p className="mt-3 text-sm font-medium text-gray-700">
                No farmers found
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Try searching with a different name, crop or location.
              </p>
            </div>
          ) : (
            filteredFarmers.map((farmer) => (
              <div
                key={`${farmer.name}-${farmer.crop}`}
                className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  {/* Farmer Info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#123c2c] text-sm font-bold text-white">
                      {farmer.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {farmer.name}
                        </h3>

                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                          <CheckCircle2 size={12} />
                          {farmer.status}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Package size={14} />
                          {farmer.crop}
                        </span>

                        <span className="flex items-center gap-1.5">
                          {farmer.quantity}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {farmer.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Produce */}
                  <div className="rounded-xl bg-gray-50 px-4 py-3 lg:min-w-36">
                    <p className="text-[11px] text-gray-400">
                      Available Produce
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {farmer.quantity}
                    </p>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovedFarmers;

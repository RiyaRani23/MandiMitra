import { useState } from "react";
import {
  Search,
  MapPin,
  Users,
  Wheat,
  CheckCircle2,
  Phone,
  X,
} from "lucide-react";

const fpos = [
  {
    id: 1,
    name: "Nashik Farmer Producer Company",
    location: "Nashik, Maharashtra",
    crops: ["Onion", "Tomato", "Grapes"],
    farmers: 850,
    capacity: "2,500 q",
    contact: "+91 98765 43210",
    description:
      "A farmer-led organization helping growers aggregate produce and connect with bulk buyers.",
  },
  {
    id: 2,
    name: "Akola Krushi FPO",
    location: "Akola, Maharashtra",
    crops: ["Cotton", "Soybean", "Wheat"],
    farmers: 620,
    capacity: "1,800 q",
    contact: "+91 98765 12345",
    description:
      "Supports farmers with collective selling, market access and better price discovery.",
  },
  {
    id: 3,
    name: "Pune Agro Farmers FPO",
    location: "Pune, Maharashtra",
    crops: ["Tomato", "Potato", "Onion"],
    farmers: 540,
    capacity: "1,500 q",
    contact: "+91 91234 56789",
    description:
      "Connects local farmers with institutional and wholesale buyers through collective marketing.",
  },
  {
    id: 4,
    name: "Ahmednagar Kisan FPO",
    location: "Ahmednagar, Maharashtra",
    crops: ["Potato", "Onion", "Maize"],
    farmers: 710,
    capacity: "2,100 q",
    contact: "+91 99887 66554",
    description:
      "Helps farmers aggregate their produce and negotiate better opportunities with buyers.",
  },
];

const FPOs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cropFilter, setCropFilter] = useState("All");
  const [selectedFPO, setSelectedFPO] = useState(null);

  const crops = [
    "All",
    ...new Set(fpos.flatMap((fpo) => fpo.crops)),
  ];

  const filteredFPOs = fpos.filter((fpo) => {
    const matchesSearch =
      fpo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fpo.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCrop =
      cropFilter === "All" || fpo.crops.includes(cropFilter);

    return matchesSearch && matchesCrop;
  });

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Farmer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          FPOs
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Connect with Farmer Producer Organizations to sell your produce
          collectively and reach bulk buyers.
        </p>
      </section>

      {/* Search & Filter */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search FPO or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#197044]"
            />
          </div>

          <select
            value={cropFilter}
            onChange={(e) => setCropFilter(e.target.value)}
            className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#197044]"
          >
            {crops.map((crop) => (
              <option key={crop}>{crop}</option>
            ))}
          </select>
        </div>
      </section>

      {/* FPO List */}
      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#123c2c]">
              Available FPOs
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredFPOs.length} FPOs found
            </p>
          </div>
        </div>

        {filteredFPOs.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="font-medium text-gray-700">
              No FPOs found
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or crop filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredFPOs.map((fpo) => (
              <div
                key={fpo.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* FPO Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#197044]">
                      <Wheat size={21} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-gray-800">
                          {fpo.name}
                        </h3>

                        <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-700">
                          <CheckCircle2 size={11} />
                          Verified
                        </span>
                      </div>

                      <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={13} />
                        {fpo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Crops */}
                <div className="mt-5">
                  <p className="text-xs font-medium text-gray-500">
                    Main Crops
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {fpo.crops.map((crop) => (
                      <span
                        key={crop}
                        className="rounded-lg bg-[#f6f8f5] px-3 py-1.5 text-xs text-gray-700"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Users size={15} />
                      <span className="text-xs">Farmers</span>
                    </div>

                    <p className="mt-1 font-semibold text-[#123c2c]">
                      {fpo.farmers.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Wheat size={15} />
                      <span className="text-xs">Capacity</span>
                    </div>

                    <p className="mt-1 font-semibold text-[#123c2c]">
                      {fpo.capacity}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setSelectedFPO(fpo)}
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    View FPO
                  </button>

                  <button
                    onClick={() => setSelectedFPO(fpo)}
                    className="flex-1 rounded-xl bg-[#123c2c] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#0d3024]"
                  >
                    Contact FPO
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FPO Details Modal */}
      {selectedFPO && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#123c2c]">
                  {selectedFPO.name}
                </h2>

                <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={13} />
                  {selectedFPO.location}
                </p>
              </div>

              <button
                onClick={() => setSelectedFPO(null)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 rounded-xl bg-[#f6f8f5] p-4">
              <p className="text-xs leading-6 text-gray-600">
                {selectedFPO.description}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Registered Farmers</span>
                <span className="font-medium text-gray-800">
                  {selectedFPO.farmers.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Aggregation Capacity</span>
                <span className="font-medium text-gray-800">
                  {selectedFPO.capacity}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Contact</span>
                <span className="font-medium text-gray-800">
                  {selectedFPO.contact}
                </span>
              </div>
            </div>

            <button
              onClick={() => alert(`Calling ${selectedFPO.contact}`)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#123c2c] px-4 py-3 text-sm font-medium text-white hover:bg-[#0d3024]"
            >
              <Phone size={17} />
              Contact FPO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FPOs;


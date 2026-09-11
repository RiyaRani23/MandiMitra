import { useState } from "react";
import {
  UserPlus,
  Search,
  MapPin,
  Phone,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const AddFarmer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sentRequests, setSentRequests] = useState([]);

  const farmers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "98******42",
      village: "Niphad",
      district: "Nashik",
      crop: "Onion",
    },
    {
      id: 2,
      name: "Priya Patil",
      phone: "97******18",
      village: "Sinnar",
      district: "Nashik",
      crop: "Tomato",
    },
    {
      id: 3,
      name: "Vijay Kumar",
      phone: "96******73",
      village: "Khed",
      district: "Pune",
      crop: "Potato",
    },
  ];

  const filteredFarmers = farmers.filter((farmer) =>
    `${farmer.name} ${farmer.village} ${farmer.district} ${farmer.crop}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleRequest = (farmerId) => {
    setSentRequests((prev) => [...prev, farmerId]);

    // FUTURE BACKEND:
    // Send farmer join request to Spring Boot API
  };

  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">
          FPO Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Add Farmer
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Find farmers on MandiMitra and send them an invitation to
          join your FPO.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
            <UserPlus size={21} className="text-green-700" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Find a Farmer
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Search using farmer name, village, district or crop.
            </p>
          </div>
        </div>

        <div className="relative mt-5">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search farmer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
          />
        </div>
      </div>

      {/* Farmer List */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Available Farmers
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Send a request to farmers you want to connect with.
          </p>
        </div>

        {filteredFarmers.length === 0 ? (
          <div className="p-10 text-center">
            <Search size={32} className="mx-auto text-gray-300" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No farmers found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching with a different name, village or crop.
            </p>
          </div>
        ) : (
          filteredFarmers.map((farmer) => {
            const requestSent = sentRequests.includes(farmer.id);

            return (
              <div
                key={farmer.id}
                className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  {/* Farmer Information */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#123c2c] text-sm font-bold text-white">
                      {farmer.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {farmer.name}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Phone size={14} />
                          {farmer.phone}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {farmer.village}, {farmer.district}
                        </span>

                        <span>
                          Crop: {farmer.crop}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Request Button */}
                  {requestSent ? (
                    <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-50 px-4 py-2.5 text-sm font-medium text-yellow-700">
                      <Clock3 size={16} />
                      Request Pending
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRequest(farmer.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123c2c] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0e3023]"
                    >
                      <UserPlus size={16} />
                      Send Request
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Info */}
      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
        <CheckCircle2
          size={18}
          className="mt-0.5 shrink-0 text-green-700"
        />

        <div>
          <p className="text-sm font-semibold text-green-800">
            How farmer approval works
          </p>

          <p className="mt-1 text-xs leading-5 text-green-700">
            Send a request to a farmer. The farmer must accept the
            request before being added to your approved farmer list.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddFarmer;
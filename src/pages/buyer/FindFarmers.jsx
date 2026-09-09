import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import FarmerCard from "../../components/buyer/FarmerCard";

const farmers = [
  {
    name: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    crop: "Onion",
    grade: "Grade A",
    quantity: 80,
    price: 2400,
    verified: true,
  },
  {
    name: "Suresh Patil",
    location: "Pune, Maharashtra",
    crop: "Tomato",
    grade: "Grade A",
    quantity: 50,
    price: 2200,
    verified: true,
  },
  {
    name: "Amit Shinde",
    location: "Ahmednagar, Maharashtra",
    crop: "Potato",
    grade: "Grade B",
    quantity: 120,
    price: 1900,
    verified: true,
  },
  {
    name: "Vijay More",
    location: "Nashik, Maharashtra",
    crop: "Onion",
    grade: "Grade A",
    quantity: 65,
    price: 2450,
    verified: true,
  },
];

const FindFarmers = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    crop: "",
    location: "",
    grade: "",
    quantity: "",
  });

  const filteredFarmers = farmers.filter((farmer) => {
    const value = search.toLowerCase();

    const matchesSearch =
      farmer.name.toLowerCase().includes(value) ||
      farmer.crop.toLowerCase().includes(value) ||
      farmer.location.toLowerCase().includes(value);

    const matchesCrop =
      !filters.crop || farmer.crop === filters.crop;

    const matchesLocation =
      !filters.location ||
      farmer.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchesGrade =
      !filters.grade || farmer.grade === filters.grade;

    const matchesQuantity =
      !filters.quantity ||
      farmer.quantity >= Number(filters.quantity);

    return (
      matchesSearch &&
      matchesCrop &&
      matchesLocation &&
      matchesGrade &&
      matchesQuantity
    );
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      crop: "",
      location: "",
      grade: "",
      quantity: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Buyer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Find Farmers
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Find verified farmers and FPOs supplying the produce you need.
        </p>
      </section>

      {/* Search */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search crop, farmer or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#197044]"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${
              showFilters
                ? "bg-[#123c2c] text-white"
                : "border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <select
              name="crop"
              value={filters.crop}
              onChange={handleFilterChange}
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#197044]"
            >
              <option value="">All Crops</option>
              <option>Onion</option>
              <option>Tomato</option>
              <option>Potato</option>
              <option>Wheat</option>
              <option>Rice</option>
            </select>

            <input
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Location"
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#197044]"
            />

            <select
              name="grade"
              value={filters.grade}
              onChange={handleFilterChange}
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#197044]"
            >
              <option value="">All Quality</option>
              <option>Grade A</option>
              <option>Grade B</option>
              <option>Grade C</option>
            </select>

            <input
              type="number"
              name="quantity"
              value={filters.quantity}
              onChange={handleFilterChange}
              placeholder="Minimum Quintals"
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#197044]"
            />

            <button
              onClick={clearFilters}
              className="text-left text-xs font-medium text-[#197044] hover:underline sm:col-span-2 lg:col-span-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Results */}
      <section className="mt-6">
        <div className="mb-4">
          <h2 className="font-semibold text-[#123c2c]">
            Recommended Farmers
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            {filteredFarmers.length} farmers found
          </p>
        </div>

        {filteredFarmers.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredFarmers.map((farmer) => (
              <FarmerCard
                key={`${farmer.name}-${farmer.crop}`}
                farmer={farmer}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="font-medium text-gray-700">
              No farmers found
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default FindFarmers;
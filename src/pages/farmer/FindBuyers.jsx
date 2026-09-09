import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, ShieldCheck } from "lucide-react";

const buyers = [
  {
    name: "Shree Agro Traders",
    location: "Nashik, Maharashtra",
    crop: "Onion",
    grade: "Grade A",
    quantity: 100,
    price: 2500,
    verified: true,
  },
  {
    name: "Maharashtra Fresh Foods",
    location: "Pune, Maharashtra",
    crop: "Tomato",
    grade: "Grade A",
    quantity: 60,
    price: 2250,
    verified: true,
  },
  {
    name: "Kisan Wholesale Hub",
    location: "Ahmednagar, Maharashtra",
    crop: "Potato",
    grade: "Grade B",
    quantity: 150,
    price: 1950,
    verified: true,
  },
  {
    name: "Fresh Crop Suppliers",
    location: "Nashik, Maharashtra",
    crop: "Onion",
    grade: "Grade A",
    quantity: 80,
    price: 2450,
    verified: true,
  },
];

const FindBuyers = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    crop: "",
    location: "",
    grade: "",
    quantity: "",
  });

  const filteredBuyers = buyers.filter((buyer) => {
    const value = search.toLowerCase();

    const matchesSearch =
      buyer.name.toLowerCase().includes(value) ||
      buyer.crop.toLowerCase().includes(value) ||
      buyer.location.toLowerCase().includes(value);

    const matchesCrop =
      !filters.crop || buyer.crop === filters.crop;

    const matchesLocation =
      !filters.location ||
      buyer.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchesGrade =
      !filters.grade || buyer.grade === filters.grade;

    const matchesQuantity =
      !filters.quantity ||
      buyer.quantity >= Number(filters.quantity);

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
        <p className="text-sm text-gray-500">Farmer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Find Buyers
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Find verified buyers looking for the produce you want to sell.
        </p>
      </section>

      {/* Search & Filters */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search crop, buyer or location..."
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
              placeholder="Minimum Quantity"
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

      {/* Buyers */}
      <section className="mt-6">
        <div className="mb-4">
          <h2 className="font-semibold text-[#123c2c]">
            Recommended Buyers
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            {filteredBuyers.length} buyers found
          </p>
        </div>

        {filteredBuyers.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredBuyers.map((buyer) => (
              <div
                key={`${buyer.name}-${buyer.crop}`}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Buyer Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4eb] font-semibold text-[#197044]">
                      {buyer.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#123c2c]">
                        {buyer.name}
                      </h3>

                      <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={13} />
                        {buyer.location}
                      </p>
                    </div>
                  </div>

                  {buyer.verified && (
                    <ShieldCheck
                      size={19}
                      className="text-[#197044]"
                    />
                  )}
                </div>

                {/* Requirement Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <p className="text-xs text-gray-500">Looking For</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {buyer.crop}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <p className="text-xs text-gray-500">Quality</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {buyer.grade}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <p className="text-xs text-gray-500">Required</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {buyer.quantity} Quintals
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f6f8f5] p-3">
                    <p className="text-xs text-gray-500">
                      Expected Price
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#123c2c]">
                      ₹{buyer.price.toLocaleString("en-IN")}/q
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                    View Requirement
                  </button>

                  <button className="flex-1 rounded-xl bg-[#123c2c] px-3 py-2.5 text-xs font-medium text-white hover:bg-[#0d3024]">
                    Make Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="font-medium text-gray-700">
              No buyers found
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

export default FindBuyers;
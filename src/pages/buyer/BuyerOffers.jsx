import { Eye, MapPin, Package, IndianRupee } from "lucide-react";

const offers = [
  {
    id: 1,
    crop: "Onion",
    grade: "Grade A",
    farmer: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    quantity: 50,
    price: 2450,
    status: "Pending",
  },
  {
    id: 2,
    crop: "Tomato",
    grade: "Grade A",
    farmer: "Suresh Patil",
    location: "Pune, Maharashtra",
    quantity: 30,
    price: 2200,
    status: "Accepted",
  },
  {
    id: 3,
    crop: "Potato",
    grade: "Grade B",
    farmer: "Amit Shinde",
    location: "Ahmednagar, Maharashtra",
    quantity: 40,
    price: 1900,
    status: "Rejected",
  },
];

const statusStyles = {
  Pending: "bg-yellow-50 text-yellow-700",
  Accepted: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-600",
};

const BuyerOffers = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Buyer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          My Offers
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Track the offers you have sent to farmers.
        </p>
      </section>

      {/* Offers */}
      <section className="mt-6 space-y-4">
        {offers.map((offer) => {
          const total = offer.quantity * offer.price;

          return (
            <div
              key={offer.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Farmer + Crop */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#197044]">
                      <Package size={21} />
                    </div>

                    <div>
                      <h2 className="font-semibold text-[#123c2c]">
                        {offer.crop} · {offer.grade}
                      </h2>

                      <p className="mt-1 text-xs text-gray-500">
                        Offer to {offer.farmer}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={14} />
                    {offer.location}
                  </p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-gray-500">Quantity</p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      {offer.quantity} Quintals
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Offered Price</p>
                    <p className="mt-1 flex items-center text-sm font-semibold text-[#123c2c]">
                      <IndianRupee size={14} />
                      {offer.price.toLocaleString("en-IN")}/q
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Total Value</p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      ₹{total.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Status + Action */}
                <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[offer.status]}`}
                  >
                    {offer.status}
                  </span>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">
                    <Eye size={15} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default BuyerOffers;
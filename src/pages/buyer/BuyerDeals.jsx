import { MapPin, PackageCheck, Truck, CreditCard } from "lucide-react";

const deals = [
  {
    id: "MM-1001",
    crop: "Onion",
    grade: "Grade A",
    farmer: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    quantity: 50,
    price: 2450,
    status: "In Transit",
  },
  {
    id: "MM-1002",
    crop: "Tomato",
    grade: "Grade A",
    farmer: "Suresh Patil",
    location: "Pune, Maharashtra",
    quantity: 30,
    price: 2200,
    status: "Confirmed",
  },
  {
    id: "MM-1003",
    crop: "Potato",
    grade: "Grade B",
    farmer: "Amit Shinde",
    location: "Ahmednagar, Maharashtra",
    quantity: 40,
    price: 1900,
    status: "Delivered",
  },
];

const statusStyles = {
  Confirmed: "bg-blue-50 text-blue-700",
  "In Transit": "bg-yellow-50 text-yellow-700",
  Delivered: "bg-green-50 text-green-700",
};

const BuyerDeals = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Buyer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          My Deals
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Track your confirmed purchases from farmers.
        </p>
      </section>

      {/* Deal Cards */}
      <section className="mt-6 space-y-5">
        {deals.map((deal) => {
          const total = deal.quantity * deal.price;

          return (
            <div
              key={deal.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              {/* Top */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#197044]">
                    <PackageCheck size={21} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#123c2c]">
                      {deal.crop} · {deal.grade}
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Deal ID: {deal.id}
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[deal.status]}`}
                >
                  {deal.status}
                </span>
              </div>

              {/* Details */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs text-gray-500">Farmer</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {deal.farmer}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-gray-800">
                    <MapPin size={14} />
                    {deal.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Quantity</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {deal.quantity} Quintals
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Total Value</p>
                  <p className="mt-1 text-sm font-semibold text-[#123c2c]">
                    ₹{total.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="mb-4 text-xs font-medium text-gray-500">
                  Deal Progress
                </p>

                <div className="grid grid-cols-4 gap-2">
                  <ProgressStep
                    icon={PackageCheck}
                    label="Confirmed"
                    active
                  />

                  <ProgressStep
                    icon={Truck}
                    label="Pickup"
                    active={
                      deal.status === "In Transit" ||
                      deal.status === "Delivered"
                    }
                  />

                  <ProgressStep
                    icon={Truck}
                    label="Delivery"
                    active={deal.status === "Delivered"}
                  />

                  <ProgressStep
                    icon={CreditCard}
                    label="Payment"
                    active={deal.status === "Delivered"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

const ProgressStep = ({ icon: Icon, label, active }) => {
  return (
    <div
      className={`rounded-xl p-3 text-center ${
        active ? "bg-[#eaf4eb] text-[#197044]" : "bg-gray-50 text-gray-400"
      }`}
    >
      <Icon size={18} className="mx-auto" />

      <p className="mt-2 text-[11px] font-medium">
        {label}
      </p>
    </div>
  );
};

export default BuyerDeals;
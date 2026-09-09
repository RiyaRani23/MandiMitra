import { useState } from "react";
import {
  MapPin,
  Package,
  IndianRupee,
  CheckCircle2,
  Clock3,
  Truck,
  X,
} from "lucide-react";

const deals = [
  {
    id: "MM-2001",
    crop: "Onion · Grade A",
    buyer: "Shree Agro Traders",
    location: "Nashik, Maharashtra",
    quantity: 50,
    price: 2450,
    status: "In Transit",
    step: 3,
  },
  {
    id: "MM-2002",
    crop: "Tomato · Grade A",
    buyer: "Maharashtra Fresh Foods",
    location: "Pune, Maharashtra",
    quantity: 30,
    price: 2200,
    status: "Confirmed",
    step: 1,
  },
  {
    id: "MM-2003",
    crop: "Potato · Grade B",
    buyer: "Kisan Wholesale Hub",
    location: "Ahmednagar, Maharashtra",
    quantity: 40,
    price: 1900,
    status: "Delivered",
    step: 4,
  },
];

const steps = [
  "Deal Confirmed",
  "Pickup",
  "In Transit",
  "Delivery",
  "Payment",
];

const statusStyles = {
  Confirmed: "bg-blue-50 text-blue-700",
  "In Transit": "bg-yellow-50 text-yellow-700",
  Delivered: "bg-green-50 text-green-700",
};

const FarmerDeals = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);

  const activeDeals = deals.length;

  const totalValue = deals.reduce(
    (total, deal) => total + deal.quantity * deal.price,
    0
  );

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Farmer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          My Deals
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Track your confirmed sales, deliveries and payments in one place.
        </p>
      </section>

      {/* Summary */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#eaf4eb] p-3 text-[#197044]">
              <Package size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Active Deals</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                {activeDeals}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Truck size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">In Transit</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                {deals.filter((deal) => deal.status === "In Transit").length}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-50 p-3 text-[#f7941d]">
              <IndianRupee size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Deal Value</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                ₹{totalValue.toLocaleString("en-IN")}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-[#123c2c]">
            Your Deals
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Track the progress of your produce sales.
          </p>
        </div>

        <div className="mt-5 space-y-4">
          {deals.map((deal) => {
            const total = deal.quantity * deal.price;

            return (
              <div
                key={deal.id}
                className="rounded-2xl border border-gray-100 p-5"
              >
                {/* Top */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-gray-800">
                        {deal.crop}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[deal.status]}`}
                      >
                        {deal.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      Deal ID: {deal.id}
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      Buyer: {deal.buyer}
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={13} />
                      {deal.location}
                    </p>
                  </div>

                  <div className="lg:text-right">
                    <p className="text-lg font-semibold text-[#123c2c]">
                      ₹{total.toLocaleString("en-IN")}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {deal.quantity} q · ₹
                      {deal.price.toLocaleString("en-IN")}/q
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex items-center">
                    {steps.map((step, index) => {
                      const completed = index < deal.step;

                      return (
                        <div
                          key={step}
                          className="flex flex-1 items-center"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                completed
                                  ? "bg-[#197044] text-white"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {completed ? (
                                <CheckCircle2 size={16} />
                              ) : (
                                <Clock3 size={15} />
                              )}
                            </div>

                            <span className="mt-2 hidden text-[10px] text-gray-500 sm:block">
                              {step}
                            </span>
                          </div>

                          {index < steps.length - 1 && (
                            <div
                              className={`mx-1 h-1 flex-1 rounded-full ${
                                index < deal.step - 1
                                  ? "bg-[#197044]"
                                  : "bg-gray-100"
                              }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action */}
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    View Deal Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Details Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#123c2c]">
                  Deal Details
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {selectedDeal.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedDeal(null)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-[#f6f8f5] p-4">
                <p className="text-xs text-gray-500">Produce</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedDeal.crop}
                </p>
              </div>

              <div className="rounded-xl bg-[#f6f8f5] p-4">
                <p className="text-xs text-gray-500">Buyer</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedDeal.buyer}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#f6f8f5] p-4">
                  <p className="text-xs text-gray-500">Quantity</p>
                  <p className="mt-1 font-medium text-gray-800">
                    {selectedDeal.quantity} q
                  </p>
                </div>

                <div className="rounded-xl bg-[#f6f8f5] p-4">
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="mt-1 font-medium text-gray-800">
                    ₹{selectedDeal.price.toLocaleString("en-IN")}/q
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#eaf4eb] p-4">
                <p className="text-xs text-gray-500">Total Deal Value</p>
                <p className="mt-1 text-xl font-semibold text-[#123c2c]">
                  ₹
                  {(selectedDeal.quantity * selectedDeal.price).toLocaleString(
                    "en-IN"
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-gray-700">
                  Current Status: {selectedDeal.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedDeal(null)}
              className="mt-6 w-full rounded-xl bg-[#123c2c] px-4 py-3 text-sm font-medium text-white hover:bg-[#0d3024]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDeals;

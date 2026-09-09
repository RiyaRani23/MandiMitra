import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  IndianRupee,
  MapPin,
  Package,
} from "lucide-react";

const payments = [
  {
    id: "PAY-2001",
    dealId: "MM-2001",
    crop: "Onion · Grade A",
    buyer: "Shree Agro Traders",
    location: "Nashik, Maharashtra",
    amount: 122500,
    date: "08 Sep 2026",
    status: "Pending",
  },
  {
    id: "PAY-2002",
    dealId: "MM-2002",
    crop: "Tomato · Grade A",
    buyer: "Maharashtra Fresh Foods",
    location: "Pune, Maharashtra",
    amount: 66000,
    date: "06 Sep 2026",
    status: "Paid",
  },
  {
    id: "PAY-2003",
    dealId: "MM-2003",
    crop: "Potato · Grade B",
    buyer: "Kisan Wholesale Hub",
    location: "Ahmednagar, Maharashtra",
    amount: 76000,
    date: "02 Sep 2026",
    status: "Paid",
  },
];

const FarmerPayments = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const pendingPayments = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((total, payment) => total + payment.amount, 0);

  const receivedPayments = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((total, payment) => total + payment.amount, 0);

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Farmer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Payments
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Track your earnings and payments from completed sales.
        </p>
      </section>

      {/* Summary */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <IndianRupee size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Total Received</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                ₹{receivedPayments.toLocaleString("en-IN")}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
              <Clock3 size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Pending Payments</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                ₹{pendingPayments.toLocaleString("en-IN")}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#eaf4eb] p-3 text-[#197044]">
              <Package size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Transactions</p>
              <h2 className="mt-1 text-xl font-semibold text-[#123c2c]">
                {payments.length}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Payment History */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-[#123c2c]">
            Payment History
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Track payments received from your buyers.
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="rounded-xl border border-gray-100 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Payment Info */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-800">
                      {payment.crop}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                        payment.status === "Paid"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Deal ID: {payment.dealId}
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Buyer: {payment.buyer}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={12} />
                    {payment.location}
                  </p>
                </div>

                {/* Amount */}
                <div className="lg:text-right">
                  <p className="text-lg font-semibold text-[#123c2c]">
                    ₹{payment.amount.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {payment.date}
                  </p>
                </div>

                {/* Action */}
                <button
                  onClick={() => setSelectedPayment(payment)}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#123c2c]">
                  Payment Details
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {selectedPayment.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedPayment(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-[#f6f8f5] p-4">
                <p className="text-xs text-gray-500">Crop</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedPayment.crop}
                </p>
              </div>

              <div className="rounded-xl bg-[#f6f8f5] p-4">
                <p className="text-xs text-gray-500">Buyer</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedPayment.buyer}
                </p>
              </div>

              <div className="rounded-xl bg-[#f6f8f5] p-4">
                <p className="text-xs text-gray-500">Amount</p>
                <p className="mt-1 text-lg font-semibold text-[#123c2c]">
                  ₹{selectedPayment.amount.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                {selectedPayment.status === "Paid" ? (
                  <CheckCircle2 size={18} className="text-green-600" />
                ) : (
                  <Clock3 size={18} className="text-yellow-600" />
                )}

                <span className="text-gray-700">
                  Payment {selectedPayment.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedPayment(null)}
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

export default FarmerPayments;
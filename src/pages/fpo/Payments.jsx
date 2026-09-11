import { useState } from "react";
import {
  Search,
  IndianRupee,
  CheckCircle2,
  Clock,
  Eye,
  Package,
} from "lucide-react";

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const payments = [
    {
      id: "PAY-1001",
      dealId: "MM-1001",
      buyer: "FreshMart Traders",
      crop: "Onion",
      amount: "₹1,40,000",
      status: "Pending",
      date: "10 Sep 2026",
    },
    {
      id: "PAY-1002",
      dealId: "MM-1002",
      buyer: "AgroFresh Foods",
      crop: "Tomato",
      amount: "₹72,000",
      status: "Paid",
      date: "08 Sep 2026",
    },
    {
      id: "PAY-1003",
      dealId: "MM-1003",
      buyer: "Green Basket Pvt. Ltd.",
      crop: "Potato",
      amount: "₹88,000",
      status: "Paid",
      date: "05 Sep 2026",
    },
    {
      id: "PAY-1004",
      dealId: "MM-1004",
      buyer: "Shree Foods",
      crop: "Wheat",
      amount: "₹2,60,000",
      status: "Pending",
      date: "03 Sep 2026",
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    `${payment.id} ${payment.dealId} ${payment.buyer} ${payment.crop}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status) =>
    status === "Paid"
      ? "bg-green-50 text-green-700"
      : "bg-yellow-50 text-yellow-700";

  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">FPO Dashboard</p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Payments
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Track payments received from buyers and monitor pending
          payments for your completed deals.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <IndianRupee size={21} className="text-green-700" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Total Received</p>
              <p className="text-xl font-bold text-gray-900">₹1.6L</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50">
              <Clock size={21} className="text-yellow-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Pending</p>
              <p className="text-xl font-bold text-gray-900">₹4L</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <CheckCircle2 size={21} className="text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Completed</p>
              <p className="text-xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Package size={21} className="text-orange-500" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Transactions</p>
              <p className="text-xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Payment History
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Track all buyer payments linked to your deals
              </p>
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search buyer, crop or payment ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {filteredPayments.length === 0 ? (
          <div className="p-10 text-center">
            <IndianRupee size={32} className="mx-auto text-gray-300" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No payments found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching with a different buyer, crop or payment ID.
            </p>
          </div>
        ) : (
          filteredPayments.map((payment) => (
            <div
              key={payment.id}
              className="border-b border-gray-100 p-5 last:border-b-0 hover:bg-gray-50/70 sm:p-6"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                {/* Payment details */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {payment.buyer}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${getStatusStyle(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400">
                    {payment.id} • Deal {payment.dealId} • {payment.date}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Package size={14} />
                      {payment.crop}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <IndianRupee size={14} />
                      {payment.amount}
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <div className="rounded-xl bg-gray-50 px-5 py-3 xl:min-w-44">
                  <p className="text-[11px] text-gray-400">
                    Payment Amount
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {payment.amount}
                  </p>
                </div>

                {/* Action */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-green-600 hover:text-green-700"
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Payments;
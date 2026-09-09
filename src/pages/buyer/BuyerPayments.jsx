import {
  CheckCircle2,
  Clock3,
  CreditCard,
  IndianRupee,
  MapPin,
} from "lucide-react";

const payments = [
  {
    id: "PAY-1001",
    dealId: "MM-1001",
    crop: "Onion · Grade A",
    farmer: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    amount: 122500,
    date: "08 Sep 2026",
    status: "Pending",
  },
  {
    id: "PAY-1002",
    dealId: "MM-1002",
    crop: "Tomato · Grade A",
    farmer: "Suresh Patil",
    location: "Pune, Maharashtra",
    amount: 66000,
    date: "06 Sep 2026",
    status: "Paid",
  },
  {
    id: "PAY-1003",
    dealId: "MM-1003",
    crop: "Potato · Grade B",
    farmer: "Amit Shinde",
    location: "Ahmednagar, Maharashtra",
    amount: 76000,
    date: "02 Sep 2026",
    status: "Paid",
  },
];

const BuyerPayments = () => {
  const pending = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const paid = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Buyer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Payments
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your purchase payments and transaction history.
        </p>
      </section>

      {/* Summary */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PaymentSummary
          icon={Clock3}
          title="Pending Payments"
          value={pending}
          note="Awaiting payment"
        />

        <PaymentSummary
          icon={CheckCircle2}
          title="Total Paid"
          value={paid}
          note="Completed payments"
        />

        <PaymentSummary
          icon={CreditCard}
          title="Transactions"
          value={payments.length}
          note="Total transactions"
          count
        />
      </section>

      {/* Payment History */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="font-semibold text-[#123c2c]">
            Payment History
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Your recent purchase transactions
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="rounded-xl border border-gray-100 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Payment info */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#197044]">
                      <IndianRupee size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {payment.crop}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Payment ID: {payment.id}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="text-xs text-gray-600">
                      Farmer: {payment.farmer}
                    </p>

                    <p className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={13} />
                      {payment.location}
                    </p>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <p className="text-xs text-gray-500">Amount</p>

                  <p className="mt-1 text-lg font-semibold text-[#123c2c]">
                    ₹{payment.amount.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {payment.date}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      payment.status === "Paid"
                        ? "bg-green-50 text-green-700"
                        : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {payment.status}
                  </span>

                  {payment.status === "Pending" && (
                    <button className="rounded-lg bg-[#123c2c] px-4 py-2 text-xs font-medium text-white hover:bg-[#0d3024]">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const PaymentSummary = ({
  icon: Icon,
  title,
  value,
  note,
  count = false,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-[#eaf4eb] p-3 text-[#197044]">
          <Icon size={20} />
        </div>

        <p className="text-sm text-gray-500">{title}</p>
      </div>

      <h2 className="mt-4 text-2xl font-semibold text-[#123c2c]">
        {count ? value : `₹${value.toLocaleString("en-IN")}`}
      </h2>

      <p className="mt-1 text-xs text-gray-400">{note}</p>
    </div>
  );
};

export default BuyerPayments;
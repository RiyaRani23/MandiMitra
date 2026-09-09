import { useRef, useState } from "react";
import SellProduceForm from "../components/farmer/SellProduceForm";
import BestSellingOption from "../components/farmer/BestSellingOption";

const FarmerDashboard = () => {
  const [sellingStep, setSellingStep] = useState(1);
  const [produceData, setProduceData] = useState(null);
  const sellSectionRef = useRef(null);

  const handleSellProduce = () => {
    sellSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleProduceSubmit = (data) => {
    setProduceData(data);
    setSellingStep(2);

    console.log("Submitted Produce:", data);
  };

  return (
    <div className="px-5 py-4 md:px-7 md:py-5 mt-10">
      {/* Dashboard Header */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 px-6 py-5 text-white shadow-sm md:px-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-green-100">
          Farmer Home
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Welcome back, Ravi! 👋
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-green-50">
              See a clear price, clear costs, and the amount you may receive.
            </p>
          </div>

          {/* Main Sell Button */}
          <button
            type="button"
            onClick={handleSellProduce}
            className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50 sm:w-auto"
          >
            + Sell New Produce
          </button>
        </div>
      </div>

      {/* Your Produce */}
      <section className="mb-7">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Your Produce
          </p>

          <h3 className="text-lg font-bold text-gray-800">Current Produce</h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <p className="text-xs text-gray-500">Produce</p>
              <p className="mt-1 font-semibold text-gray-800">
                500 kg Onion · Grade A
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Market Price</p>
              <p className="mt-1 font-semibold text-gray-800">₹2,300/q</p>
              <p className="text-xs text-gray-500">Nashik · Today</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Buyer Offer</p>
              <p className="mt-1 font-semibold text-green-700">₹2,450/q</p>
              <p className="text-xs text-gray-500">Mumbai Buyer</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-green-50 p-4">
            <p className="text-xs text-gray-500">You May Receive</p>

            <p className="mt-1 text-xl font-bold text-green-700">₹2,270/q</p>

            <p className="mt-1 text-xs text-gray-500">
              After estimated selling costs
            </p>
          </div>
        </div>
      </section>

      {/* Selling Journey */}
      <section className="mb-7">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Selling Journey
          </p>

          <h3 className="text-lg font-bold text-gray-800">
            From Produce to Payment
          </h3>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-3 pb-2">
            {[
              "Your Produce",
              "Best Selling Option",
              "Compare Options",
              "Choose How to Sell",
              "Price Offer",
              "Deal Confirmed",
              "Transportation",
              "Delivery Confirmation",
              "Payment",
              "Sale Complete",
            ].map((step, index) => (
              <div
                key={step}
                className={`rounded-xl border px-4 py-3 ${
                  index === 0
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                  Step {String(index + 1).padStart(2, "0")}
                </p>

                <p
                  className={`mt-1 text-xs font-semibold ${
                    index === 0 ? "text-green-700" : "text-gray-600"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Produce Form */}
      <section ref={sellSectionRef} className="mb-7 scroll-mt-24">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Step 01
          </p>

          <h3 className="text-lg font-bold text-gray-800">Your Produce</h3>

          <p className="text-sm text-gray-500">
            Tell us about your produce to find the best selling option.
          </p>
        </div>

        {sellingStep === 1 && (
          <SellProduceForm onSubmit={handleProduceSubmit} />
        )}

        {sellingStep === 2 && produceData && (
          <BestSellingOption produceData={produceData} />
        )}
      </section>
    </div>
  );
};

export default FarmerDashboard;

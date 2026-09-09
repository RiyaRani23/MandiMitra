import { useState } from "react";

const MarketPriceCard = ({ item, isBest }) => {
  const [showDetails, setShowDetails] = useState(false);

  const min = Number(item.min_price);
  const max = Number(item.max_price);
  const modal = Number(item.modal_price);

  const pricePosition =
    max > min
      ? Math.min(
          96,
          Math.max(4, ((modal - min) / (max - min)) * 100)
        )
      : 50;

  return (
    <>
      {/* ================= CARD ================= */}
      <div
        className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
          isBest
            ? "border-green-200 ring-1 ring-green-100"
            : "border-gray-100"
        }`}
      >
        {/* Best Price Badge */}
        {isBest && (
          <div className="absolute right-4 top-4 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-700">
            Best Price
          </div>
        )}

        {/* Commodity */}
        <div className="mb-5 pr-20">
          <h4 className="text-lg font-bold text-gray-900">
            {item.commodity}
          </h4>

          <p className="mt-1 truncate text-xs text-gray-500">
            📍 {item.market}
          </p>
        </div>

        {/* Modal Price */}
        <div className="mb-5">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Modal Price
          </p>

          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold tracking-tight text-green-700">
              ₹{modal.toLocaleString("en-IN")}
            </span>

            <span className="text-sm font-medium text-gray-400">
              /q
            </span>
          </div>
        </div>

        {/* ================= PRICE RANGE ================= */}
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-medium text-gray-500">
              Today's price range
            </span>

            {item.grade && (
              <span className="text-gray-400">
                {item.grade}
              </span>
            )}
          </div>

          {/* Min → Modal → Max line */}
          <div className="relative h-2 rounded-full bg-gray-100">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-green-500"
              style={{
                width: `${pricePosition}%`,
              }}
            ></div>

            <div
              className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-green-600 shadow"
              style={{
                left: `${pricePosition}%`,
              }}
            ></div>
          </div>

          <div className="mt-2 flex justify-between text-xs">
            <span className="text-gray-500">
              Min ₹{min.toLocaleString("en-IN")}
            </span>

            <span className="font-semibold text-gray-700">
              Max ₹{max.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-gray-400">
              Arrival date
            </p>

            <p className="mt-0.5 text-xs font-semibold text-gray-700">
              {item.arrival_date || "Not available"}
            </p>
          </div>

          {/* Working View Details Button */}
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:bg-green-50 hover:text-green-700"
          >
            View details →
          </button>
        </div>
      </div>

      {/* ================= DETAILS MODAL ================= */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                  Market Details
                </p>

                <h3 className="mt-1 text-2xl font-bold text-gray-900">
                  {item.commodity}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  📍 {item.market}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Main Price */}
            <div className="mt-6 rounded-xl bg-green-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-green-700">
                Modal Price
              </p>

              <p className="mt-1 text-3xl font-extrabold text-green-700">
                ₹{modal.toLocaleString("en-IN")}
                <span className="ml-1 text-sm font-medium text-green-600">
                  /q
                </span>
              </p>
            </div>

            {/* Price Details */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Minimum
                </p>
                <p className="mt-1 font-bold text-gray-800">
                  ₹{min.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Modal
                </p>
                <p className="mt-1 font-bold text-green-700">
                  ₹{modal.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Maximum
                </p>
                <p className="mt-1 font-bold text-gray-800">
                  ₹{max.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Other Details */}
            <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">District</span>
                <span className="font-semibold text-gray-800">
                  {item.district || "Not available"}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Variety</span>
                <span className="max-w-[220px] text-right font-semibold text-gray-800">
                  {item.variety || "Not available"}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Grade</span>
                <span className="font-semibold text-gray-800">
                  {item.grade || "Not available"}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Arrival Date</span>
                <span className="font-semibold text-gray-800">
                  {item.arrival_date || "Not available"}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className="mt-6 w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MarketPriceCard;
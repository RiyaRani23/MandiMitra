import { useState } from "react";
import { ArrowUpRight, X, TrendingUp, Calendar, MapPin, Layers } from "lucide-react";

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
        className={`group relative overflow-hidden rounded-3xl border bg-white/90 backdrop-blur-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isBest
            ? "border-emerald-300/80 ring-2 ring-emerald-500/10"
            : "border-black/5"
        }`}
      >
        {/* Best Price Badge */}
        {isBest && (
          <div className="absolute right-5 top-5 rounded-full bg-emerald-100/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/50 shadow-2xs">
            ⭐ Best Price
          </div>
        )}

        {/* Commodity */}
        <div className="mb-6 pr-16 space-y-1">
          <h4 className="text-lg font-extrabold tracking-tight text-gray-900">
            {item.commodity}
          </h4>

          <p className="flex items-center gap-1 text-xs font-medium text-gray-500 truncate">
            <MapPin size={13} className="text-emerald-600 shrink-0" />
            <span>{item.market}</span>
          </p>
        </div>

        {/* Modal Price */}
        <div className="mb-6 space-y-0.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Modal Price
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold tracking-tight text-emerald-800">
              ₹{modal.toLocaleString("en-IN")}
            </span>

            <span className="text-xs font-semibold text-gray-400">
              /q
            </span>
          </div>
        </div>

        {/* ================= PRICE RANGE ================= */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-500">
              Today's price range
            </span>

            {item.grade && (
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold text-gray-600 uppercase">
                {item.grade}
              </span>
            )}
          </div>

          {/* Min → Modal → Max line */}
          <div className="relative h-2 rounded-full bg-gray-100">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-emerald-500 transition-all duration-500"
              style={{
                width: `${pricePosition}%`,
              }}
            ></div>

            <div
              className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-600 shadow-md transition-all duration-500"
              style={{
                left: `${pricePosition}%`,
              }}
            ></div>
          </div>

          <div className="flex justify-between text-xs font-medium pt-1">
            <span className="text-gray-400">
              Min ₹{min.toLocaleString("en-IN")}
            </span>

            <span className="font-bold text-gray-700">
              Max ₹{max.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Arrival date
            </p>

            <p className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <Calendar size={12} className="text-gray-400" />
              {item.arrival_date || "Not available"}
            </p>
          </div>

          {/* Working View Details Button */}
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="group/btn inline-flex items-center gap-1 rounded-2xl bg-[#f8faf8] border border-gray-100 px-4 py-2.5 text-xs font-bold text-gray-700 transition-all hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800 active:scale-95 shadow-2xs"
          >
            <span>View details</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* ================= DETAILS MODAL ================= */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-black/5 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Market Details
                </span>

                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 pt-1">
                  {item.commodity}
                </h3>

                <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  <MapPin size={13} className="text-emerald-600" />
                  {item.market}
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
            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-5 space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Modal Price
              </p>

              <p className="text-3xl font-extrabold tracking-tight text-emerald-800">
                ₹{modal.toLocaleString("en-IN")}
                <span className="ml-1 text-sm font-semibold text-emerald-600">
                  /q
                </span>
              </p>
            </div>

            {/* Price Details */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-3 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Minimum
                </p>
                <p className="text-sm font-bold text-gray-800">
                  ₹{min.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-3 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Modal
                </p>
                <p className="text-sm font-extrabold text-emerald-800">
                  ₹{modal.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-3 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Maximum
                </p>
                <p className="text-sm font-bold text-gray-800">
                  ₹{max.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Other Details */}
            <div className="space-y-3.5 border-t border-gray-100 pt-5 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">District</span>
                <span className="font-bold text-gray-800">
                  {item.district || "Not available"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Variety</span>
                <span className="max-w-[200px] text-right font-bold text-gray-800 truncate">
                  {item.variety || "Not available"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Grade</span>
                <span className="font-bold text-gray-800">
                  {item.grade || "Not available"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Arrival Date</span>
                <span className="font-bold text-gray-800">
                  {item.arrival_date || "Not available"}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className="w-full rounded-2xl bg-emerald-700 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-emerald-800 shadow-sm"
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
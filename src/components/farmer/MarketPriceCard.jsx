const MarketPriceCard = ({ item, isBest }) => {
  const min = Number(item.min_price);
  const max = Number(item.max_price);
  const modal = Number(item.modal_price);

  const pricePosition =
    max > min
      ? Math.min(
          96,
          Math.max(
            4,
            ((modal - min) / (max - min)) * 100,
          ),
        )
      : 50;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isBest
          ? "border-green-200 ring-1 ring-green-100"
          : "border-gray-100"
      }`}
    >
      {/* Best Badge */}
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

      {/* Price Range */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-gray-500">
            Today's price range
          </span>

          <span className="text-gray-400">
            {item.grade}
          </span>
        </div>

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
            {item.arrival_date}
          </p>
        </div>

        <button className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600 transition group-hover:bg-green-50 group-hover:text-green-700">
          View details →
        </button>
      </div>
    </div>
  );
};

export default MarketPriceCard;
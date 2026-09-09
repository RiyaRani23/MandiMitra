const MarketExplorer = ({
  searchTerm,
  marketPrices,
  selectedDistrict,
  onClose,
}) => {
  const otherMarkets = marketPrices
    .filter(
      (item) =>
        item.commodity
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (!selectedDistrict || item.district !== selectedDistrict),
    )
    .sort(
      (a, b) =>
        Number(b.modal_price || 0) - Number(a.modal_price || 0),
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">
              Explore Markets
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              {searchTerm} — Other Markets
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Markets where this crop is currently available.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Markets */}
        <div className="max-h-[60vh] overflow-y-auto p-5">
          {otherMarkets.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-200 p-8 text-center">
              <div className="text-3xl">📍</div>

              <p className="mt-3 font-semibold text-gray-800">
                No other markets found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                We couldn't find {searchTerm} in the currently available
                market data.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {otherMarkets.map((item, index) => (
                <div
                  key={`${item.market}-${item.district}-${index}`}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:border-green-200 hover:bg-green-50"
                >
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.market}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.district}, {item.state}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-green-700">
                      ₹
                      {Number(item.modal_price).toLocaleString("en-IN")}
                    </p>

                    <p className="text-xs text-gray-400">
                      / quintal
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketExplorer;
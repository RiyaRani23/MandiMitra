import { useEffect, useState } from "react";
import { fetchMandiPrices } from "../../services/mandiApi";
import { getLocationCoordinates } from "../../services/locationApi";

const BestSellingOption = ({ produceData }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const findBestSellingOption = async () => {
      try {
        setLoading(true);
        setError("");

        // 1. Convert farmer's location into coordinates
        //    and identify district + state
        const location = await getLocationCoordinates(
          produceData.location
        );

        console.log("Farmer location:", location);

        setLocationInfo(location);

        // 2. Fetch mandi prices for the farmer's district
        const mandiData = await fetchMandiPrices({
          state: location.state,
          district: location.district,
          commodity: produceData.crop,
          limit: 100,
        });

        console.log("Mandi prices:", mandiData);

        // 3. Store mandi records
        setPrices(mandiData.records || []);
      } catch (err) {
        console.error("Market search failed:", err);

        setError(
          err.message || "Unable to find mandi prices."
        );
      } finally {
        setLoading(false);
      }
    };

    if (produceData?.location) {
      findBestSellingOption();
    }
  }, [produceData]);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
      {/* -------------------------------- */}
      {/* STEP HEADER */}
      {/* -------------------------------- */}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          Step 02
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-900">
          Best Selling Option
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Finding the best mandi option for your produce.
        </p>
      </div>

      {/* -------------------------------- */}
      {/* YOUR PRODUCE */}
      {/* -------------------------------- */}

      <div className="mt-6 rounded-2xl bg-green-50 p-5">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌾</span>

          <p className="text-sm font-bold text-green-800">
            Your Produce
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs text-green-600">Crop</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {produceData.crop}
            </p>
          </div>

          <div>
            <p className="text-xs text-green-600">Quantity</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {produceData.quantity} kg
            </p>
          </div>

          <div>
            <p className="text-xs text-green-600">Quality</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {produceData.quality}
            </p>
          </div>

          <div>
            <p className="text-xs text-green-600">Location</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {produceData.location}
            </p>
          </div>

          <div>
            <p className="text-xs text-green-600">Selling</p>
            <p className="mt-1 text-sm font-semibold capitalize text-gray-800">
              {produceData.sellTime?.replaceAll("-", " ")}
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------- */}
      {/* LOCATION */}
      {/* -------------------------------- */}

      {locationInfo && (
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
            📍
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">
              Market Area
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-800">
              {locationInfo.district
                ? `${locationInfo.district}, ${locationInfo.state}`
                : locationInfo.displayName}
            </p>
          </div>
        </div>
      )}

      {/* -------------------------------- */}
      {/* LOADING */}
      {/* -------------------------------- */}

      {loading && (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl animate-spin">
              ⏳
            </span>

            <p className="mt-3 text-sm font-medium text-gray-700">
              Finding mandi prices...
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Checking available markets in your area.
            </p>
          </div>
        </div>
      )}

      {/* -------------------------------- */}
      {/* ERROR */}
      {/* -------------------------------- */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">⚠️</span>

            <div>
              <p className="text-sm font-semibold text-red-700">
                Unable to find mandi prices
              </p>

              <p className="mt-1 text-sm text-red-600">
                {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------- */}
      {/* MANDI PRICES */}
      {/* -------------------------------- */}

      {!loading && !error && prices.length > 0 && (
        <div className="mt-7">
          {/* SECTION HEADER */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Available Mandi Options
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Current {produceData.crop} prices in your district.
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {prices.length}{" "}
              {prices.length === 1 ? "market" : "markets"} found
            </span>
          </div>

          {/* MARKET CARDS */}
          <div className="mt-4 space-y-4">
            {prices.map((item, index) => {
              const modalPrice = Number(item.modal_price);
              const quantity = Number(produceData.quantity);

              const estimatedValue =
                !isNaN(modalPrice) && !isNaN(quantity)
                  ? modalPrice * (quantity / 100)
                  : null;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-green-300 hover:shadow-md"
                >
                  {/* MARKET HEADER */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl">
                        🏪
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-gray-900">
                          {item.market || "APMC"}
                        </h4>

                        <p className="mt-1 text-xs text-gray-500">
                          {locationInfo?.district ||
                            produceData.location}
                          {locationInfo?.state
                            ? `, ${locationInfo.state}`
                            : ""}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Available
                    </span>
                  </div>

                  {/* MAIN PRICE */}
                  <div className="mt-5 rounded-xl bg-green-50 p-4">
                    <p className="text-xs font-medium text-green-700">
                      Current mandi price
                    </p>

                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-3xl font-bold text-green-800">
                        ₹
                        {item.modal_price
                          ? Number(
                              item.modal_price
                            ).toLocaleString("en-IN")
                          : "—"}
                      </span>

                      <span className="mb-1 text-xs text-green-700">
                        / quintal
                      </span>
                    </div>
                  </div>

                  {/* PRICE SUMMARY */}
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {/* MINIMUM */}
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-[11px] font-medium text-gray-500">
                        Minimum
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-800">
                        {item.min_price
                          ? `₹${Number(
                              item.min_price
                            ).toLocaleString("en-IN")}`
                          : "—"}
                      </p>
                    </div>

                    {/* MAXIMUM */}
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-[11px] font-medium text-gray-500">
                        Maximum
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-800">
                        {item.max_price
                          ? `₹${Number(
                              item.max_price
                            ).toLocaleString("en-IN")}`
                          : "—"}
                      </p>
                    </div>

                    {/* ESTIMATED VALUE */}
                    <div className="rounded-xl bg-green-50 p-3">
                      <p className="text-[11px] font-medium text-green-600">
                        Your estimated value
                      </p>

                      <p className="mt-1 text-sm font-bold text-green-700">
                        {estimatedValue
                          ? `₹${estimatedValue.toLocaleString(
                              "en-IN",
                              {
                                maximumFractionDigits: 0,
                              }
                            )}`
                          : "—"}
                      </p>
                    </div>
                  </div>

                  {/* PRODUCE DETAILS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      🌾 {produceData.crop}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {produceData.quality}
                    </span>

                    {item.variety && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        Variety: {item.variety}
                      </span>
                    )}
                  </div>

                  {/* ACTION */}
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <button
                      type="button"
                      className="w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                    >
                      View Market Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* -------------------------------- */}
      {/* NO PRICES */}
      {/* -------------------------------- */}

      {!loading && !error && prices.length === 0 && (
        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">🔍</span>

            <div>
              <p className="text-sm font-semibold text-yellow-800">
                No mandi prices found
              </p>

              <p className="mt-1 text-sm text-yellow-700">
                We couldn't find {produceData.crop} prices in{" "}
                {locationInfo?.district ||
                  produceData.location}.
              </p>

              <p className="mt-2 text-xs text-yellow-600">
                Try another crop or location.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestSellingOption;

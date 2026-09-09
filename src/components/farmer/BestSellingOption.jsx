import { useEffect, useState } from "react";
import { fetchMandiPrices } from "../../services/mandiApi";

const BestSellingOption = ({ produceData }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPrices = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchMandiPrices({
          market: produceData.location,
          commodity: produceData.crop,
          limit: 50,
        });

        setPrices(data.records || []);
      } catch (err) {
        console.error("Failed to fetch mandi prices:", err);
        setError("Unable to fetch mandi prices. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getPrices();
  }, [produceData]);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
        Step 02
      </p>

      <h2 className="mt-1 text-xl font-bold text-gray-900">
        Best Selling Option
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        We are checking current mandi prices for your produce.
      </p>

      {/* Farmer's Produce */}
      <div className="mt-6 rounded-xl bg-green-50 p-4">
        <p className="text-sm font-semibold text-green-700">
          Your Produce
        </p>

        <div className="mt-3 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <p>
            <span className="font-medium">Crop:</span>{" "}
            {produceData.crop}
          </p>

          <p>
            <span className="font-medium">Quantity:</span>{" "}
            {produceData.quantity} kg
          </p>

          <p>
            <span className="font-medium">Quality:</span>{" "}
            {produceData.quality}
          </p>

          <p>
            <span className="font-medium">Location:</span>{" "}
            {produceData.location}
          </p>

          <p>
            <span className="font-medium">Selling:</span>{" "}
            {produceData.sellTime}
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-6 rounded-xl border border-gray-200 p-5 text-center">
          <p className="text-sm text-gray-600">
            🔄 Checking current mandi prices...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Results */}
      {!loading && !error && prices.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800">
            Available Mandi Prices
          </h3>

          <div className="mt-4 space-y-3">
            {prices.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.market}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item.district}, {item.state}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500">
                      Modal Price
                    </p>

                    <p className="text-lg font-bold text-green-700">
                      ₹{item.modal_price}/q
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {!loading && !error && prices.length === 0 && (
        <div className="mt-6 rounded-xl bg-yellow-50 p-4">
          <p className="text-sm font-medium text-yellow-800">
            No matching mandi prices found.
          </p>

          <p className="mt-1 text-xs text-yellow-700">
            Try checking the crop name and location.
          </p>
        </div>
      )}
    </section>
  );
};

export default BestSellingOption;
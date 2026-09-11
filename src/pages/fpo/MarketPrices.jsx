import MarketPriceSection from "../../components/market/MarketPriceSection";

const MarketPrices = () => {
  return (
    <div className="px-5 py-4 md:px-7 md:py-5">
      <div className="mb-5">
        <p className="text-sm font-medium text-green-600">
          FPO Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Market Prices
        </h1>

        <p className="mt-2 text-gray-500">
          Track today's mandi prices and find the best markets for your
          aggregated produce.
        </p>
      </div>

      <MarketPriceSection />
    </div>
  );
};

export default MarketPrices;
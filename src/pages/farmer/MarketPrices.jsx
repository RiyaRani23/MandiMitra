import MarketPriceSection from "../../components/farmer/MarketPriceSection";

const MarketPrices = () => {
  return (
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <p className="text-sm font-medium text-green-600">
            Farmer Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Market Prices
          </h1>

          <p className="mt-2 text-gray-500">
            Compare today's mandi prices and find the best market for your
            crop.
          </p>
        </div>

        <MarketPriceSection />
      </div>
  );
};

export default MarketPrices;


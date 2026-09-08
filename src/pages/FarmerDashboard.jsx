import MarketPriceSection from "../components/farmer/MarketPriceSection";

const FarmerDashboard = () => {
  return (
      <div className="px-5 py-4 md:px-7 md:py-5">
        {/* Dashboard Header */}
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 px-6 py-5 text-white shadow-sm md:px-7">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-green-100">
            Farmer Dashboard
          </p>

          <h2 className="text-2xl font-bold md:text-3xl">
            Welcome back, Ravi! 👋
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-green-50">
            Check today's market prices, compare mandis, and find the best
            buyers for your produce.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs">
              📊 Live Market Prices
            </span>

            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs">
              🛒 Find Buyers
            </span>
          </div>
        </div>

        {/* Market Prices */}
        <MarketPriceSection />
      </div>
  );
};

export default FarmerDashboard;


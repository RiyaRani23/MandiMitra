import FarmerSidebar from "../components/farmer/FarmerSidebar";
import FarmerNavbar from "../components/farmer/FarmerNavbar";
import MarketPriceSection from "../components/farmer/MarketPriceSection";

const FarmerDashboard = () => {
  // ============================================================
  // MANDI MARKET DATA
  // ============================================================
  // CURRENT PROTOTYPE:
  // Fetching real mandi prices from data.gov.in.
  //
  // FUTURE BACKEND:
  // This data will come from our Spring Boot backend instead.
  // The UI below should not need major changes.
  // ============================================================

  return (
    <div className="min-h-screen bg-gray-50">

      <FarmerNavbar />
      

      {/* Sidebar */}
      <FarmerSidebar />
      

      {/* Main Content */}
      <main className="pt-16 md:ml-64">
        <div className="p-6 md:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <p className="mb-1 text-sm font-medium text-green-600">
              Farmer Dashboard
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back, Ravi! 👋
            </h2>

            <p className="mt-2 text-gray-500">
              Check today's market prices and find the best buyers for your
              produce.
            </p>
          </div>

          <MarketPriceSection />

          {/* Existing Empty Dashboard Area */}
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="mb-4 text-5xl">🌾</div>

            <h3 className="text-xl font-semibold text-gray-800">
              Your farming dashboard
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Market prices, buyer recommendations, deals and payments will
              appear here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmerDashboard;

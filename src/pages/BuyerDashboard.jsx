import { useState } from "react";
import BuyerSidebar from "../components/buyer/BuyerSidebar";
import BuyerNavbar from "../components/buyer/BuyerNavbar";

function BuyerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8f5]">
      
      <BuyerSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-[250px]">
        <BuyerNavbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="p-5 sm:p-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#123c2c]">
              Welcome to MandiMitra
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your buyer dashboard is ready.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BuyerDashboard;
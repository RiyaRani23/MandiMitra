import { useState } from "react";
import { Outlet } from "react-router-dom";

import BuyerSidebar from "./BuyerSidebar";
import BuyerNavbar from "./BuyerNavbar";

function BuyerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8f5]">
      <BuyerSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-[250px]">
        <BuyerNavbar onMenuClick={() => setSidebarOpen(true)} />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default BuyerLayout;
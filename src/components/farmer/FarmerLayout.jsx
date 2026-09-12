import { useState } from "react";
import { Outlet } from "react-router-dom";

import FarmerSidebar from "./FarmerSidebar";
import FarmerNavbar from "./FarmerNavbar";

const FarmerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <FarmerNavbar
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <FarmerSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="pt-16 lg:ml-[250px]">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FarmerLayout;
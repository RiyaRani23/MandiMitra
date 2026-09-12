import { useState } from "react";
import { Outlet } from "react-router-dom";
import FPOSidebar from "./FPOSidebar";
import FPONavbar from "./FPONavbar";

const FPOLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f8f5]">
      <FPOSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />

      {/* Everything beside the sidebar */}
      <div className="min-h-screen lg:ml-64">
        <FPONavbar onMenuClick={handleMenuClick} />

        <main className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FPOLayout;
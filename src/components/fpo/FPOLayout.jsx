import { Outlet } from "react-router-dom";
import FPOSidebar from "./FPOSidebar";
import FPONavbar from "./FPONavbar";

const FPOLayout = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f5]">
      <FPOSidebar />

      {/* Everything beside the sidebar */}
      <div className="ml-64 min-h-screen">
        <FPONavbar />

        <main className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FPOLayout;
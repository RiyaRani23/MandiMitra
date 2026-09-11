import { Outlet } from "react-router-dom";
import FPOSidebar from "./FPOSidebar";
import FPONavbar from "./FPONavbar";

function FPOLayout() {
  return (
    <div className="flex min-h-screen bg-[#f6f8f5]">
      <FPOSidebar />

      <div className="flex flex-1 flex-col">
        <FPONavbar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default FPOLayout;
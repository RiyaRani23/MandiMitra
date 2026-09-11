import { Outlet } from "react-router-dom";
import FarmerSidebar from "./FarmerSidebar";
import FarmerNavbar from "./FarmerNavbar";

const FarmerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FarmerNavbar />
      <FarmerSidebar />

      <div className="pt-15 md:ml-64">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FarmerLayout;
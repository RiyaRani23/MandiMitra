import { Outlet } from "react-router-dom";
import FarmerSidebar from "./FarmerSidebar";
import FarmerNavbar from "./FarmerNavbar";

const FarmerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FarmerNavbar />
      <FarmerSidebar />

      <main className="pt-4 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default FarmerLayout;
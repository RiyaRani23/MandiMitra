import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import FarmerRegister from "./pages/register/FarmerRegister";
import BuyerRegister from "./pages/register/BuyerRegister";
import FPORegister from "./pages/register/FPORegister";
import VerificationPending from "./pages/register/VerificationPending";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import FPODashboard from "./pages/FPODashboard";
import OTPVerification from "./pages/OTPVerification";

<<<<<<< HEAD
function AppContent() {
  const location = useLocation();

  // Pages where the main Navbar should NOT appear
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/register/") ||
    location.pathname === "/otp-verification" ||
    location.pathname === "/verification-pending";

=======
import FarmerLayout from "./components/farmer/FarmerLayout";
import MarketPrices from "./pages/farmer/MarketPrices";

function App() {
>>>>>>> ce6934b50b4e05b10342b6227d27d1301c610419
  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/farmer" element={<FarmerRegister />} />
        <Route path="/register/buyer" element={<BuyerRegister />} />
        <Route path="/register/fpo" element={<FPORegister />} />
<<<<<<< HEAD
        <Route
          path="/verification-pending"
          element={<VerificationPending />}
        />
        <Route path="/otp-verification" element={<OTPVerification />} />

        {/* Dashboards */}
        <Route path="/farmer" element={<FarmerDashboard />} />
=======
        <Route path="/verification-pending" element={<VerificationPending />} />
        // Farmer Routes
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="market-prices" element={<MarketPrices />} />
          <Route path="find-buyers" element={<FarmerDashboard />} />
          <Route path="fpos" element={<FarmerDashboard />} />
          <Route path="my-deals" element={<FarmerDashboard />} />
          <Route path="payments" element={<FarmerDashboard />} />
        </Route>
>>>>>>> ce6934b50b4e05b10342b6227d27d1301c610419
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/fpo" element={<FPODashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
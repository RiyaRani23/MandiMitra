import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/register/Register";
import FarmerRegister from "./pages/register/FarmerRegister";
import BuyerRegister from "./pages/register/BuyerRegister";
import FPORegister from "./pages/register/FPORegister";

import VerificationPending from "./pages/register/VerificationPending";
import OTPVerification from "./pages/OTPVerification";

import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import FPODashboard from "./pages/FPODashboard";

// Farmer
import FarmerLayout from "./components/farmer/FarmerLayout";
import MarketPrices from "./pages/farmer/MarketPrices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/register/farmer" element={<FarmerRegister />} />
        <Route path="/register/buyer" element={<BuyerRegister />} />
        <Route path="/register/fpo" element={<FPORegister />} />

        <Route
          path="/verification-pending"
          element={<VerificationPending />}
        />

        <Route
          path="/otp-verification"
          element={<OTPVerification />}
        />

        {/* Farmer Routes */}
        <Route path="/farmer" element={<FarmerLayout />}>
          {/* /farmer */}
          <Route index element={<FarmerDashboard />} />

          {/* /farmer/market-prices */}
          <Route path="market-prices" element={<MarketPrices />} />

          {/* Temporary placeholder pages */}
          <Route path="find-buyers" element={<FarmerDashboard />} />
          <Route path="fpos" element={<FarmerDashboard />} />
          <Route path="my-deals" element={<FarmerDashboard />} />
          <Route path="payments" element={<FarmerDashboard />} />
        </Route>

        {/* Buyer */}
        <Route path="/buyer" element={<BuyerDashboard />} />

        {/* FPO */}
        <Route path="/fpo" element={<FPODashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
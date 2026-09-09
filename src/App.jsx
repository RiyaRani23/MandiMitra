import { BrowserRouter, Routes, Route } from "react-router-dom";

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

// Farmer section
import FarmerLayout from "./components/farmer/FarmerLayout";
import MarketPrices from "./pages/farmer/MarketPrices";

import BuyerLayout from "./components/buyer/BuyerLayout";
import BuyerMarketPrices from "./pages/buyer/BuyerMarketPrices";
import BuyerRequirements from "./pages/buyer/BuyerRequirements";

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

        <Route path="/verification-pending" element={<VerificationPending />} />

        <Route path="/otp-verification" element={<OTPVerification />} />

        {/* Farmer */}
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="market-prices" element={<MarketPrices />} />

          <Route path="find-buyers" element={<FarmerDashboard />} />
          <Route path="fpos" element={<FarmerDashboard />} />
          <Route path="my-deals" element={<FarmerDashboard />} />
          <Route path="payments" element={<FarmerDashboard />} />
        </Route>

        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<BuyerDashboard />} />
          <Route path="market-prices" element={<BuyerMarketPrices />} />
          <Route path="requirements" element={<BuyerRequirements />} />
        </Route>

        {/* FPO */}
        <Route path="/fpo" element={<FPODashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

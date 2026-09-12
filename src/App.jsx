import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import SellProduce from "./pages/farmer/SellProduce";
import FindBuyers from "./pages/farmer/FindBuyers";
import FarmerPayments from "./pages/farmer/FarmerPayments";
import FPOs from "./pages/farmer/FPOs";
import FarmerDeals from "./pages/farmer/FarmerDeals";
import FarmerProfile from "./pages/farmer/FarmerProfile";
import FarmerSettings from "./pages/farmer/FarmerSettings";

// Buyer
import BuyerLayout from "./components/buyer/BuyerLayout";
import BuyerMarketPrices from "./pages/buyer/BuyerMarketPrices";
import BuyerRequirements from "./pages/buyer/BuyerRequirements";
import FindFarmers from "./pages/buyer/FindFarmers";
import BuyerOffers from "./pages/buyer/BuyerOffers";
import BuyerDeals from "./pages/buyer/BuyerDeals";
import BuyerPayments from "./pages/buyer/BuyerPayments";

// FPO
import FPOLayout from "./components/fpo/FPOLayout";
import FPOMarketPrices from "./pages/fpo/MarketPrices";
import ApprovedFarmers from "./pages/fpo/ApprovedFarmers";
import Inventory from "./pages/fpo/Inventory";
import FPOBuyerRequirements from "./pages/fpo/BuyerRequirements";
import FPODeals from "./pages/fpo/Deals";
import FPOPayments from "./pages/fpo/Payments";
import AddFarmer from "./pages/fpo/AddFarmer";
import FPOProfile from "./pages/fpo/Profile";
import BuyerProfile from "./pages/buyer/BuyerProfile";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VerificationPage from "./pages/admin/VerificationPage";
import UsersPage from "./pages/admin/UsersPage";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "./components/admin/AdminLayout";

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

        {/* ================= FARMER ================= */}
        <Route path="/farmer" element={<FarmerLayout />}>
          {/* /farmer */}
          <Route index element={<FarmerDashboard />} />

          {/* /farmer/market-prices */}
          <Route path="market-prices" element={<MarketPrices />} />

          {/* /farmer/sell-produce */}
          <Route path="sell-produce" element={<SellProduce />} />

          {/* /farmer/find-buyers */}
          <Route path="find-buyers" element={<FindBuyers />} />

          {/* /farmer/fpos */}
          <Route path="fpos" element={<FPOs />} />

          {/* /farmer/my-deals */}
          <Route path="my-deals" element={<FarmerDeals />} />

          {/* /farmer/payments */}
          <Route path="payments" element={<FarmerPayments />} />
          <Route path="profile" element={<FarmerProfile />} />
          <Route path="settings" element={<FarmerSettings />} />
        </Route>

        {/* ================= BUYER ================= */}
        <Route path="/buyer" element={<BuyerLayout />}>
          {/* /buyer */}
          <Route index element={<BuyerDashboard />} />

          {/* /buyer/market-prices */}
          <Route path="market-prices" element={<BuyerMarketPrices />} />

          {/* /buyer/requirements */}
          <Route path="requirements" element={<BuyerRequirements />} />

          {/* /buyer/find-farmers */}
          <Route path="find-farmers" element={<FindFarmers />} />

          {/* /buyer/offers */}
          <Route path="offers" element={<BuyerOffers />} />

          {/* /buyer/deals */}
          <Route path="deals" element={<BuyerDeals />} />

          {/* /buyer/payments */}
          <Route path="payments" element={<BuyerPayments />} />
          <Route path="profile" element={<BuyerProfile />} />
        </Route>

        {/* ================= FPO ================= */}
        <Route path="/fpo" element={<FPOLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FPODashboard />} />
          <Route path="market-prices" element={<FPOMarketPrices />} />
          <Route path="approved-farmers" element={<ApprovedFarmers />} />
          <Route path="add-farmer" element={<AddFarmer />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="buyer-requirements" element={<FPOBuyerRequirements />} />
          <Route path="deals" element={<FPODeals />} />
          <Route path="payments" element={<FPOPayments />} />
          <Route path="profile" element={<FPOProfile />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="verification" element={<VerificationPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

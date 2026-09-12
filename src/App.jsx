import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ================= COMMON PAGES =================
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import FarmerRegister from "./pages/register/FarmerRegister";
import BuyerRegister from "./pages/register/BuyerRegister";
import FPORegister from "./pages/register/FPORegister";
import VerificationPending from "./pages/register/VerificationPending";
import OTPVerification from "./pages/OTPVerification";
import PublicMarketPrices from "./pages/PublicMarketPrices";
// ================= FARMER =================
import FarmerLayout from "./components/farmer/FarmerLayout";
import FarmerDashboard from "./pages/FarmerDashboard";
import MarketPrices from "./pages/farmer/MarketPrices";
import SellProduce from "./pages/farmer/SellProduce";
import FindBuyers from "./pages/farmer/FindBuyers";
import FarmerPayments from "./pages/farmer/FarmerPayments";
import FPOs from "./pages/farmer/FPOs";
import FarmerDeals from "./pages/farmer/FarmerDeals";
import FarmerProfile from "./pages/farmer/FarmerProfile";
import FarmerSettings from "./pages/farmer/FarmerSettings";

// ================= BUYER =================
import BuyerLayout from "./components/buyer/BuyerLayout";
import BuyerDashboard from "./pages/BuyerDashboard";
import BuyerMarketPrices from "./pages/buyer/BuyerMarketPrices";
import BuyerRequirements from "./pages/buyer/BuyerRequirements";
import FindFarmers from "./pages/buyer/FindFarmers";
import BuyerOffers from "./pages/buyer/BuyerOffers";
import BuyerDeals from "./pages/buyer/BuyerDeals";
import BuyerPayments from "./pages/buyer/BuyerPayments";
import BuyerProfile from "./pages/buyer/BuyerProfile";

// ================= FPO =================
import FPOLayout from "./components/fpo/FPOLayout";
import FPODashboard from "./pages/FPODashboard";
import FPOMarketPrices from "./pages/fpo/MarketPrices";
import ApprovedFarmers from "./pages/fpo/ApprovedFarmers";
import Inventory from "./pages/fpo/Inventory";
import FPOBuyerRequirements from "./pages/fpo/BuyerRequirements";
import FPODeals from "./pages/fpo/Deals";
import FPOPayments from "./pages/fpo/Payments";
import AddFarmer from "./pages/fpo/AddFarmer";
import FPOProfile from "./pages/fpo/Profile";

// ================= ADMIN =================
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VerificationPage from "./pages/admin/VerificationPage";
import UsersPage from "./pages/admin/UsersPage";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "./components/admin/AdminLayout";

// ================= PROTECTED ROUTE =================
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/market-prices" element={<PublicMarketPrices />} />
        {/* ================= AUTHENTICATION ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/farmer" element={<FarmerRegister />} />
        <Route path="/register/buyer" element={<BuyerRegister />} />
        <Route path="/register/fpo" element={<FPORegister />} />
        <Route path="/verification-pending" element={<VerificationPending />} />
        <Route path="/otp-verification" element={<OTPVerification />} />

        {/* ================= FARMER ================= */}
        <Route element={<ProtectedRoute allowedRole="farmer" />}>
          <Route path="/farmer" element={<FarmerLayout />}>
            <Route index element={<FarmerDashboard />} />
            <Route path="market-prices" element={<MarketPrices />} />
            <Route path="sell-produce" element={<SellProduce />} />
            <Route path="find-buyers" element={<FindBuyers />} />
            <Route path="fpos" element={<FPOs />} />
            <Route path="my-deals" element={<FarmerDeals />} />
            <Route path="payments" element={<FarmerPayments />} />
            <Route path="profile" element={<FarmerProfile />} />
            <Route path="settings" element={<FarmerSettings />} />
          </Route>
        </Route>

        {/* ================= BUYER ================= */}
        <Route element={<ProtectedRoute allowedRole="buyer" />}>
          <Route path="/buyer" element={<BuyerLayout />}>
            <Route index element={<BuyerDashboard />} />
            <Route path="market-prices" element={<BuyerMarketPrices />} />
            <Route path="requirements" element={<BuyerRequirements />} />
            <Route path="find-farmers" element={<FindFarmers />} />
            <Route path="offers" element={<BuyerOffers />} />
            <Route path="deals" element={<BuyerDeals />} />
            <Route path="payments" element={<BuyerPayments />} />
            <Route path="profile" element={<BuyerProfile />} />
          </Route>
        </Route>

        {/* ================= FPO ================= */}
        <Route element={<ProtectedRoute allowedRole="fpo" />}>
          <Route path="/fpo" element={<FPOLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<FPODashboard />} />

            <Route path="market-prices" element={<FPOMarketPrices />} />

            <Route path="approved-farmers" element={<ApprovedFarmers />} />

            <Route path="add-farmer" element={<AddFarmer />} />

            <Route path="inventory" element={<Inventory />} />

            <Route
              path="buyer-requirements"
              element={<FPOBuyerRequirements />}
            />

            <Route path="deals" element={<FPODeals />} />

            <Route path="payments" element={<FPOPayments />} />

            <Route path="profile" element={<FPOProfile />} />
          </Route>
        </Route>

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />

            <Route path="verification" element={<VerificationPage />} />

            <Route path="users" element={<UsersPage />} />

            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

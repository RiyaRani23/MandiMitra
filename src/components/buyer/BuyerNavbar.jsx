import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  User,
  LogOut,
  ChevronDown,
  Menu,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

function BuyerNavbar({ onMenuClick }) {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // FUTURE BACKEND:
    // Clear authentication/session data here

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <Link
          to="/buyer/dashboard"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="MandiMitra Logo"
            className="h-10 w-10 rounded-lg object-contain"
          />

          <div>
            <h1 className="text-lg font-bold">
              <span className="text-green-700">Mandi</span>
              <span className="text-orange-500">Mitra</span>
            </h1>

            <p className="text-xs text-gray-500">
              Buyer Portal
            </p>
          </div>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          type="button"
          className="hidden rounded-full p-2.5 text-gray-500 hover:bg-gray-100 sm:block"
        >
          <Search size={19} />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-full p-2.5 text-gray-500 hover:bg-gray-100"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#f7941d]" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-50"
          >
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold text-gray-800">
                Buyer
              </p>

              <p className="text-[10px] text-gray-500">
                Buyer Account
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4eb] font-semibold text-[#197044]">
              B
            </div>

            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform ${
                showProfile ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              <Link
                to="/buyer/profile"
                onClick={() => setShowProfile(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
              >
                <User size={17} />
                <span>My Profile</span>
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={17} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default BuyerNavbar;
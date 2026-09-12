import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  User,
  LogOut,
  Menu,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const FarmerNavbar = ({ onMenuClick }) => {
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
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200 bg-white lg:left-[250px]">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link
            to="/farmer"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="MandiMitra"
              className="h-9 w-9 rounded-lg object-contain sm:h-10 sm:w-10"
            />

            <div>
              <h1 className="text-base font-bold sm:text-lg">
                <span className="text-green-700">Mandi</span>
                <span className="text-orange-500">Mitra</span>
              </h1>

              <p className="text-[10px] text-gray-500 sm:text-xs">
                Sahi Mandi, Sahi Daam
              </p>
            </div>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Notification */}
          <button
            type="button"
            className="relative p-2 text-lg sm:text-xl"
            aria-label="Notifications"
          >
            🔔

            <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition hover:bg-gray-50 sm:gap-3 sm:px-2"
            >
              <div className="hidden text-right md:block">
                <p className="text-sm font-semibold text-gray-800">
                  Ravi
                </p>

                <p className="text-xs text-gray-500">
                  Farmer
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700 sm:h-10 sm:w-10">
                R
              </div>

              <ChevronDown
                size={16}
                className={`hidden text-gray-500 transition-transform sm:block ${
                  showProfile ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                <Link
                  to="/farmer/profile"
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
      </div>
    </header>
  );
};

export default FarmerNavbar;
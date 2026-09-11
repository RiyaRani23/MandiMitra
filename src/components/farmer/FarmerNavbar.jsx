import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, User, LogOut } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const FarmerNavbar = () => {
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
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/farmer/dashboard" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MandiMitra"
            className="h-10 w-10 rounded-lg object-contain"
          />

          <div>
            <h1 className="text-lg font-bold">
              <span className="text-green-700">Mandi</span>
              <span className="text-orange-500">Mitra</span>
            </h1>

            <p className="text-xs text-gray-500">Sahi Mandi, Sahi Daam</p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <button type="button" className="relative text-xl">
            🔔
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-gray-50"
            >
              <div className="hidden text-right md:block">
                <p className="text-sm font-semibold text-gray-800">Ravi</p>

                <p className="text-xs text-gray-500">Farmer</p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                R
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

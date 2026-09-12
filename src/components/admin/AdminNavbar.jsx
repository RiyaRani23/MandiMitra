import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, User, LogOut } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const AdminNavbar = ({ onMenuClick }) => {
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
    <nav className="relative flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <Link to="/admin" className="flex items-center gap-2">
          <img
            src={logo}
            alt="MandiMitra"
            className="h-9 w-9 rounded-lg object-contain"
          />

          <h1 className="text-lg font-bold sm:text-xl">
            <span className="text-green-700">Mandi</span>
            <span className="text-[#f7941d]">Mitra</span>
          </h1>
        </Link>
      </div>

      {/* Profile */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-gray-50 sm:gap-3"
        >
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
            A
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
              to="/admin/settings"
              onClick={() => setShowProfile(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              <User size={17} />
              <span>Settings</span>
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
    </nav>
  );
};

export default AdminNavbar;
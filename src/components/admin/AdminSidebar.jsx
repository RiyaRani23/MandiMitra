import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const AdminSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const links = [
    {
      label: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Verify Users",
      path: "/admin/verification",
      icon: UserCheck,
    },
    {
      label: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      label: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    // FUTURE BACKEND:
    // Clear authentication/session data here

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64
          flex-col bg-green-800 text-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
              <img
                src={logo}
                alt="MandiMitra Logo"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>

            <div>
              <p className="text-lg font-extrabold">
                <span className="text-white">Mandi</span>
                <span className="text-[#f7941d]">Mitra</span>
              </p>

              <p className="text-[10px] uppercase tracking-wider text-green-200">
                Admin Portal
              </p>
            </div>
          </div>

          {/* Close Button - Mobile */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-green-100 transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-green-200">
            Management
          </p>

          <div className="space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/admin"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-green-800 shadow-sm"
                        : "text-green-50 hover:bg-white/10"
                    }`
                  }
                >
                  <Icon className="h-4.5 w-4.5" />
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="shrink-0 border-t border-white/10 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-green-50 transition hover:bg-red-500/20 hover:text-white"
          >
            <LogOut className="h-4.5 w-4.5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;


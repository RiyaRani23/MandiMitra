import {
  LayoutDashboard,
  Store,
  Wheat,
  ShoppingCart,
  Users,
  PackageCheck,
  CreditCard,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function FarmerSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/farmer",
      end: true,
    },
    {
      name: "Market Prices",
      icon: Store,
      path: "/farmer/market-prices",
    },
    {
      name: "Sell Your Produce",
      icon: Wheat,
      path: "/farmer/sell-produce",
    },
    {
      name: "Find Buyers",
      icon: ShoppingCart,
      path: "/farmer/find-buyers",
    },
    {
      name: "FPOs",
      icon: Users,
      path: "/farmer/fpos",
    },
    {
      name: "My Deals",
      icon: PackageCheck,
      path: "/farmer/my-deals",
    },
    {
      name: "Payments",
      icon: CreditCard,
      path: "/farmer/payments",
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
        className={`fixed left-0 top-0 z-50 flex h-screen w-[250px]
          flex-col bg-[#123c2c] text-white shadow-xl
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:shadow-none`}
      >
        {/* Header */}
        <div className="mb-2 flex items-start justify-between px-5 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-[#f7941d]" />

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                <span className="text-white">FARMER</span>
                <span className="text-[#f7941d]"> PORTAL</span>
              </h1>

              <p className="mt-1 text-[10px] tracking-[1.8px] text-white/50">
                <span className="text-gray-400">Mandi</span>
                <span className="text-green-500"> Mitra</span>
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 transition
              hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-4 py-3
                  text-sm transition ${
                    isActive
                      ? "bg-white/10 font-medium text-[#f7941d]"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="shrink-0 border-t border-white/10 p-3">
          <NavLink
            to="/farmer/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-xl px-4 py-3
              text-sm transition ${
                isActive
                  ? "bg-white/10 font-medium text-[#f7941d]"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-3 rounded-xl
              px-4 py-3 text-sm text-white/60 transition
              hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default FarmerSidebar;
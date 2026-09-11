import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  TrendingUp,
  ClipboardList,
  Handshake,
  Wallet,
  UserPlus,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/fpo/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Approved Farmers",
    path: "/fpo/approved-farmers",
    icon: Users,
  },
  {
    name: "Add Farmer",
    path: "/fpo/add-farmer",
    icon: UserPlus,
  },
  {
    name: "Produce Inventory",
    path: "/fpo/inventory",
    icon: Package,
  },
  {
    name: "Market Prices",
    path: "/fpo/market-prices",
    icon: TrendingUp,
  },
  {
    name: "Buyer Requirements",
    path: "/fpo/buyer-requirements",
    icon: ClipboardList,
  },
  {
    name: "My Deals",
    path: "/fpo/deals",
    icon: Handshake,
  },
  {
    name: "Payments",
    path: "/fpo/payments",
    icon: Wallet,
  },
];

const FPOSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // FUTURE BACKEND:
    // Clear authentication/session data here

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-[#123c2c] text-white">
      {/* Logo */}
      <div className="flex h-20 shrink-0 items-center border-b border-white/10 px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            FPO<span className="text-green-400"> PORTAL</span>
          </h1>

          <p className="mt-0.5 text-xs text-green-100">
            Mandi<span className="text-orange-400"> Mitra</span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-green-50 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout - Always Visible */}
      <div className="shrink-0 border-t border-white/10 p-3">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-green-50 transition hover:bg-red-500/10 hover:text-red-300"
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default FPOSidebar;
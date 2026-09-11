import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  TrendingUp,
  ClipboardList,
  Handshake,
  Wallet,
  User,
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
  {
    name: "Profile",
    path: "/fpo/profile",
    icon: User,
  },
];

function FPOSidebar() {
  return (
    <aside className="w-64  bg-[#123c2c] border-r">
      <div className="p-6">
        <h2 className="text-xl font-bold">
          <span className="text-white">Mandi</span>
          <span className="text-orange-500">Mitra</span>
        </h2>

        <p className="text-xs text-white">FPO Dashboard</p>
      </div>

      <nav className="px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-white hover:bg-[#1a5d4a]"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default FPOSidebar;

import {
  LayoutDashboard,
  Store,
  ClipboardList,
  Users,
  Handshake,
  PackageCheck,
  CreditCard,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function BuyerSidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/buyer" },
    { name: "Market Prices", icon: Store, path: "/buyer/market-prices" },
    { name: "Buying Requirements", icon: ClipboardList, path: "/buyer/requirements" },
    { name: "Find Farmers", icon: Users, path: "/buyer/find-farmers" },
    { name: "My Offers", icon: Handshake, path: "/buyer/offers" },
    { name: "My Deals", icon: PackageCheck, path: "/buyer/deals" },
    { name: "Payments", icon: CreditCard, path: "/buyer/payments" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col
        bg-[#123c2c] text-white transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-white">BUYER</span>
            <span className="text-green-500"> PORTAL</span>
          </h1>

          <p className="mt-1 text-[9px] tracking-[2px] text-white/50">
            <span className="text-white">Mandi</span>
            <span className="text-[#f7941d]"> Mitra</span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/buyer"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
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

      {/* Logout */}
      <div className="border-t border-white/10 p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/60 hover:bg-red-500/10 hover:text-red-300">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default BuyerSidebar;
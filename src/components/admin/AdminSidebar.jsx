import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const AdminSidebar = () => {
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

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 bg-green-800 text-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
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

      <nav className="flex-1 px-4 py-6">
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

      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-green-50 transition hover:bg-red-500/20 hover:text-white"
        >
          <LogOut className="h-4.5 w-4.5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
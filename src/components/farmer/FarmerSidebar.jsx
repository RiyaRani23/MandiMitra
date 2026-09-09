import { NavLink, Link } from "react-router-dom";

const FarmerSidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/farmer" },
    { name: "Market Prices", icon: "📊", path: "/farmer/market-prices" },
    { name: "Find Buyers", icon: "🛒", path: "/farmer/find-buyers" },
    { name: "FPOs", icon: "🤝", path: "/farmer/fpos" },
    { name: "My Deals", icon: "📦", path: "/farmer/my-deals" },
    { name: "Payments", icon: "💰", path: "/farmer/payments" },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-16 hidden w-64 border-r border-gray-200 bg-white md:block">
      <div className="flex h-full flex-col p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-2">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <span className="text-lg">⚙️</span>
            Settings
          </button>

          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <span className="text-lg">🚪</span>
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default FarmerSidebar;


import { Bell, Search, UserCircle, Menu } from "lucide-react";

function BuyerNavbar({ onMenuClick }) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-8">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-[11px] text-gray-500">
            Buyer Portal
          </p>

          <h1 className="text-lg font-semibold text-[#123c2c]">
            Dashboard
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <button className="hidden rounded-full p-2.5 text-gray-500 hover:bg-gray-100 sm:block">
          <Search size={19} />
        </button>

        {/* Notifications */}
        <button className="relative rounded-full p-2.5 text-gray-500 hover:bg-gray-100">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#f7941d]" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-gray-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4eb] text-[#197044]">
            <UserCircle size={22} />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-medium text-gray-800">
              Buyer
            </p>

            <p className="text-[10px] text-gray-500">
              Buyer Account
            </p>
          </div>
        </button>

      </div>
    </header>
  );
}

export default BuyerNavbar;
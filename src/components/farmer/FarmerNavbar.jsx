import { Link } from "react-router-dom";

const FarmerNavbar = () => {
 
    return (
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl">
              🌾
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">MandiMitra</h1>

              <p className="text-xs text-gray-500">Sahi Mandi, Sahi Daam</p>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <button className="relative text-xl">
              🔔
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                2
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                R
              </div>

              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-800">Ravi</p>

                <p className="text-xs text-gray-500">Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default FarmerNavbar;
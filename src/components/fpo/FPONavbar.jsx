import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

function FPONavbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-6">
      
      <Link to="/fpo/dashboard" className="flex items-center gap-3">
        <img
          src={logo}
          alt="MandiMitra"
          className="h-10 w-10 rounded-lg object-contain"
        />

        <div>
          <h1 className="text-lg font-bold text-green-700">
            MandiMitra
          </h1>

          <p className="text-xs text-gray-500">
            FPO Portal
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-gray-800">
            FPO Admin
          </p>

          <p className="text-xs text-gray-500">
            Verified FPO
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
          F
        </div>
      </div>

    </nav>
  );
}

export default FPONavbar;
import { Link } from "react-router-dom";
import {logoImg} from "../assets/assets.js";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full border-b border-white/20">
      <div className="mx-auto flex h-[86px] max-w-[1350px] items-center justify-between px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f7941d]">
            <span className="text-xl text-white"><img src={logoImg} className="rounded-md"/></span>
          </div>

          <div className="leading-none">
            <span className="text-[19px] font-bold text-white">
              Mandi
            </span>
            <span className="text-[19px] font-bold text-[#f7941d]">
              Mitra
            </span>

            <div className="mt-1 text-[10px] tracking-[0.5px] text-white/80">
              SAHI MANDI, SAHI DAAM
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/how-it-works"
            className="text-[11px] text-white/90 transition hover:text-[#f7941d]"
          >
            How It Works
          </Link>

          <Link
            to="/market-prices"
            className="text-[11px] text-white/90 transition hover:text-[#f7941d]"
          >
            Market Prices
          </Link>

          <Link
            to="/about"
            className="text-[11px] text-white/90 transition hover:text-[#f7941d]"
          >
            About
          </Link>

          {/* Language */}
          <div className="flex items-center gap-2 text-[11px] text-white/90">
            <select
              className="cursor-pointer bg-transparent text-white outline-none"
              defaultValue="English"
            >
              <option value="English" className="text-black">
                English
              </option>
              <option value="Hindi" className="text-black">
                Hindi
              </option>
              <option value="Marathi" className="text-black">
                Marathi
              </option>
            </select>
          </div>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-full border border-white/40 px-5 py-2 text-[11px] text-white transition hover:bg-white hover:text-gray-800"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            to="/register"
            className="rounded-full bg-[#f7941d] px-5 py-2 text-[11px] font-medium text-white transition hover:bg-[#e8850b]"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="text-2xl text-white lg:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
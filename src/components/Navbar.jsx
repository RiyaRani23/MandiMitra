import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe2 } from "lucide-react";
import { logoImg } from "../assets/assets.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "How It Works",
      path: "/#how-it-works",
    },
    {
      name: "Market Prices",
      path: "/market-prices",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  const isActive = (path) => {
    if (path.includes("#")) {
      return false;
    }

    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#123c2c]/95 shadow-lg backdrop-blur-md"
          : "border-white/20 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1350px] items-center justify-between px-5 sm:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#f7941d] shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg}
              alt="MandiMitra logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Logo Text */}
          <div className="leading-none">
            <div className="text-[20px] font-bold tracking-tight">
              <span className="text-white">Mandi</span>
              <span className="text-[#f7941d]">Mitra</span>
            </div>

            <div className="mt-1 text-[9px] font-medium tracking-[1px] text-white/75">
              SAHI MANDI, SAHI DAAM
            </div>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-7 lg:flex">

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative py-2 text-[12px] font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? "text-[#f7941d]"
                  : "text-white/90 hover:text-[#f7941d]"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#f7941d]" />
              )}
            </Link>
          ))}

          {/* ================= LANGUAGE ================= */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 py-2 text-[12px] font-medium text-white/90 transition hover:text-[#f7941d]">
              <Globe2 size={14} />
              <span>English</span>
              <ChevronDown
                size={13}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            {/* Language Dropdown */}
            <div className="invisible absolute right-0 top-full mt-2 w-32 translate-y-2 rounded-xl border border-gray-100 bg-white p-1.5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <button className="w-full rounded-lg px-3 py-2 text-left text-[11px] text-gray-700 transition hover:bg-orange-50 hover:text-[#f7941d]">
                English
              </button>

              <button className="w-full rounded-lg px-3 py-2 text-left text-[11px] text-gray-700 transition hover:bg-orange-50 hover:text-[#f7941d]">
                हिंदी
              </button>

              <button className="w-full rounded-lg px-3 py-2 text-left text-[11px] text-gray-700 transition hover:bg-orange-50 hover:text-[#f7941d]">
                मराठी
              </button>
            </div>
          </div>

          {/* ================= LOGIN ================= */}
          <Link
            to="/login"
            className="rounded-full border border-white/40 px-5 py-2.5 text-[11px] font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#123c2c]"
          >
            Login
          </Link>

          {/* ================= REGISTER ================= */}
          <Link
            to="/register"
            className="rounded-full bg-[#f7941d] px-5 py-2.5 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#e8850b] hover:shadow-md"
          >
            Register
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#123c2c]/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1350px] space-y-1 px-5 py-5 sm:px-8">

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm transition ${
                isActive(link.path)
                  ? "bg-white/10 text-[#f7941d]"
                  : "text-white/90 hover:bg-white/10 hover:text-[#f7941d]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Language */}
          <div className="mt-2 border-t border-white/10 pt-3">
            <div className="mb-2 flex items-center gap-2 px-4 text-xs text-white/60">
              <Globe2 size={14} />
              Language
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                English
              </button>

              <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
                हिंदी
              </button>

              <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
                मराठी
              </button>
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/30 px-4 py-2.5 text-center text-xs font-medium text-white transition hover:bg-white hover:text-[#123c2c]"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#f7941d] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#e8850b]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
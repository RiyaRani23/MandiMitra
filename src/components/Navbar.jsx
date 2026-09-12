import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe2, Sparkles } from "lucide-react";
import { logoImg } from "../assets/assets.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Market Prices", path: "/market-prices" },
    { name: "About", path: "/#about" },
  ];

  const isActive = (path) => {
    if (path.includes("#")) return false;
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d2f23]/90 shadow-2xl backdrop-blur-xl py-3"
          : "border-b border-white/15 bg-gradient-to-b from-[#0d2f23]/80 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 sm:px-8">
        
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#f7941d] shadow-lg shadow-orange-950/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg}
              alt="MandiMitra logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
              <span>Mandi</span>
              <span className="text-[#f7941d]">Mitra</span>
            </div>
            <div className="text-[9px] font-bold tracking-[1.5px] text-emerald-300/80 uppercase">
              Sahi Mandi, Sahi Daam
            </div>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-medium transition-colors hover:text-[#f7941d] ${
                  isActive(link.path) ? "text-[#f7941d] font-semibold" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white backdrop-blur-md transition-colors hover:border-white/30">
            <Globe2 size={14} className="text-[#f7941d]" />
            <select
              className="cursor-pointer bg-transparent text-white outline-none font-medium"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              aria-label="Select Language"
            >
              <option value="English" className="bg-[#123c2c] text-white">English</option>
              <option value="Hindi" className="bg-[#123c2c] text-white">हिंदी</option>
              <option value="Marathi" className="bg-[#123c2c] text-white">मराठी</option>
            </select>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full border border-white/30 bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123c2c] active:scale-95"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#168451] px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:bg-[#116d43] hover:shadow-emerald-900/50 active:scale-95"
            >
              <span>Register</span>
              <Sparkles size={12} className="text-amber-300 transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/15 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0c261b]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden shadow-2xl ${
          isOpen ? "max-h-[550px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="mx-auto max-w-[1350px] space-y-4 px-5 sm:px-8">
          
          {/* Mobile Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive(link.path)
                    ? "bg-white/10 text-[#f7941d] font-semibold"
                    : "text-white/90 hover:bg-white/10 hover:text-[#f7941d]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="border-t border-white/10 pt-4">
            <div className="mb-2.5 flex items-center gap-2 px-1 text-xs font-medium text-white/60">
              <Globe2 size={14} className="text-[#f7941d]" />
              Select Language
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["English", "Hindi", "Marathi"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`rounded-xl py-2.5 text-xs font-semibold transition ${
                    selectedLang === lang
                      ? "bg-[#f7941d] text-white shadow-md"
                      : "bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {lang === "Hindi" ? "हिंदी" : lang === "Marathi" ? "मराठी" : "English"}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/30 px-4 py-3 text-center text-xs font-semibold text-white transition hover:bg-white hover:text-[#123c2c]"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#168451] px-4 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-[#116d43]"
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
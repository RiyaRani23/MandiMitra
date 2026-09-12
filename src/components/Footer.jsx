import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { logoImg } from "../assets/assets.js";

function Footer() {
  return (
    <footer className="relative bg-[#092218] text-white border-t border-white/10 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 py-16 sm:py-20">
        
        {/* Top Newsletter / Trust Banner */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#168451]/20 text-[#52d273] border border-[#168451]/30">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Join India's Fastest Growing Agricultural Network</h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Get real-time mandi prices, trusted buyer listings, and market alerts directly.</p>
            </div>
          </div>

          <Link
            to="/register"
            className="group inline-flex items-center gap-2 rounded-full bg-[#168451] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:bg-[#116d43] hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Get Started Today</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column with Logo */}
          <div className="space-y-5">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#f7941d] shadow-lg shadow-orange-950/30 transition-transform duration-300 group-hover:scale-105">
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
                <p className="text-[9px] font-bold tracking-[1.5px] text-emerald-300/80 uppercase">
                  Sahi Mandi, Sahi Daam
                </p>
              </div>
            </Link>

            <p className="max-w-[280px] text-xs sm:text-sm leading-relaxed text-white/70">
              Empowering farmers with transparent prices, trusted buyers, 
              real-time market insights and direct connections.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:border-[#f7941d] hover:bg-[#f7941d] hover:text-white hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f7941d]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/#about" },
                { name: "How It Works", path: "/#how-it-works" },
                { name: "Market Prices", path: "/market-prices" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#f7941d]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors group-hover:bg-[#f7941d]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f7941d]">
              For Farmers & Buyers
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              {[
                { name: "Register", path: "/register" },
                { name: "Login", path: "/login" },
                { name: "Farmer Registration", path: "/register/farmer" },
                { name: "Buyer Registration", path: "/register/buyer" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#f7941d]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors group-hover:bg-[#f7941d]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f7941d]">
              Contact Us
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#f7941d] transition group-hover:bg-[#f7941d] group-hover:text-white">
                  <Mail size={14} />
                </div>
                <span className="break-all self-center">support@mandimitra.com</span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#f7941d] transition group-hover:bg-[#f7941d] group-hover:text-white">
                  <Phone size={14} />
                </div>
                <span className="self-center">+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#f7941d] transition group-hover:bg-[#f7941d] group-hover:text-white">
                  <MapPin size={14} />
                </div>
                <span className="self-center">Jharkhand, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MandiMitra. Empowering farmers through smarter market connections.</p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
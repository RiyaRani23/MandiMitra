import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#12382e] text-white">
      <div className="mx-auto max-w-337.5 px-8 py-12">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f7941d]">
                <span className="text-lg font-bold">M</span>
              </div>

              <div className="leading-none">
                <div className="text-xl font-bold">
                  <span className="text-white">Mandi</span>
                  <span className="text-[#f7941d]">Mitra</span>
                </div>

                <p className="mt-1 text-[9px] tracking-[1px] text-white/60">
                  SAHI MANDI, SAHI DAAM
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[280px] text-sm leading-6 text-white/65">
              Empowering farmers with better prices, trusted buyers,
              market insights and transparent deals.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f7941d] hover:text-[#f7941d]"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f7941d] hover:text-[#f7941d]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f7941d] hover:text-[#f7941d]"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
              <Link
                to="/"
                className="transition hover:text-[#f7941d]"
              >
                Home
              </Link>

              <Link
                to="/#about"
                className="transition hover:text-[#f7941d]"
              >
                About Us
              </Link>

              <Link
                to="/#how-it-works"
                className="transition hover:text-[#f7941d]"
              >
                How It Works
              </Link>

              <Link
                to="/market-prices"
                className="transition hover:text-[#f7941d]"
              >
                Market Prices
              </Link>
            </div>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-sm font-semibold">
              For Farmers & Buyers
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
              <Link
                to="/register"
                className="transition hover:text-[#f7941d]"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="transition hover:text-[#f7941d]"
              >
                Login
              </Link>

              <Link
                to="/register/farmer"
                className="transition hover:text-[#f7941d]"
              >
                Farmer Registration
              </Link>

              <Link
                to="/register/buyer"
                className="transition hover:text-[#f7941d]"
              >
                Buyer Registration
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">
              Contact Us
            </h3>

            <div className="mt-6 flex flex-col gap-5 text-sm text-white/65">

              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f7941d]"
                />
                <span>support@mandimitra.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f7941d]"
                />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f7941d]"
                />
                <span>
                  Jharkhand, India
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 MandiMitra. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
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
import { Link } from "react-router-dom";
import MarketPriceSection from "../components/market/MarketPriceSection";
import logo from "../assets/logo.jpeg";

const PublicMarketPrices = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f2] selection:bg-[#f7941d] selection:text-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2f23] via-[#123c2c] to-[#168451] px-4 pb-8 pt-6 text-white sm:px-6 sm:pb-10 sm:pt-8 lg:px-8">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#168451]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#f7941d]/10 blur-3xl" />

        {/* Top Navbar: Logo (Left) & Back to Home (Right) */}
        <div className="relative mx-auto mb-6 flex max-w-[1350px] items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1 shadow-lg transition-transform duration-200 group-hover:scale-105">
              <img
                src={logo}
                alt="MandiMitra Logo"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-bold leading-tight sm:text-base">
                Mandi<span className="text-[#f7941d]">Mitra</span>
              </p>
              <p className="mt-0.5 text-[9px] text-white/60 sm:text-[10px]">
                Sahi Mandi, Sahi Daam
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/20 hover:text-white"
          >
            <span className="text-sm transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Header */}
        <div className="relative mx-auto flex max-w-[1350px] flex-col justify-between gap-6 lg:flex-row lg:items-end">
          {/* Header Content */}
          <div className="max-w-3xl">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f7941d]" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#f7941d] sm:text-[11px]">
                MandiMitra Market
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Market Prices
            </h1>

            <p className="mt-2.5 max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm lg:text-base">
              Check current mandi prices, analyze trends, and compare markets
              before you decide where to sell or buy your produce.
            </p>
          </div>

          {/* Login / Register */}
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center">
            <Link
              to="/login"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-sm"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="w-full rounded-xl bg-[#f7941d] px-5 py-2.5 text-center text-xs font-semibold text-white shadow-lg shadow-[#f7941d]/25 transition-all duration-200 hover:bg-[#e9850c] hover:shadow-[#f7941d]/40 active:scale-95 sm:w-auto sm:text-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Market Prices Data Section */}
      <main className="mx-auto max-w-[1350px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="rounded-3xl">
          <MarketPriceSection />
        </div>
      </main>

      {/* Bottom Conversion CTA */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d2f23] via-[#123c2c] to-[#168451] px-6 py-10 text-center text-white shadow-2xl sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#f7941d]/15 blur-2xl" />

          <div className="relative z-10">
            <p className="mb-3 inline-block rounded-full border border-[#f7941d]/30 bg-[#f7941d]/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#f7941d]">
              Take the next step
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to make your move?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Join MandiMitra to sell your produce, discover genuine buyers,
              connect with FPOs, and manage your deals seamlessly in one place.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/login"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-7 py-3 text-center text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto"
              >
                Login to Account
              </Link>

              <Link
                to="/register"
                className="w-full rounded-xl bg-[#f7941d] px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#f7941d]/25 transition-all duration-200 hover:bg-[#e9850c] hover:shadow-[#f7941d]/40 active:scale-95 sm:w-auto"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicMarketPrices;
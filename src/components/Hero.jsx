import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  MapPin,
  IndianRupee,
  Activity,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/08/25/05/30/in-rice-field-2679153_1280.jpg')",
        }}
      />

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#082f22]/95 via-[#123f2f]/85 to-[#123f2f]/35" />

      {/* Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b3526]/80 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1400px] items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Label */}
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#52d273] shadow-[0_0_10px_rgba(82,210,115,0.8)]" />

              <span className="text-[10px] font-bold tracking-[2.5px] text-[#f7941d] sm:text-xs">
                EMPOWERING INDIA'S FARMERS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-light leading-[1.08] tracking-[-2px] text-white sm:text-6xl lg:text-[68px]">
              Sahi{" "}
              <span className="font-semibold text-[#f7941d]">
                Daam
              </span>
              ,
              <br />
              Sahi Faisla,
              <br />
              <span className="font-semibold text-white">
                Saksham Kisan.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Discover better markets, compare mandi prices, connect with
              buyers and FPOs, and make smarter selling decisions for your
              produce.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/market-prices"
                className="group flex w-fit items-center justify-center gap-3 rounded-full bg-[#168451] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-950/20 transition hover:bg-[#116d43]"
              >
                Explore Mandi Prices

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="group flex w-fit items-center justify-center gap-3 rounded-full border border-white/60 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                Join MandiMitra

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52d273]" />
                Transparent Prices
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52d273]" />
                Verified Participants
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52d273]" />
                Better Market Access
              </div>
            </div>
          </div>

          {/* Right Market Card */}
          <div className="hidden justify-center lg:flex">
            <div className="w-full max-w-[390px]">
              {/* Live Badge */}
              <div className="mb-3 flex justify-end">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#52d273]" />
                  Live Market Snapshot
                </div>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-md">
                {/* Card Header */}
                <div className="border-b border-gray-100 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Today's Mandi Prices
                      </p>

                      <h2 className="mt-1 text-xl font-bold text-[#123c2c]">
                        Market Snapshot
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                      <TrendingUp
                        size={20}
                        className="text-green-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Market Items */}
                <div className="space-y-3 p-5">
                  {/* Onion */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-green-100 hover:bg-green-50/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Onion
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} />
                          Lasalgaon
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end text-base font-bold text-[#123c2c]">
                          <IndianRupee size={14} />
                          2,850
                        </div>

                        <p className="mt-0.5 text-[10px] text-green-600">
                          / Quintal
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tomato */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-green-100 hover:bg-green-50/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Tomato
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} />
                          Nashik
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end text-base font-bold text-[#123c2c]">
                          <IndianRupee size={14} />
                          2,420
                        </div>

                        <p className="mt-0.5 text-[10px] text-green-600">
                          / Quintal
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wheat */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-green-100 hover:bg-green-50/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Wheat
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} />
                          Pune
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end text-base font-bold text-[#123c2c]">
                          <IndianRupee size={14} />
                          2,640
                        </div>

                        <p className="mt-0.5 text-[10px] text-green-600">
                          / Quintal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-green-50/60 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity
                        size={15}
                        className="text-green-700"
                      />

                      <span className="text-xs font-medium text-green-800">
                        Transparent price discovery
                      </span>
                    </div>

                    <Link
                      to="/market-prices"
                      className="text-xs font-semibold text-green-700 hover:text-green-900"
                    >
                      View all →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Small Floating Badge */}
              <div className="mt-4 flex justify-start">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-wider text-white/60">
                    MandiMitra
                  </p>

                  <p className="mt-1 text-xs font-medium text-white">
                    Sahi Mandi, Sahi Daam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
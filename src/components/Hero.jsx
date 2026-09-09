import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-160 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/25/05/30/in-rice-field-2679153_1280.jpg')",
        }}
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3526]/95 via-[#174a36]/65 to-transparent" />

      {/* Slight bottom darkening */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#12382a]/70 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-20 flex h-full max-w-350 items-center px-8">

        <div className="max-w-137.5 pt-16">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#52d273]" />

            <span className="text-[10px] font-bold tracking-[2px] text-[#f7941d]">
              EMPOWERING INDIA'S FARMERS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[60px] font-light leading-[1.17] tracking-[-2px] text-white md:text-[60px]">
            Sahi Daam,
            <br />
            Sahi Faisla,
            <br />
            Saksham Kisan.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-100 text-[14px] leading-6 text-white/85">
            Discover better markets. Compare prices. Sell with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">

            <Link
              to="/market-prices"
              className="group flex items-center gap-3 rounded-full bg-[#168451] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#116d43]"
            >
              Explore Mandi Prices

              <span className="text-base transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-3 rounded-full border border-white/70 px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Join MandiMitra

              <span className="text-base transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
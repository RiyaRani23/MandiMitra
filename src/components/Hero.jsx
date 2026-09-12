import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Empowering India's Farmers",
    title: "Sahi Daam, Sahi Faisla, Saksham Kisan.",
    text: "Discover better markets, compare mandi prices, connect with buyers and FPOs, and make smarter selling decisions for your produce.",
  },
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Direct Connections",
    title: "Kisan se Bazaar Tak, Seedha Aur Bharosemand.",
    text: "Connect farmers and FPOs with verified buyers and better opportunities.",
  },
  {
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Smart Mandi",
    title: "Smart Mandi. Better Decisions.",
    text: "Real-time market prices and demand insights, all in one place.",
  },
  {
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Stronger Together",
    title: "Akela Kisan Nahi, Saath Mein Poora Bazaar.",
    text: "Aggregate produce through FPOs and unlock stronger market opportunities.",
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Technology for Farmers",
    title: "Technology Bazaar Tak, Faisla Kisan Ke Haath.",
    text: "Data-driven insights designed to make agricultural selling simpler.",
  },
];

function Hero() {
  const [active, setActive] = useState(0);

  // Automatically rotate slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0c261b] flex flex-col justify-center">
      {/* Background Image Carousel Slides - Guaranteed full screen coverage with absolute inset */}
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(12,38,27,.96) 0%, rgba(12,38,27,.84) 55%, rgba(12,38,27,.4) 100%), linear-gradient(0deg, rgba(9,35,24,.8), rgba(9,35,24,.5) 60%), url(${s.image})`,
            transitionProperty: "opacity, transform",
            transitionDuration: "1.5s",
          }}
        />
      ))}

      {/* Decorative Glow Elements */}
      <div className="absolute -right-20 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 py-28 sm:py-32 lg:px-12 flex flex-col justify-center flex-grow">
        <div className="w-full max-w-2xl">
          
          {/* Eyebrow / Label */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-lg">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 animate-pulse rounded-full bg-[#52d273] shadow-[0_0_10px_rgba(82,210,115,0.8)]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] sm:tracking-[2.5px] text-[#f7941d]">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-light leading-[1.15] sm:leading-[1.1] tracking-tight text-white">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-base lg:text-lg leading-relaxed text-white/85">
            {slide.text}
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/market-prices"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#168451] px-6 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-green-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#116d43]"
            >
              <span>Explore Mandi Prices</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
            >
              <span>Join MandiMitra</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2 text-[11px] sm:text-xs font-medium text-white/85">
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
      </div>

      {/* Carousel Controls at Bottom */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-6 sm:pb-8 flex justify-start sm:justify-between items-center">
        <div className="flex items-center gap-2.5 sm:gap-3 bg-black/40 border border-white/15 rounded-full px-3.5 py-2 backdrop-blur-md shadow-lg">
          <button
            aria-label="Previous slide"
            onClick={() => setActive((active - 1 + slides.length) % slides.length)}
            className="text-white/70 hover:text-white transition p-1"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 sm:w-6 bg-[#f7941d]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next slide"
            onClick={() => setActive((active + 1) % slides.length)}
            className="text-white/70 hover:text-white transition p-1"
          >
            <ChevronRight size={16} />
          </button>
          
          <span className="text-[11px] sm:text-xs font-semibold text-white/85 ml-1.5 pl-2 border-l border-white/25">
            0{active + 1} / 05
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="px-4 sm:px-8 py-16 sm:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-[#0e3b2c] via-[#124d3a] to-[#092218] px-6 sm:px-12 py-12 sm:py-16 text-center text-white shadow-2xl border border-white/10 overflow-hidden">
        
        {/* Decorative Glow Elements */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 border border-white/15 mb-6 backdrop-blur-md shadow-lg">
            <Sparkles size={14} className="text-[#f7941d]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2.5px] text-amber-300 uppercase">
              Start Your Journey Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Get Better Value for Your Produce?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-emerald-100/80">
            Join MandiMitra and connect with the right market
            opportunity for your agricultural produce.
          </p>

          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f7941d] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-orange-950/40 transition-all duration-300 hover:bg-[#e8850b] hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span>Get Started Now</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;
import {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Price Discovery",
      description:
        "Compare mandi prices and identify better selling opportunities.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Buyers",
      description:
        "Connect with trusted buyers and FPOs with greater confidence.",
    },
    {
      icon: TrendingUp,
      title: "Demand Insights",
      description:
        "Understand where and when your produce is in demand.",
    },
    {
      icon: Handshake,
      title: "Transparent Deals",
      description:
        "Know the expected price, quantity and terms before selling.",
    },
    {
      icon: Sparkles,
      title: "Saksham Kisan",
      description:
        "Technology that puts better market decisions in your hands.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#f8f8f3] via-[#f5f6f0] to-[#edf0e8] px-4 sm:px-8 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1350px] relative z-10 space-y-12 sm:space-y-16">
        
        {/* Heading Container */}
        <div className="max-w-[700px] space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 border border-amber-500/20 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#f7941d] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2.5px] text-[#f7941d]">
              WHY MANDIMITRA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] sm:leading-[1.08] tracking-tight text-[#163b31]">
            From Mandi Confusion{" "}
            <br className="hidden sm:inline" />
            <span className="font-bold text-[#d97822]">
              to Market Confidence.
            </span>
          </h2>

          <p className="max-w-[580px] text-xs sm:text-base leading-relaxed text-[#476579] font-medium">
            MandiMitra brings prices, buyers, demand and market insights together so farmers can make informed selling decisions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between min-h-[260px] rounded-3xl border border-black/5 bg-white/90 backdrop-blur-xl p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white shadow-2xs">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="space-y-1.5">
                    {/* Title */}
                    <h3 className="text-base sm:text-[17px] font-bold text-[#111827] tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#476579] font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link / Hint */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
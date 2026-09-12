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
      className="relative bg-gradient-to-b from-[#f8f8f3] to-[#f3f4ee] px-4 sm:px-8 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-[1350px]">
        {/* Heading Container */}
        <div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 border border-orange-500/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f7941d]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2.5px] text-[#f7941d]">
              WHY MANDIMITRA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] sm:leading-[1.08] tracking-tight text-[#163b31]">
            From Mandi Confusion{" "}
            <br className="hidden sm:inline" />
            <span className="font-semibold text-[#d97822]">
              to Market Confidence.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[580px] text-sm sm:text-base leading-relaxed text-[#476579]">
            MandiMitra brings prices, buyers, demand and market
            insights together so farmers can make informed selling
            decisions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between min-h-[240px] sm:min-h-[260px] rounded-2xl border border-[#dce3dc] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/30 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4eb] transition-colors duration-300 group-hover:bg-[#197044] group-hover:text-white">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#197044] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-base sm:text-[17px] font-semibold text-[#111827] tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#476579]">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Action Link / Hint */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#197044] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
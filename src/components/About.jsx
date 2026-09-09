import {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Sparkles,
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
      className="bg-[#f8f8f3] px-8 py-20"
    >
      <div className="mx-20 max-w-[1350px]">
        {/* Heading */}
        <div className="max-w-[650px]">
          <p className="text-[11px] font-bold tracking-[3px] text-[#f7941d]">
            WHY MANDIMITRA?
          </p>

          <h2 className="mt-4 text-5xl font-normal leading-[1.08] tracking-[-2px] text-[#163b31] md:text-6xl">
            From Mandi Confusion
            <br />
            <span className="text-[#d97822]">
              to Market Confidence.
            </span>
          </h2>

          <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-[#476579]">
            MandiMitra brings prices, buyers, demand and market
            insights together so farmers can make informed selling
            decisions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="min-h-[220px] rounded-2xl border border-[#dce3dc] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4eb]">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#197044]"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-[16px] font-medium text-[#111827]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-[#476579]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
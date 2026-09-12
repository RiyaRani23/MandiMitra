function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "List Your Produce",
      description:
        "Provide crop, quantity, quality and location details in just a few clicks.",
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description:
        "Compare live prices, verified buyers and available selling options nearby.",
    },
    {
      number: "03",
      title: "Connect & Negotiate",
      description:
        "Connect directly with trusted buyers or FPOs and review competitive offers.",
    },
    {
      number: "04",
      title: "Complete the Deal",
      description:
        "Confirm the final terms, arrange logistics smoothly and track payments securely.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-[#f8f8f3] to-[#f3f4ee] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 scroll-mt-[86px] overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1350px]">

        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 border border-orange-500/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f7941d]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2.5px] text-[#f7941d]">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] sm:leading-[1.08] tracking-tight text-[#163b31]">
            From Produce{" "}
            <br className="hidden sm:inline" />
            <span className="font-semibold text-[#d97822]">
              to Better Deals.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#476579]">
            MandiMitra makes selling your produce simple, transparent
            and more rewarding — from finding the right opportunity
            to completing the deal.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-3xl border border-[#dce3dc] bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600/30 hover:shadow-xl hover:shadow-emerald-950/5"
            >
              <div>
                {/* Step Number & Flow Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#eaf4eb] text-sm sm:text-base font-bold text-[#197044] transition-all duration-300 group-hover:bg-[#197044] group-hover:text-white group-hover:scale-105 shadow-inner">
                    {step.number}
                  </div>

                  <span className="text-xs font-bold text-gray-300 tracking-wider">
                    STEP {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-semibold text-[#163b31] tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#476579]">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700/80 group-hover:text-emerald-700 transition-colors">
                  MandiMitra Verified
                </span>
                <div className="h-1.5 w-6 rounded-full bg-gray-100 transition-all duration-300 group-hover:w-10 group-hover:bg-[#f7941d]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
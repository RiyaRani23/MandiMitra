function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "List Your Produce",
      description:
        "Provide crop, quantity, quality and location details.",
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description:
        "Compare prices, buyers and available selling options.",
    },
    {
      number: "03",
      title: "Connect & Negotiate",
      description:
        "Connect with verified buyers or FPOs and receive offers.",
    },
    {
      number: "04",
      title: "Complete the Deal",
      description:
        "Confirm the deal, arrange logistics and track payment.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#f8f8f3] px-8 py-20 scroll-mt-[86px]"
    >
      <div className="mx-20 max-w-[1350px]">

        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <p className="text-[11px] font-bold tracking-[3px] text-[#f7941d]">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-5xl font-normal leading-[1.08] tracking-[-2px] text-[#163b31] md:text-6xl">
            From Produce
            <br />
            <span className="text-[#d97822]">
              to Better Deals.
            </span>
          </h2>

          <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-[#476579]">
            MandiMitra makes selling your produce simple, transparent
            and more rewarding — from finding the right opportunity
            to completing the deal.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-[#dce3dc] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Number */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4eb] text-sm font-bold text-[#197044] transition duration-300 group-hover:bg-[#197044] group-hover:text-white">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-7 text-[17px] font-medium text-[#163b31]">
                {step.title}
              </h3>

              <p className="mt-3 text-[12px] leading-5 text-[#476579]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
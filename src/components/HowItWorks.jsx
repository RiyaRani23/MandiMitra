function HowItWorks() {
  return (
    <section className="bg-gray-50 px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          How MandiMitra Works
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
              1
            </span>

            <h3 className="mt-5 text-lg font-bold">
              List Your Produce
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Provide crop, quantity, quality and location details.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
              2
            </span>

            <h3 className="mt-5 text-lg font-bold">
              Discover Opportunities
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Compare prices, buyers and available selling options.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
              3
            </span>

            <h3 className="mt-5 text-lg font-bold">
              Connect & Negotiate
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Connect with verified buyers or FPOs and receive offers.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
              4
            </span>

            <h3 className="mt-5 text-lg font-bold">
              Complete the Deal
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Confirm the deal, arrange logistics and track payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
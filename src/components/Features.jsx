function Features() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          One Platform, Multiple Opportunities
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-700">
              For Farmers
            </h3>

            <p className="mt-4 text-gray-600">
              Compare mandi prices, discover buyers and get better
              opportunities to sell your produce.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-700">
              For Buyers
            </h3>

            <p className="mt-4 text-gray-600">
              Find verified farmers and FPOs and post your
              purchasing requirements.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-700">
              For FPOs
            </h3>

            <p className="mt-4 text-gray-600">
              Aggregate produce and connect directly with
              bulk buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
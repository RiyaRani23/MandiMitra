function Hero() {
  return (
    <section className="bg-green-50 px-8 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900">
        Sahi Mandi, Sahi Daam.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        MandiMitra connects farmers, buyers and FPOs
        to make agricultural trading simpler, smarter and more transparent.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
          Get Started
        </button>

        <button className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-100">
          Explore Market
        </button>
      </div>
    </section>
  );
}

export default Hero;
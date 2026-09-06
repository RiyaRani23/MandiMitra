import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-green-700 px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Get Better Value for Your Produce?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-green-100">
          Join MandiMitra and connect with the right market
          opportunity for your agricultural produce.
        </p>

        <Link
          to="/register"
          className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-green-700 transition hover:bg-green-50"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default CTA;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    if (role === "farmer") {
      navigate("/register/farmer");
    } else if (role === "buyer") {
      navigate("/register/buyer");
    } else if (role === "fpo") {
      navigate("/register/fpo");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="text-2xl font-bold text-green-700">
          MandiMitra
        </Link>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Main */}
      <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-10">

        <div className="w-full max-w-5xl rounded-3xl bg-white p-7 shadow-xl sm:p-10 md:p-12">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wider text-green-600">
              JOIN MANDIMITRA
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              How do you want to use MandiMitra?
            </h1>

            <p className="mt-3 text-gray-500">
              Select your role to create an account tailored to your needs.
            </p>
          </div>

          {/* Role Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {/* Farmer */}
            <button
              onClick={() => setRole("farmer")}
              className={`rounded-2xl border-2 p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                role === "farmer"
                  ? "border-green-500 bg-green-50 shadow-md"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                  👨‍🌾
                </div>

                {role === "farmer" && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-sm text-white">
                    ✓
                  </div>
                )}
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-900">
                Farmer
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Find better prices, connect with buyers and sell your
                produce with confidence.
              </p>
            </button>

            {/* Buyer */}
            <button
              onClick={() => setRole("buyer")}
              className={`rounded-2xl border-2 p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                role === "buyer"
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  🏪
                </div>

                {role === "buyer" && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                    ✓
                  </div>
                )}
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-900">
                Buyer
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discover verified farmers and FPOs and source quality
                agricultural produce.
              </p>
            </button>

            {/* FPO */}
            <button
              onClick={() => setRole("fpo")}
              className={`rounded-2xl border-2 p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                role === "fpo"
                  ? "border-orange-500 bg-orange-50 shadow-md"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  🏢
                </div>

                {role === "fpo" && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
                    ✓
                  </div>
                )}
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-900">
                FPO
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Aggregate farmer produce and connect directly with
                reliable bulk buyers.
              </p>
            </button>
          </div>

          {/* Continue */}
          <div className="mx-auto mt-10 max-w-md">
            <button
              onClick={handleContinue}
              disabled={!role}
              className={`w-full rounded-xl py-3.5 font-semibold text-white shadow-lg transition ${
                role
                  ? "bg-green-600 shadow-green-600/20 hover:bg-green-700"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >
              Continue
            </button>
          </div>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-500">
            By continuing, you agree to MandiMitra's terms and policies.
          </p>

        </div>
      </main>
    </div>
  );
}

export default Register;
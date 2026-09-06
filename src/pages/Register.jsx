import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("farmer");

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

      {/* Register Card */}
      <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          
          {/* Left Side */}
          <div className="hidden bg-green-700 p-12 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                🌾
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Welcome to
                <br />
                MandiMitra
              </h1>

              <p className="mt-6 leading-7 text-green-100">
                Connect with the right market, discover better
                opportunities and trade agricultural produce with confidence.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">Better Price Discovery</h3>
                  <p className="text-sm text-green-100">
                    Compare available market opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">Verified Connections</h3>
                  <p className="text-sm text-green-100">
                    Connect with farmers, buyers and FPOs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">Simple & Transparent</h3>
                  <p className="text-sm text-green-100">
                    Track your deals from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-7 sm:p-10 md:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold text-green-600">
                CREATE ACCOUNT
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Join MandiMitra
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Choose your role and create your account.
              </p>
            </div>

            {/* Role Selection */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                I am a
              </label>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("farmer")}
                  className={`rounded-xl border p-4 text-center transition ${
                    role === "farmer"
                      ? "border-green-600 bg-green-50 text-green-700 ring-2 ring-green-100"
                      : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                  }`}
                >
                  <div className="text-2xl">👨‍🌾</div>
                  <p className="mt-2 text-sm font-semibold">Farmer</p>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`rounded-xl border p-4 text-center transition ${
                    role === "buyer"
                      ? "border-green-600 bg-green-50 text-green-700 ring-2 ring-green-100"
                      : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                  }`}
                >
                  <div className="text-2xl">🏢</div>
                  <p className="mt-2 text-sm font-semibold">Buyer</p>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("fpo")}
                  className={`rounded-xl border p-4 text-center transition ${
                    role === "fpo"
                      ? "border-green-600 bg-green-50 text-green-700 ring-2 ring-green-100"
                      : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                  }`}
                >
                  <div className="text-2xl">🌾</div>
                  <p className="mt-2 text-sm font-semibold">FPO</p>
                </button>
              </div>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 hover:shadow-green-600/30"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-xs leading-5 text-gray-500">
              By creating an account, you agree to MandiMitra's
              terms and privacy policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: "demo@mandimitra.com",
    password: "123456",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const demoEmail = "demo@mandimitra.com";
    const demoPassword = "123456";

    if (
      loginData.identifier === demoEmail &&
      loginData.password === demoPassword
    ) {
      navigate("/farmer");
    } else {
      setError("Invalid email or password.");
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
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          {/* Left Section */}
          <div className="hidden bg-green-700 p-12 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                🌾
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Welcome
                <br />
                Back!
              </h1>

              <p className="mt-6 leading-7 text-green-100">
                Continue your journey with MandiMitra and discover
                better opportunities in the agricultural marketplace.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-lg font-medium">
                “Sahi Mandi, Sahi Daam.”
              </p>

              <p className="mt-2 text-sm text-green-100">
                Connecting the agricultural ecosystem.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-7 sm:p-10 md:p-12">

            <div className="mb-8">
              <p className="text-sm font-semibold text-green-600">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Login to MandiMitra
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your credentials to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email / Mobile */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Mobile Number or Email
                </label>

                <input
                  type="text"
                  name="identifier"
                  value={loginData.identifier}
                  onChange={handleChange}
                  placeholder="Enter mobile number or email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-green-700 hover:text-green-800"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  required
                />
              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-green-600"
                />
                Remember me
              </label>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-gray-600">
              New to MandiMitra?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-700 hover:text-green-800"
              >
                Create an account
              </Link>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
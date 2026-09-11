import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Building2, ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpeg";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: "demo@mandimitra.com",
    password: "123456",
  });

  const [selectedRole, setSelectedRole] = useState("buyer");
  const [error, setError] = useState("");

  const roles = [
    {
      id: "farmer",
      label: "Farmer",
      icon: "🌾",
    },
    {
      id: "buyer",
      label: "Buyer",
      icon: ShoppingCart,
    },
    {
      id: "fpo",
      label: "FPO",
      icon: Building2,
    },
  ];

  const roleRoutes = {
    farmer: "/farmer",
    buyer: "/buyer",
    fpo: "/fpo",
  };

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
      navigate(roleRoutes[selectedRole]);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-700"
        >
          <img
            src={logo}
            alt="MandiMitra Logo"
            className="h-10 w-10 rounded-lg object-contain"
          />

          <span className="text-2xl font-extrabold tracking-tight text-[#f7941d]">
            Mandi<span className=" text-green-700">Mitra</span>
          </span>
        </Link>

        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-700 transition hover:text-green-800"
          >
            Register
          </Link>
        </p>
      </header>

      {/* Main */}
      <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* Left Section */}
          <div className="hidden bg-green-700 p-12 text-white md:flex md:flex-col md:justify-between">
            <div className="hidden bg-green-700 p-12 text-white md:flex md:flex-col md:items-center md:justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-3">
                <img
                  src={logo}
                  alt="MandiMitra Logo"
                  className="h-full w-full rounded-2xl object-contain"
                />
              </div>

              <h1 className="mt-8 text-center text-4xl font-bold">
                Welcome
                <br />
                Back!
              </h1>

              <p className="mt-6 max-w-md text-center leading-7 text-green-100">
                Continue your journey with MandiMitra and discover better
                opportunities in the agricultural marketplace.
              </p>

              <div className="mt-10 w-full rounded-2xl bg-white/10 p-6 text-center">
                <p className="text-lg font-medium">"Sahi Mandi, Sahi Daam."</p>

                <p className="mt-2 text-sm text-green-100">
                  Connecting the agricultural ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-7 sm:p-10 md:p-12">
            {/* Heading */}
            <div className="mb-7">
              <p className="text-sm font-semibold tracking-wide text-green-600">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Login to MandiMitra
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Select your role and continue to your dashboard.
              </p>
            </div>

            {/* Role Selector */}
            <div className="mb-7">
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Login as
              </label>

              <div className="grid grid-cols-3 gap-3">
                {roles.map((role) => {
                  const isSelected = selectedRole === role.id;

                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => {
                        setSelectedRole(role.id);
                        setError("");
                      }}
                      className={`rounded-xl border px-3 py-3 transition-all duration-200 ${
                        isSelected
                          ? "border-green-600 bg-green-50 text-green-700 shadow-sm"
                          : "border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:bg-green-50"
                      }`}
                    >
                      {typeof role.icon === "string" ? (
                        <div className="text-xl">{role.icon}</div>
                      ) : (
                        (() => {
                          const Icon = role.icon;
                          return <Icon className="mx-auto h-5 w-5" />;
                        })()
                      )}

                      <p className="mt-1 text-sm font-semibold">{role.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Login Form */}
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
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
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
                    className="text-sm font-medium text-green-700 transition hover:text-green-800"
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
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="h-4 w-4 accent-green-600" />

                <span>Remember me</span>
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
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Login
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                className="font-semibold text-green-700 transition hover:text-green-800"
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

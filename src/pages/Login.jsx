import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "../assets/logo.jpeg";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: "demo@mandimitra.com",
    password: "123456",
  });

  const [selectedRole, setSelectedRole] = useState("buyer");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: "farmer", label: "Farmer", icon: "🌾" },
    { id: "buyer", label: "Buyer", icon: ShoppingCart },
    { id: "fpo", label: "FPO", icon: Building2 },
  ];

  const roleRoutes = {
    farmer: "/farmer",
    buyer: "/buyer",
    fpo: "/fpo",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const demoEmail = "demo@mandimitra.com";
    const demoPassword = "123456";

    setTimeout(() => {
      if (
        loginData.identifier === demoEmail &&
        loginData.password === demoPassword
      ) {
        navigate(roleRoutes[selectedRole]);
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    }, 400);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50/30">
      {/* Header */}
      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5">
            <img src={logo} alt="MandiMitra Logo" className="h-full w-full rounded-lg object-contain" />
          </div>
          <span className="text-xl font-black tracking-tight">
            <span className="text-green-700">Mandi</span>
            <span className="text-[#f7941d]">Mitra</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 shadow-sm ring-1 ring-gray-200/60 text-xs sm:text-sm">
          <span className="text-gray-500">Don't have an account?</span>
          <Link to="/register" className="font-bold text-green-700 hover:text-green-800">
            Register
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex flex-1 items-center justify-center px-4 py-4 sm:px-6">
        <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 md:grid-cols-2">
          
          {/* Left Hero Panel */}
          <div className="relative hidden bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 p-8 text-white md:flex md:flex-col md:items-center md:justify-between">
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-xl">
                <img src={logo} alt="MandiMitra Logo" className="h-full w-full rounded-xl object-contain" />
              </div>
              <h1 className="mt-4 text-center text-2xl font-extrabold tracking-tight">
                Welcome Back!
              </h1>
              <p className="mt-2 max-w-xs text-center text-xs leading-relaxed text-green-100">
                Continue your journey with MandiMitra and explore advanced agricultural opportunities.
              </p>
            </div>

            <div className="relative z-10 my-4 w-full max-w-xs rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md">
              <p className="text-sm font-semibold text-emerald-100">"Sahi Mandi, Sahi Daam."</p>
              <p className="mt-1 text-[11px] text-green-200">Connecting the agricultural ecosystem.</p>
            </div>

            <div className="relative z-10 w-full max-w-xs rounded-xl bg-black/20 px-4 py-2.5 text-center">
              <p className="text-[11px] font-bold uppercase tracking-wide text-green-300">
                Administrator?{" "}
                <Link to="/admin/login" className="text-[#f7941d] hover:underline">
                  Admin Login →
                </Link>
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="flex flex-col justify-center p-7 sm:p-8">
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-600">
                WELCOME BACK
              </span>
              <h2 className="mt-1 text-2xl font-black text-gray-900">
                Login to Account
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Select your role and continue to your dashboard.
              </p>
            </div>

            {/* Role Selector */}
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
                Login as
              </label>
              <div className="grid grid-cols-3 gap-2.5">
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
                      className={`relative flex flex-col items-center justify-center rounded-2xl border p-3 transition-all ${
                        isSelected
                          ? "border-green-600 bg-green-50 text-green-800 shadow-sm ring-1 ring-green-600/20"
                          : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle2 className="absolute right-2 top-2 h-3.5 w-3.5 text-green-600" />
                      )}
                      {typeof role.icon === "string" ? (
                        <div className="text-xl mb-1">{role.icon}</div>
                      ) : (
                        (() => {
                          const Icon = role.icon;
                          return <Icon className="mb-1 h-5 w-5" />;
                        })()
                      )}
                      <span className="text-xs font-bold">{role.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Mobile Number or Email
                </label>
                <input
                  type="text"
                  name="identifier"
                  value={loginData.identifier}
                  onChange={handleChange}
                  placeholder="demo@mandimitra.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Password
                  </label>
                  <button type="button" className="text-xs font-semibold text-green-700 hover:text-green-800">
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div className="flex items-center">
                <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span>Remember me</span>
                </label>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs font-semibold text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-bold text-white shadow-md shadow-green-600/20 transition-all hover:bg-green-700 disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Login
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 text-center md:hidden">
              <p className="text-xs text-gray-500">
                Are you an administrator? <Link to="/admin/login" className="font-bold text-[#f7941d]">Admin Login</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MandiMitra Platforms Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default Login;
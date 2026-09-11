import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import logo from "../../assets/logo.jpeg";

function AdminLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "admin@mandimitra.com",
    password: "admin123",
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

    const demoEmail = "admin@mandimitra.com";
    const demoPassword = "admin123";

    if (
      loginData.email === demoEmail &&
      loginData.password === demoPassword
    ) {
      navigate("/admin");
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="MandiMitra Logo"
            className="h-9 w-9 rounded-lg object-contain"
          />

          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-green-600">Mandi</span>
            <span className="text-[#f7941d]">Mitra</span>
          </span>
        </Link>
      </header>

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-7 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>

            <p className="mt-5 text-xs font-semibold tracking-wide text-green-600">
              ADMIN PORTAL
            </p>

            <h1 className="mt-1.5 text-2xl font-bold text-gray-900">
              Administrator Login
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Access the MandiMitra verification dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                Admin Email
              </label>

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter admin email"
                required
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            >
              Login as Admin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-xs font-semibold text-green-700 hover:text-green-800"
            >
              ← Back to User Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLogin;
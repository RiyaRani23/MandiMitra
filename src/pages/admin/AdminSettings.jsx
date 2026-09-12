import { useNavigate } from "react-router-dom";
import {
  User,
  ShieldCheck,
  Info,
  LogOut,
} from "lucide-react";

function AdminSettings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // FUTURE BACKEND:
    // Clear admin authentication/session data here
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          Administration
        </p>

        <h1 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
          Settings
        </h1>

        <p className="mt-1 max-w-xl text-sm text-gray-500">
          Manage your admin profile and portal preferences.
        </p>
      </header>

      <div className="space-y-5 p-4 sm:p-6 lg:space-y-6 lg:p-8">
        {/* Admin Profile */}
        <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
              <User className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h2 className="font-bold text-gray-900">
                Admin Profile
              </h2>

              <p className="text-xs text-gray-500">
                Your administrator account information.
              </p>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Name
              </label>

              <input
                type="text"
                value="MandiMitra Admin"
                readOnly
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500">
                Email
              </label>

              <input
                type="email"
                value="admin@mandimitra.com"
                readOnly
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none"
              />
            </div>
          </div>
        </section>

        {/* Verification Settings */}
        <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h2 className="font-bold text-gray-900">
                Verification Settings
              </h2>

              <p className="text-xs text-gray-500">
                Configure how user verification is handled.
              </p>
            </div>
          </div>

          <div className="space-y-3 p-4 sm:p-5">
            <div className="flex flex-col gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  Manual Verification
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Review Farmer, Buyer and FPO applications before
                  approval.
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Enabled
              </span>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  Verified Badge
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Approved users receive a verified status on the
                  platform.
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Enabled
              </span>
            </div>
          </div>
        </section>

        {/* Portal Information */}
        <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Info className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h2 className="font-bold text-gray-900">
                Portal Information
              </h2>

              <p className="text-xs text-gray-500">
                Basic information about the MandiMitra admin portal.
              </p>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
            <div>
              <p className="text-xs text-gray-500">Platform</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                MandiMitra
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Portal</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                Admin Portal
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Version</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                Prototype v1.0
              </p>
            </div>
          </div>
        </section>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <LogOut className="h-4 w-4" />
          Logout from Admin Portal
        </button>
      </div>
    </div>
  );
}

export default AdminSettings;

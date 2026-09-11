import {
  Clock3,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  getVerificationRequests,
} from "../../services/adminStorage";

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  // Load verification data
  useEffect(() => {
    const loadRequests = () => {
      setRequests(getVerificationRequests());
    };

    loadRequests();

    // Update dashboard when verification status changes
    window.addEventListener(
      "admin-verification-updated",
      loadRequests
    );

    return () => {
      window.removeEventListener(
        "admin-verification-updated",
        loadRequests
      );
    };
  }, []);

  // Calculate statistics
  const pendingCount = requests.filter(
    (request) => request.status === "pending"
  ).length;

  const verifiedCount =
    86 +
    requests.filter(
      (request) => request.status === "verified"
    ).length;

  const rejectedCount =
    4 +
    requests.filter(
      (request) => request.status === "rejected"
    ).length;

  const stats = [
    {
      label: "Pending Verification",
      value: pendingCount,
      icon: Clock3,
      style: "bg-orange-50 text-orange-600",
    },
    {
      label: "Verified Users",
      value: verifiedCount,
      icon: CheckCircle2,
      style: "bg-green-50 text-green-600",
    },
    {
      label: "Rejected",
      value: rejectedCount,
      icon: XCircle,
      style: "bg-red-50 text-red-600",
    },
  ];

  // Show only pending requests on dashboard
  const pendingRequests = requests.filter(
    (request) => request.status === "pending"
  );

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <AdminSidebar />

      <main className="min-w-0 flex-1">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Admin Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900">
            Good morning, Admin 👋
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage user verification and platform activity.
          </p>
        </header>

        <div className="space-y-7 p-6 sm:p-8">
          {/* Statistics */}
          <section className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">
                        {stat.label}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.style}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Verification Requests */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h2 className="font-bold text-gray-900">
                  Verification Requests
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Users waiting for admin verification.
                </p>
              </div>

              <Link
                to="/admin/verification"
                className="flex items-center gap-1 text-xs font-semibold text-green-700 transition hover:text-green-800"
              >
                View All
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Pending Users */}
            <div className="divide-y divide-gray-100">
              {pendingRequests.length > 0 ? (
                pendingRequests.slice(0, 4).map((request) => (
                  <div
                    key={request.id}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {request.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {request.role} • {request.location}
                      </p>
                    </div>

                    <Link
                      to="/admin/verification"
                      className="flex w-fit items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
                    >
                      Review
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="px-5 py-10 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-green-500" />

                  <p className="mt-3 text-sm font-semibold text-gray-700">
                    All caught up!
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    There are no pending verification requests.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;


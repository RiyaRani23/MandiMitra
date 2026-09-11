import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import { getVerificationRequests } from "../../services/adminStorage";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const loadUsers = () => {
      setUsers(getVerificationRequests());
    };

    loadUsers();

    window.addEventListener(
      "admin-verification-updated",
      loadUsers
    );

    return () => {
      window.removeEventListener(
        "admin-verification-updated",
        loadUsers
      );
    };
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText);

    const matchesRole =
      role === "All" || user.role === role;

    const matchesStatus =
      status === "All" || user.status === status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusStyle = (userStatus) => {
    if (userStatus === "verified") {
      return "bg-green-50 text-green-700";
    }

    if (userStatus === "rejected") {
      return "bg-red-50 text-red-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <AdminSidebar />

      <main className="min-w-0 flex-1">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            User Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900">
            All Users
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage registered Farmers, Buyers and FPOs.
          </p>
        </header>

        <div className="p-6 sm:p-8">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            {/* Filters */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5">
              <div>
                <h2 className="font-bold text-gray-900">
                  Registered Users
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {filteredUsers.length} users found
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Role */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />

                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-8 pr-8 text-sm outline-none focus:border-green-500"
                  >
                    <option value="All">All Roles</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Buyer">Buyer</option>
                    <option value="FPO">FPO</option>
                  </select>
                </div>

                {/* Status */}
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-green-500"
                >
                  <option value="All">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 text-left">
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                      User
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                      Role
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                      Location
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                      Status
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {user.email}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {user.role}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {user.location}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${getStatusStyle(
                            user.status
                          )}`}
                        >
                          {user.status === "verified" && (
                            <CheckCircle2 className="h-3 w-3" />
                          )}

                          {user.status === "rejected" && (
                            <XCircle className="h-3 w-3" />
                          )}

                          {user.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() => setSelectedUser(user)}
                          className="flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredUsers.length === 0 && (
                <div className="px-5 py-12 text-center">
                  <p className="text-sm font-semibold text-gray-700">
                    No users found
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Try changing your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Simple User Details */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                  User Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  {selectedUser.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                className="text-sm font-semibold text-gray-400 hover:text-gray-700"
              >
                Close
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Email</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {selectedUser.email}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Role</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {selectedUser.role}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Location</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {selectedUser.location}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Status</p>
                <p className="mt-1 text-sm font-semibold capitalize text-gray-900">
                  {selectedUser.status}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedUser(null)}
              className="mt-5 w-full rounded-xl bg-green-700 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersPage;

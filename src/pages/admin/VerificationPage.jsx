import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";

import VerificationTable from "../../components/admin/VerificationTable";
import VerificationModal from "../../components/admin/VerificationModal";

import {
  getVerificationRequests,
  updateVerificationStatus,
} from "../../services/adminStorage";

function VerificationPage() {
  const [requests, setRequests] = useState(
    getVerificationRequests()
  );
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  useEffect(() => {
    const loadRequests = () => {
      setRequests(getVerificationRequests());
    };

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

  // Show only pending requests
  const pendingRequests = requests.filter(
    (request) => request.status === "pending"
  );

  // Search and role filtering
  const filteredRequests = pendingRequests.filter((request) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      request.name.toLowerCase().includes(searchText) ||
      request.email.toLowerCase().includes(searchText);

    const matchesRole =
      role === "All" || request.role === role;

    return matchesSearch && matchesRole;
  });

  const handleView = (request) => {
    setSelectedUser(request);
  };

  const handleApprove = (user) => {
    const updatedRequests = updateVerificationStatus(
      user.id,
      "verified"
    );

    setRequests(updatedRequests);
    setSelectedUser(null);
  };

  const handleReject = (user) => {
    const updatedRequests = updateVerificationStatus(
      user.id,
      "rejected"
    );

    setRequests(updatedRequests);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          User Management
        </p>

        <h1 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
          Verify Users
        </h1>

        <p className="mt-1 max-w-xl text-sm text-gray-500">
          Review and verify Farmer, Buyer and FPO registrations.
        </p>
      </header>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-bold text-gray-900">
                Pending Requests
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {filteredRequests.length}{" "}
                {filteredRequests.length === 1
                  ? "request"
                  : "requests"}{" "}
                waiting for review
              </p>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:w-56"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-8 pr-8 text-sm outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:w-auto"
                >
                  <option value="All">All Roles</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Buyer">Buyer</option>
                  <option value="FPO">FPO</option>
                </select>
              </div>
            </div>
          </div>

          {/* Verification Table */}
          <VerificationTable
            requests={filteredRequests}
            onView={handleView}
          />
        </div>
      </div>

      {/* Verification Modal */}
      {selectedUser && (
        <VerificationModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  );
}

export default VerificationPage;


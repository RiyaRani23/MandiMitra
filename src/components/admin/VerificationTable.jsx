import { Eye, CheckCircle } from "lucide-react";

const VerificationTable = ({ requests, onView }) => {
  const getStatusStyle = (status) => {
    if (status === "verified") {
      return "bg-green-50 text-green-600";
    }

    if (status === "rejected") {
      return "bg-red-50 text-red-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-left">
            <th className="px-5 py-3 text-xs font-semibold text-gray-500">
              Applicant
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
          {requests.map((request) => (
            <tr
              key={request.id}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
            >
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-gray-900">
                  {request.name}
                </p>

                <p className="text-xs text-gray-500">
                  {request.email}
                </p>
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {request.role}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {request.location}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${getStatusStyle(
                    request.status
                  )}`}
                >
                  {request.status}
                </span>
              </td>

              <td className="px-5 py-4">
                <button
                  type="button"
                  onClick={() => onView(request)}
                  className="flex min-h-9 items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
                >
                  <Eye className="h-3.5 w-3.5" />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {requests.length === 0 && (
        <div className="px-5 py-12 text-center">
          <CheckCircle className="mx-auto h-8 w-8 text-green-500" />

          <p className="mt-3 text-sm font-semibold text-gray-700">
            No pending requests
          </p>

          <p className="mt-1 text-xs text-gray-500">
            All verification requests have been processed.
          </p>
        </div>
      )}
    </div>
  );
};

export default VerificationTable;
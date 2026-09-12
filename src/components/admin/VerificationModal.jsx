import {
  X,
  CheckCircle,
  XCircle,
  User,
  MapPin,
  Mail,
} from "lucide-react";

const VerificationModal = ({
  user,
  onClose,
  onApprove,
  onReject,
}) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
              Verification Request
            </p>

            <h2 className="mt-1 text-lg font-bold text-gray-900">
              Applicant Details
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close verification modal"
            className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Details */}
        <div className="space-y-4 p-4 sm:p-5">
          {/* Applicant */}
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
              <User className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h3 className="truncate font-bold text-gray-900">
                {user.name}
              </h3>

              <span className="mt-1 inline-block rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-600">
                {user.role}
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 p-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="text-xs">Email</span>
              </div>

              <p className="mt-1 break-all text-sm font-medium text-gray-800">
                {user.email}
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 p-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-xs">Location</span>
              </div>

              <p className="mt-1 break-words text-sm font-medium text-gray-800">
                {user.location}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-3">
            <p className="text-xs font-semibold text-orange-700">
              Verification Status
            </p>

            <p className="mt-1 text-sm text-orange-600">
              This application is waiting for admin review.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 flex flex-col gap-2 border-t border-gray-100 bg-white px-4 py-4 sm:flex-row sm:gap-3 sm:px-5">
          <button
            type="button"
            onClick={() => onReject(user)}
            className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <XCircle className="h-4 w-4" />
            Reject
          </button>

          <button
            type="button"
            onClick={() => onApprove(user)}
            className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <CheckCircle className="h-4 w-4" />
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;

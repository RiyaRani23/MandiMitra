import { Link, useLocation } from "react-router-dom";

function VerificationPending() {
  const location = useLocation();

  // Role comes from the registration page
  const role = location.state?.role || "User";

  const roleNames = {
    farmer: "Farmer",
    buyer: "Buyer",
    fpo: "FPO",
  };

  const roleName = roleNames[role] || role;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 px-4 py-10">

      {/* Logo */}
      <div className="mb-10 text-center">
        <Link
          to="/"
          className="text-3xl font-bold text-green-700"
        >
          Mandi<span className="text-orange-500">Mitra</span>
        </Link>
      </div>

      {/* Card */}
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl sm:p-10">

        {/* Status Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100">
          <span className="text-5xl">⏳</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Registration Successful!
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Your {roleName} profile has been submitted successfully.
        </p>

        {/* Status */}
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
          Pending Verification
        </div>

        {/* Information */}
        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-left">

          <h2 className="font-semibold text-gray-800">
            What happens next?
          </h2>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                1
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Details Submitted
                </p>

                <p className="text-sm text-gray-500">
                  Your registration details have been received.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-yellow-700">
                2
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Verification
                </p>

                <p className="text-sm text-gray-500">
                  Your profile will be reviewed by the MandiMitra
                  verification team.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                3
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Verified Account
                </p>

                <p className="text-sm text-gray-500">
                  After approval, your profile will receive a
                  Verified badge.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Note */}
        <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
          <strong>Current status:</strong> Your account is waiting
          for verification. You will be able to access verified
          marketplace features after approval.
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            to="/"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Back to Home
          </Link>

          <Link
            to="/login"
            className="w-full rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Go to Login
          </Link>

        </div>

      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-gray-500">
        MandiMitra — Sahi Mandi, Sahi Daam.
      </p>

    </div>
  );
}

export default VerificationPending;
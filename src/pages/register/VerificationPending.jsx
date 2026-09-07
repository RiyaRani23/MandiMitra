import { Link, useLocation } from "react-router-dom";

const VerificationPending = () => {
  const location = useLocation();

  const role = location.state?.role || "user";

  const roleNames = {
    farmer: "Farmer",
    buyer: "Buyer",
    fpo: "FPO",
  };

  const roleName = roleNames[role] || "User";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Top Section */}
          <div className="px-6 sm:px-10 pt-10 pb-8 text-center">

            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-3xl">✓</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Account Created Successfully!
            </h1>

            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Your {roleName} account has been created successfully.
            </p>
          </div>

          {/* Status Cards */}
          <div className="px-6 sm:px-10 pb-8">

            <div className="grid sm:grid-cols-2 gap-4">

              {/* Mobile Verified */}
              <div className="border border-green-200 bg-green-50 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Mobile Verified
                    </p>
                    <p className="text-sm text-green-700">
                      OTP verification completed
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Pending */}
              <div className="border border-orange-200 bg-orange-50 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white">!</span>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Verification Pending
                    </p>
                    <p className="text-sm text-orange-700">
                      Your profile is waiting for verification
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* What Happens Next */}
          <div className="border-t border-gray-100 px-6 sm:px-10 py-8">

            <h2 className="text-xl font-bold text-gray-900 mb-6">
              What happens next?
            </h2>

            <div className="space-y-5">

              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold shrink-0">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Account Created
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Your MandiMitra account is ready.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold shrink-0">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Mobile Number Verified
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Your mobile number has been successfully verified.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold shrink-0">
                  3
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Profile Verification
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Your profile is now waiting for verification.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-semibold shrink-0">
                  4
                </div>

                <div>
                  <h3 className="font-semibold text-gray-400">
                    Verified Participant
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    You'll receive the Verified status after successful verification.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Information */}
          <div className="mx-6 sm:mx-10 mb-8 p-4 rounded-2xl bg-blue-50 border border-blue-100">
            <div className="flex gap-3">
              <span className="text-blue-600 text-lg">ℹ</span>

              <p className="text-sm text-blue-800 leading-relaxed">
                You can log in and use MandiMitra features while your
                profile verification is pending.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="px-6 sm:px-10 pb-10 flex flex-col sm:flex-row gap-3">

            <Link
              to="/login"
              className="flex-1 text-center bg-green-600 hover:bg-green-700
                         text-white font-semibold py-3.5 rounded-xl transition"
            >
              Go to Login
            </Link>

            <Link
              to="/"
              className="flex-1 text-center border border-gray-200
                         hover:bg-gray-50 text-gray-700 font-semibold
                         py-3.5 rounded-xl transition"
            >
              Back to Home
            </Link>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-5">
          MandiMitra • Sahi Mandi, Sahi Daam
        </p>

      </div>
    </div>
  );
};

export default VerificationPending;
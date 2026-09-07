import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "farmer";
  const mobile = location.state?.mobile || "your mobile number";

  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    // Prototype OTP
    if (otp === "123456") {
      navigate("/verification-pending", {
        state: { role },
      });
    } else {
      alert("Invalid OTP. For prototype, use 123456.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
            M
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Verify Your Mobile
          </h1>

          <p className="text-gray-500 mt-2">
            We've sent a verification code to
          </p>

          <p className="font-semibold text-gray-800 mt-1">
            {mobile}
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleVerify}>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter OTP
          </label>

          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-4 text-center text-xl tracking-[0.5em]
                       rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <p className="text-xs text-gray-500 text-center mt-3">
            Prototype OTP: <strong>123456</strong>
          </p>

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 hover:bg-green-700
                       text-white font-semibold py-3.5 rounded-xl
                       transition"
          >
            Verify & Continue
          </button>
        </form>

        {/* Resend */}
        <div className="text-center mt-6">
          <button
            type="button"
            className="text-green-600 font-medium hover:underline"
            onClick={() => alert("OTP resent!")}
          >
            Resend OTP
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Your mobile number helps us secure your MandiMitra account.
        </p>

      </div>
    </div>
  );
};

export default OTPVerification;
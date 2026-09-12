import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.jpeg";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "farmer";

  // Manage mobile state so user can change it inline
  const [mobile, setMobile] = useState(
    location.state?.mobile || "+91 98765 43210",
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tempMobile, setTempMobile] = useState(mobile);

  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    // Prototype OTP
    if (otp === "123456") {
      navigate("/verification-pending", {
        state: { role, mobile },
      });
    } else {
      alert("Invalid OTP. For prototype, use 123456.");
    }
  };

  const handleSaveMobile = (e) => {
    e.preventDefault();
    if (tempMobile.trim().length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    setMobile(tempMobile);
    setIsEditing(false);
    // Optional: trigger a backend action to send a new OTP to the updated number
    alert(`New OTP sent to ${tempMobile} (Prototype OTP: 123456)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-green-100 p-8 transition-all">
        {/* Asset Logo & Branding */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white shadow-md shadow-green-100 border border-green-50 overflow-hidden p-2">
            <img
              src={logoImage}
              alt="MandiMitra Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-xl font-extrabold tracking-tight">
            <span className="text-green-800">Mandi</span>
            <span className="text-orange-500">Mitra</span>
          </h2>

          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            Verify Your Mobile
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            We've sent a verification code to
          </p>

          {/* Mobile Display with Edit/Change Option */}
          {!isEditing ? (
            <div className="mt-2 inline-flex items-center gap-2 bg-green-50 py-1.5 px-3.5 rounded-xl border border-green-100">
              <span className="font-semibold text-gray-800 text-sm">
                {mobile}
              </span>
              <button
                type="button"
                onClick={() => {
                  setTempMobile(mobile);
                  setIsEditing(true);
                }}
                className="text-xs text-green-700 font-semibold hover:text-green-800 underline transition"
              >
                Change
              </button>
            </div>
          ) : (
            /* Inline Form to Change Mobile Number */
            <form
              onSubmit={handleSaveMobile}
              className="mt-3 flex items-center justify-center gap-2"
            >
              <input
                type="tel"
                value={tempMobile}
                onChange={(e) => setTempMobile(e.target.value)}
                className="w-48 px-3 py-1.5 text-sm bg-white border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter new number"
                autoFocus
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-600 text-xs px-2 py-1"
              >
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* OTP Form */}
        <form onSubmit={handleVerify}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter 6-digit OTP
          </label>

          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="••••••"
            className="w-full px-4 py-4 text-center text-2xl tracking-[0.5em] font-mono
                       rounded-xl border border-gray-200 bg-gray-50/50
                       focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                       transition-all"
          />

          <p className="text-xs text-gray-500 text-center mt-3">
            Prototype OTP: <strong className="text-green-700">123456</strong>
          </p>

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 hover:bg-green-700 active:scale-[0.98]
                       text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-green-600/20
                       transition-all duration-200"
          >
            Verify & Continue
          </button>
        </form>

        {/* Resend */}
        <div className="text-center mt-6">
          <button
            type="button"
            className="text-sm text-green-600 font-medium hover:text-green-700 hover:underline transition"
            onClick={() => alert(`OTP resent to ${mobile}!`)}
          >
            Didn't receive code? Resend OTP
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

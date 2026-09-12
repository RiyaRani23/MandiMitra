import { Link } from "react-router-dom";
import { Sprout, Handshake, Building2, ArrowRight } from "lucide-react";
import { logoImg } from "../../assets/assets.js";

function Register() {
  const roles = [
    {
      title: "Farmer",
      description: "Discover real-time mandi prices, connect with verified buyers, and sell produce with complete pricing transparency.",
      icon: <Sprout size={26} strokeWidth={1.8} />,
      path: "/register/farmer",
      badge: "Grow & Sell",
      cardBg: "hover:border-emerald-500/50 hover:shadow-emerald-950/10",
      iconBg: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
      btnColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      title: "Buyer",
      description: "Source premium agricultural harvest directly, discover verified FPOs, and post your exact procurement requirements.",
      icon: <Handshake size={26} strokeWidth={1.8} />,
      path: "/register/buyer",
      badge: "Source & Trade",
      cardBg: "hover:border-blue-500/50 hover:shadow-blue-950/10",
      iconBg: "bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
      btnColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "FPO",
      description: "Empower your community by aggregating farmer produce and unlocking direct access to reliable bulk buyers.",
      icon: <Building2 size={26} strokeWidth={1.8} />,
      path: "/register/fpo",
      badge: "Aggregate & Scale",
      cardBg: "hover:border-amber-500/50 hover:shadow-amber-950/10",
      iconBg: "bg-amber-50 text-amber-700 group-hover:bg-[#f7941d] group-hover:text-white",
      btnColor: "bg-[#f7941d] hover:bg-[#e8850b]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f4f0e6] via-[#f7f5ed] to-[#ede7d9] px-4 sm:px-8 py-6 sm:py-10 overflow-hidden flex flex-col justify-between">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between pb-6 sm:pb-10">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#f7941d] shadow-md transition-transform duration-300 group-hover:scale-105">
              <img src={logoImg} alt="MandiMitra Logo" className="h-full w-full object-cover" />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight text-[#113329]">
                <span>Mandi</span>
                <span className="text-[#f7941d]">Mitra</span>
              </div>
              <div className="text-[8px] font-bold tracking-[1.5px] text-[#58706b] uppercase">
                Sahi Mandi, Sahi Daam
              </div>
            </div>
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-[#153d32]/20 bg-white/60 px-4 py-2 text-xs font-semibold text-[#153d32] backdrop-blur-md transition-all hover:bg-[#153d32] hover:text-white shadow-sm"
          >
            Already registered? <span className="underline ml-1">Login</span>
          </Link>
        </div>

        {/* Compact Hero Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#113329]">
            Select Your Role to <span className="text-[#f7941d]">Continue</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#58706b]">
            Choose your account type below to get started with MandiMitra.
          </p>
        </div>

        {/* Role Selection Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {roles.map((role) => (
            <Link
              key={role.title}
              to={role.path}
              className={`group relative flex flex-col justify-between rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${role.cardBg}`}
            >
              <div>
                {/* Top Bar with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 shadow-sm ${role.iconBg}`}>
                    {role.icon}
                  </div>

                  <span className="rounded-full bg-gray-100/80 px-3 py-1 text-[10px] font-semibold text-gray-700 tracking-wide">
                    {role.badge}
                  </span>
                </div>

                {/* Role Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#113329] tracking-tight">
                  {role.title}
                </h2>

                {/* Role Description */}
                <p className="mt-2 text-xs leading-relaxed text-[#58706b]">
                  {role.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className={`inline-flex items-center justify-between w-full rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 group-hover:scale-[1.02] ${role.btnColor}`}>
                  <span>Continue as {role.title}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Terms Notice */}
        <div className="mt-8 sm:mt-10 text-center text-[11px] text-[#58706b]">
          <p>
            By continuing, you agree to MandiMitra's{" "}
            <Link to="/terms" className="underline font-medium text-[#113329] hover:text-[#f7941d]">Terms</Link> &{" "}
            <Link to="/privacy-policy" className="underline font-medium text-[#113329] hover:text-[#f7941d]">Privacy Policy</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;
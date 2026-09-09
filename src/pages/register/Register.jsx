import { Link } from "react-router-dom";
import { Sprout, Handshake, Building2 } from "lucide-react";
import { logoImg } from "../../assets/assets.js";

function Register() {
  const roles = [
    {
      title: "Farmer",
      description: "Find better prices, connect with buyers and sell your produce with confidence.",
      icon: <Sprout size={32} strokeWidth={1.8} />,
      path: "/register/farmer",
    },
    {
      title: "Buyer",
      description: "Discover verified farmers and FPOs and source quality agricultural produce.",
      icon: <Handshake size={32} strokeWidth={1.8} />,
      path: "/register/buyer",
    },
    {
      title: "FPO",
      description: "Aggregate farmer produce and connect directly with reliable bulk buyers.",
      icon: <Building2 size={32} strokeWidth={1.8} />,
      path: "/register/fpo",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] px-6 py-5">
      <div className="px-20 pb-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f7941d]">
            <span className="text-xl text-white"><img src={logoImg} className="rounded-md" /></span>
          </div>

          <div className="leading-none">
            <span className="text-[19px] font-bold text-green-700">
              Mandi
            </span>
            <span className="text-[19px] font-bold text-[#f7941d]">
              Mitra
            </span>

            <div className="mt-1 text-[10px] tracking-[0.5px] text-grey-200/80">
              SAHI MANDI, SAHI DAAM
            </div>
          </div>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#ee9c45]">
          JOIN MANDIMITRA
        </p>

        <h1 className="mx-auto mt-4 max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-[#153d32]">
          How would you like to
          <br />
          continue?
        </h1>

        <p className="mt-5 text-[16px] text-[#58706b]">
          Select your role to access your MandiMitra account.
        </p>
      </div>

      {/* Role Cards */}
      <div className="mx-auto mt-11 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {roles.map((role) => (
          <Link
            key={role.title}
            to={role.path}
            className="group rounded-[22px] border border-[#d8dfd8] bg-white px-8 py-7 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Icon */}
            <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[#e8f0e5] text-[#24734f] transition-colors group-hover:bg-[#dcebd8]">
              {role.icon}
            </div>

            {/* Title */}
            <h2 className="mt-7 text-[27px] font-medium text-[#123b30]">
              {role.title}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-[#6c7c78]">
              {role.description}
            </p>

            {/* Continue */}
            <div className="mt-6 text-sm font-semibold text-[#24734f] opacity-0 transition-opacity group-hover:opacity-100">
              Continue →
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        By continuing, you agree to MandiMitra's terms and policies.
      </p>
    </div>
  );
}

export default Register;
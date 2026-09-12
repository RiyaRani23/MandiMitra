import { Link } from "react-router-dom";
import { Sprout, ShoppingBag, Users, ArrowRight } from "lucide-react";

function Features() {
  const roles = [
    {
      title: "For Farmers",
      description:
        "Compare mandi prices, discover buyers and get better opportunities to sell your produce.",
      icon: Sprout,
      badge: "Grow & Earn",
      link: "/register/farmer",
      accentColor: "from-emerald-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/40",
      textColor: "text-emerald-700",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      title: "For Buyers",
      description:
        "Find verified farmers and FPOs and post your purchasing requirements directly.",
      icon: ShoppingBag,
      badge: "Sourcing Made Easy",
      link: "/register/buyer",
      accentColor: "from-amber-500/10 to-transparent",
      borderColor: "hover:border-amber-500/40",
      textColor: "text-amber-700",
      buttonBg: "bg-[#f7941d] hover:bg-[#e8850b]",
    },
    {
      title: "For FPOs",
      description:
        "Aggregate produce and connect directly with bulk buyers to secure better market rates.",
      icon: Users,
      badge: "Collective Power",
      link: "/register",
      accentColor: "from-blue-500/10 to-transparent",
      borderColor: "hover:border-blue-500/40",
      textColor: "text-blue-700",
      buttonBg: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f3f4ee] to-[#f8f8f3] px-4 sm:px-8 py-20 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-1.5 border border-emerald-600/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#168451]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[2.5px] text-[#168451]">
              MULTIPLE OPPORTUNITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163b31]">
            One Platform, <span className="text-[#f7941d]">Endless Value</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Whether you cultivate, purchase, or aggregate, MandiMitra connects you with the right agricultural network.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <div
                key={index}
                className={`group relative flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${role.borderColor}`}
              >
                {/* Background Gradient Accent */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${role.accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 shadow-inner text-[#163b31] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#168451] group-hover:text-white">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-semibold text-gray-600">
                      {role.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold ${role.textColor}`}>
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {role.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    to={role.link}
                    className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 transition-colors hover:text-[#168451]"
                  >
                    <span>Learn more</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#168451] group-hover/link:text-white">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;
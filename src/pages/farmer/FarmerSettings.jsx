import {
  Bell,
  Lock,
  Globe,
  UserRound,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const FarmerSettings = () => {
  const settingsItems = [
    {
      title: "Account Information",
      description: "Manage your basic account details",
      icon: UserRound,
    },
    {
      title: "Notifications",
      description: "Manage alerts and notification preferences",
      icon: Bell,
    },
    {
      title: "Password & Security",
      description: "Update your password and security settings",
      icon: Lock,
    },
    {
      title: "Language",
      description: "Choose your preferred language",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">
          Farmer Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your account and application preferences.
        </p>
      </div>

      <div className="max-w-4xl space-y-5">
        {/* Settings List */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                className={`flex w-full items-center gap-4 p-5 text-left transition hover:bg-gray-50 ${
                  index !== settingsItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                  <Icon
                    size={20}
                    className="text-green-700"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.description}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-gray-400"
                />
              </button>
            );
          })}
        </div>

        {/* Verification */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
              <ShieldCheck
                size={20}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Account Verification
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Your farmer account is verified and can be used
                to connect with buyers and FPOs.
              </p>

              <span className="mt-3 inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Future Backend */}
        {/* 
          FUTURE BACKEND:
          - Save notification preferences
          - Change password through Spring Boot
          - Update account information
          - Store language preference
        */}
      </div>
    </div>
  );
};

export default FarmerSettings;
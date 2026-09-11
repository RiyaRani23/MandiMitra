import {
  Building2,
  MapPin,
  Phone,
  Mail,
  User,
  ShieldCheck,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-full bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-medium text-green-600">
          FPO Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View and manage your FPO information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl rounded-2xl bg-white shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col gap-5 border-b border-gray-100 p-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-700">
            F
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">
                FPO Admin
              </h2>

              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                <ShieldCheck size={14} />
                Verified FPO
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              FPO Administrator
            </p>
          </div>
        </div>

        {/* Information */}
        <div className="p-6">
          <h3 className="mb-5 text-lg font-bold text-gray-900">
            FPO Information
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-gray-500">
                <Building2 size={17} />
                <span className="text-xs font-medium">
                  FPO Name
                </span>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                Maharashtra Farmers Producer Organization
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-gray-500">
                <User size={17} />
                <span className="text-xs font-medium">
                  Administrator
                </span>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                FPO Admin
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-gray-500">
                <Phone size={17} />
                <span className="text-xs font-medium">
                  Phone
                </span>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                +91 98XXXXXX42
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-gray-500">
                <Mail size={17} />
                <span className="text-xs font-medium">
                  Email
                </span>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                fpo@example.com
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={17} />
                <span className="text-xs font-medium">
                  Location
                </span>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                Nashik, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Future Backend Note */}
        <div className="border-t border-gray-100 p-6">
          <div className="rounded-xl border border-green-100 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-800">
              Verified FPO
            </p>

            <p className="mt-1 text-xs leading-5 text-green-700">
              Your FPO profile has been verified and is ready to
              connect with farmers and buyers.
            </p>
          </div>

          {/* FUTURE BACKEND:
              Fetch FPO profile information from Spring Boot API.
              Allow profile updates through the backend.
          */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
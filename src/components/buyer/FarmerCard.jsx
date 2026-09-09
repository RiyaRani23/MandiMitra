import { MapPin, ShieldCheck, Wheat } from "lucide-react";

const FarmerCard = ({ farmer }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4eb] font-semibold text-[#197044]">
            {farmer.name.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold text-[#123c2c]">
              {farmer.name}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
              <MapPin size={13} />
              {farmer.location}
            </p>
          </div>
        </div>

        {farmer.verified && (
          <ShieldCheck size={19} className="text-[#197044]" />
        )}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#f6f8f5] p-3">
          <p className="text-xs text-gray-500">Produce</p>
          <p className="mt-1 flex items-center gap-1 text-sm font-medium text-gray-800">
            <Wheat size={14} />
            {farmer.crop}
          </p>
        </div>

        <div className="rounded-xl bg-[#f6f8f5] p-3">
          <p className="text-xs text-gray-500">Quality</p>
          <p className="mt-1 text-sm font-medium text-gray-800">
            {farmer.grade}
          </p>
        </div>

        <div className="rounded-xl bg-[#f6f8f5] p-3">
          <p className="text-xs text-gray-500">Available</p>
          <p className="mt-1 text-sm font-medium text-gray-800">
            {farmer.quantity} Quintals
          </p>
        </div>

        <div className="rounded-xl bg-[#f6f8f5] p-3">
          <p className="text-xs text-gray-500">Expected Price</p>
          <p className="mt-1 text-sm font-medium text-[#123c2c]">
            ₹{farmer.price.toLocaleString("en-IN")}/q
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
          View Profile
        </button>

        <button className="flex-1 rounded-xl bg-[#123c2c] px-3 py-2.5 text-xs font-medium text-white hover:bg-[#0d3024]">
          Make Offer
        </button>
      </div>
    </div>
  );
};

export default FarmerCard;
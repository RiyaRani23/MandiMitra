import { useState } from "react";

const LocationSelector = ({ onLocationChange }) => {
  const [pincode, setPincode] = useState("");

  const [location, setLocation] = useState({
    state: "",
    district: "",
    area: "",
  });

  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePincodeChange = async (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setPincode(value);
    setError("");

    if (value.length !== 6) {
      setLocation({
        state: "",
        district: "",
        area: "",
      });

      setPostOffices([]);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.postalpincode.in/pincode/${value}`
      );

      const data = await response.json();

      if (
        data[0].Status !== "Success" ||
        !data[0].PostOffice ||
        data[0].PostOffice.length === 0
      ) {
        setError("Invalid pincode. Please check and try again.");

        setLocation({
          state: "",
          district: "",
          area: "",
        });

        setPostOffices([]);
        return;
      }

      const offices = data[0].PostOffice;

      setPostOffices(offices);

      const firstPostOffice = offices[0];

      const newLocation = {
        state: firstPostOffice.State,
        district: firstPostOffice.District,
        area: "",
      };

      setLocation(newLocation);

      if (onLocationChange) {
        onLocationChange({
          pincode: value,
          state: firstPostOffice.State,
          district: firstPostOffice.District,
          area: "",
        });
      }
    } catch {
      setError("Unable to fetch location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAreaChange = (e) => {
    const selectedArea = e.target.value;

    setLocation((prev) => ({
      ...prev,
      area: selectedArea,
    }));

    if (onLocationChange) {
      onLocationChange({
        pincode,
        state: location.state,
        district: location.district,
        area: selectedArea,
      });
    }
  };

  return (
    <div className="space-y-5">
      {/* Pincode */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Pincode
        </label>

        <input
          type="text"
          value={pincode}
          onChange={handlePincodeChange}
          maxLength="6"
          placeholder="Enter 6-digit pincode"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
        />

        {loading && (
          <p className="mt-2 text-sm text-gray-500">
            Detecting location...
          </p>
        )}

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>

      {/* State + District */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            State
          </label>

          <input
            type="text"
            value={location.state}
            readOnly
            placeholder="State will be detected"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            District
          </label>

          <input
            type="text"
            value={location.district}
            readOnly
            placeholder="District will be detected"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />
        </div>
      </div>

      {/* Area / Post Office */}
      {postOffices.length > 0 && (
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Area / Post Office
          </label>

          <select
            value={location.area}
            onChange={handleAreaChange}
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          >
            <option value="">Select Area / Post Office</option>

            {postOffices.map((office, index) => (
              <option key={index} value={office.Name}>
                {office.Name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
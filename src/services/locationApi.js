const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";

export const getLocationCoordinates = async (location) => {
  if (!location) {
    throw new Error("Location is required");
  }

  const url = new URL(NOMINATIM_URL);

  url.searchParams.set("q", `${location}, India`);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("countrycodes", "in");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Location API Error: ${response.status}`);
  }

  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found");
  }

  const address = data[0].address || {};

  return {
    latitude: Number(data[0].lat),
    longitude: Number(data[0].lon),
    displayName: data[0].display_name,

    // District can come under different Nominatim fields
    district:
      address.county ||
      address.state_district ||
      address.district ||
      "",

    state: address.state || "",
    address,
  };
};
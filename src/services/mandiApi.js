// ============================================================
// MANDIMITRA - MANDI API SERVICE
// ============================================================
//
// CURRENT PROTOTYPE:
// React directly calls the Government of India Mandi API.
//
// FUTURE BACKEND:
// React → Spring Boot → data.gov.in
//
// When Spring Boot is ready:
// 1. Replace the data.gov.in URL with our Spring Boot endpoint.
// 2. Remove the API key from the frontend.
// 3. Keep the function name and returned data structure similar
//    so existing UI components require minimal changes.
//
// ============================================================

const API_URL =
  "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";

export const fetchMandiPrices = async ({
  state,
  district,
  market,
  commodity,
  limit = 100,
  offset = 0,
} = {}) => {
  const url = new URL(API_URL);

  url.searchParams.set(
    "api-key",
    import.meta.env.VITE_MANDI_API_KEY
  );

  url.searchParams.set("format", "json");
  url.searchParams.set("limit", limit);
  url.searchParams.set("offset", offset);

  if (state) {
    url.searchParams.set("filters[state]", state);
  }

  if (district) {
    url.searchParams.set("filters[district]", district);
  }

  if (market) {
    url.searchParams.set("filters[market]", market);
  }

  if (commodity) {
    url.searchParams.set("filters[commodity]", commodity);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Mandi API Error: ${response.status}`);
  }

  return await response.json();
};

export const fetchMandiPricesForDistricts = async ({
  state,
  districts = [],
  commodity,
  limit = 100,
} = {}) => {
  const requests = districts.map((district) =>
    fetchMandiPrices({
      state,
      district,
      commodity,
      limit,
    })
  );

  const responses = await Promise.all(requests);

  return responses.flatMap((data) => data.records || []);
};
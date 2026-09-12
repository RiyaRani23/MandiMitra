const STORAGE_KEY = "mandimitra_verification_requests";

const defaultRequests = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    role: "Farmer",
    location: "Nashik, Maharashtra",
    status: "pending",
  },
  {
    id: 2,
    name: "ABC Traders",
    email: "abctraders@example.com",
    role: "Buyer",
    location: "Pune, Maharashtra",
    status: "pending",
  },
  {
    id: 3,
    name: "Nashik FPO",
    email: "nashikfpo@example.com",
    role: "FPO",
    location: "Nashik, Maharashtra",
    status: "pending",
  },
  {
    id: 4,
    name: "Suresh Patil",
    email: "suresh@example.com",
    role: "Farmer",
    location: "Aurangabad, Maharashtra",
    status: "pending",
  },
];

export const getVerificationRequests = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultRequests)
    );

    return defaultRequests;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error("Invalid verification data:", error);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultRequests)
    );

    return defaultRequests;
  }
};

export const updateVerificationStatus = (id, status) => {
  const requests = getVerificationRequests();

  const updatedRequests = requests.map((request) =>
    request.id === id
      ? { ...request, status }
      : request
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedRequests)
  );

  // Notify other admin pages about the update
  window.dispatchEvent(
    new Event("admin-verification-updated")
  );

  return updatedRequests;
};


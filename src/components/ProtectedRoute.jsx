import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRole }) {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Invalid user data:", error);
  }

  // User is not logged in
  if (!token || !user) {
    if (allowedRole === "admin") {
      return <Navigate to="/admin/login" replace />;
    }

    return <Navigate to="/login" replace />;
  }

  // User is logged in but does not have the required role
  if (allowedRole && user.role !== allowedRole) {
    const roleRoutes = {
      farmer: "/farmer",
      buyer: "/buyer",
      fpo: "/fpo",
      admin: "/admin",
    };

    return (
      <Navigate
        to={roleRoutes[user.role] || "/login"}
        replace
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;

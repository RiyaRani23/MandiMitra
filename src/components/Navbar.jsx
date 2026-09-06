import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-18 items-center justify-between border-b border-gray-200 bg-white px-8">
      <Link to="/" className="text-2xl font-bold">
        MandiMitra
      </Link>

      <div className="flex gap-8">
        <Link to="/" className="hover:text-green-600">
          Home
        </Link>

        <Link to="/login" className="hover:text-green-600">
          Login
        </Link>

        <Link to="/register" className="hover:text-green-600">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
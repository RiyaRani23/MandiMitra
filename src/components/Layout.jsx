import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="pt-[78px]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import FPODashboard from "./pages/FPODashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/fpo" element={<FPODashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
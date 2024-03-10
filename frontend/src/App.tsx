import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Rentdata from "./pages/Rentdata";
import BuildingDetails from "./components/BuildingDetails";
import FloorDetails from "./components/FloorDetails";
import CustomerDetails from "./components/CustomerDetails";
import BillDetails from "./components/BillDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rent-data" element={<Rentdata />} />
        <Route path="/building-details" element={<BuildingDetails />} />
        <Route path="/floor-details" element={<FloorDetails />} />
        <Route path="/customer-details" element={<CustomerDetails/>} />
        <Route path="/bill-details" element={<BillDetails/>} />
      </Routes>
    </div>
  );
};

export default App;

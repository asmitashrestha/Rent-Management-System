import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Rentdata from "./pages/Rentdata";
import BuildingDetails from "./components/BuildingDetails";
import FloorDetails from "./components/FloorDetails";
import CustomerDetails from "./components/CustomerDetails";
import BillForm from "./components/BillForm";
import Floor from "./components/Floor";
import Payment from "./components/Payment";
import EmptyFloorCard from "./components/floors/EmptyFloorCard";
import BillDetails from "./components/BillDetails";

const App = () => {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />

        {/* Private Routes */}
        <Route path="/rent-data" element={<Rentdata />} />
        <Route path="/building-details" element={<BuildingDetails />} />
        <Route path="/floor-details/:id" element={<FloorDetails />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/bill-details" element={<BillForm />} />
        <Route path="/floor-collection" element={<Floor number={1} onClick={handleClick} />}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/bill-status" element={<BillDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;

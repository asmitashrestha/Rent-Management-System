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
import Payment from "./components/Payment";

import MyFloor from "./pages/MyFloor";
import FloorSummary from "./pages/FloorSummary";
import FetchCustomer from "./components/FetchCustomer";
import FetchBill from "./pages/FetchBill";


const App = () => {
  

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
        <Route path="/customer-details/:id" element={<CustomerDetails />} />
        <Route path="/fetch-customer/:id" element={<FetchCustomer />} />
        <Route path="/bill-details/:id" element={<BillForm />} />
        <Route path="/my-floor" element={<MyFloor/>}/>
        <Route path="/floor-summary" element={<FloorSummary/>}/>
        <Route path="/fetch-bill/:id" element={<FetchBill/>}/>
        <Route path="/add-payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App;

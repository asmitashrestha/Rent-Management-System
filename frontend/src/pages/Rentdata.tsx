import { useState } from "react";
import BillDetails from "../components/BillDetails";
import BuildingDetails from "../components/BuildingDetails";
import CustomerDetails from "../components/CustomerDetails";
import FloorDetails from "../components/FloorDetails";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";

const Rentdata = () => {
  const [currentState, setCurrentState] = useState(1);

  const steps = [
    "Building Details",
    "Floor Details",
    "Customer Details",
    "Bill Details",
  ];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <BuildingDetails />;
        break;
      case 2:
        return <FloorDetails />;
        break;
      case 3:
        return <CustomerDetails />;
        break;
      case 4:
        return <BillDetails />;
        break;
      default:
        return <div></div>;
    }
  };
  return (
    <div className="md:w-1/2  mx-auto shadow-xl rounded-2xl pb-3 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentState={currentState} />
      </div>

      <StepperControl />
    </div>
  );
};

export default Rentdata;

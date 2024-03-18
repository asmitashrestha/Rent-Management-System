import CustomerComponent from "../CustomerComponent";
import EmptyFloorCard from "./EmptyFloorCard";
import FloorHeader from "./FloorHeader";

const FloorPage = () => {
  return (
    <div>
      <FloorHeader />
      <EmptyFloorCard />
      {/* <CustomerComponent /> */}
    </div>
  );
};

export default FloorPage;

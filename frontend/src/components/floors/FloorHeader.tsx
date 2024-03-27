import { useFloorStore } from "../../stores/FloorStore";
import RentBlock from "./RentBlock";

const FloorHeader = () => {
  const { floorData } = useFloorStore();

  return (
    <div className="flex flex-row gap-1 mx-1 bg-background">
      <RentBlock text="Floor" values={floorData.floorNumber} type="normal" />
      <RentBlock text="Rent" values={floorData.price} />
    </div>
  );
};

export default FloorHeader;

import { useEffect } from "react";
import { useBuildingStore } from "../../stores/BuildingStore";
import { useFloorStore } from "../../stores/FloorStore";
import { useNavigate } from "react-router-dom";

const ProxyMyFloor = () => {
  const fetchBuildingData = useBuildingStore(
    (state) => state.fetchBuildingData
  );
  const buildingData = useBuildingStore((state) => state.buildingData);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBuildingData();
  }, [fetchBuildingData]);

  const buildingFloors =
    buildingData.length > 0 ? buildingData[0].floors : undefined;

  const { setSelectedFloor } = useFloorStore();

  const handleFloorClick = (floor: number) => {
    setSelectedFloor(floor);
    navigate(`/floor`);
  };

  //converting number to array
  const floorNumbers: number[] = Array.from(
    { length: buildingFloors },
    (_, index) => index + 1
  );

  return (
    <>
      <ul>
        {floorNumbers.map((floor) => (
          <li
            key={floor}
            onClick={() => handleFloorClick(floor)}
            className="cursor-pointer"
          >
            Floor {floor}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProxyMyFloor;

import React, { useEffect, useState } from "react";
import { fetchbuilding } from "../../api-client"; // assuming api.js contains the fetchbuilding function
import { useNavigate } from "react-router-dom";

const MyFloor = () => {
  const [floors, setFloors] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchBuildingFloors() {
      try {
        const buildingFloors = await fetchbuilding();
        setFloors(buildingFloors);
      } catch (error) {
        console.error("Error fetching building floors", error);
      }
    }
    fetchBuildingFloors();
  }, []);

  const handleFloorNumber = (floorNumber) => {
    navigate(`/floor-details/${floorNumber}`)
    console.log("Floor number clicked:", floorNumber);
    // You can perform further actions with the floor number here
  };

  return (
    <div>
      {floors.map((floor, index) => (
        <div key={index}>
          {[...Array(floor.floors)].map((_, floorIndex) => (
            <div key={floorIndex} onClick={() => handleFloorNumber(floor.floors - floorIndex)}>
              Floor {floor.floors - floorIndex}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyFloor;


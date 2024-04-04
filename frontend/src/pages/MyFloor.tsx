import { useEffect } from "react";
import { useBuildingStore } from "../stores/BuildingStore";
import { useFloorStore } from "../stores/FloorStore";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import SideNavbar from "../components/Header/SideNavbar";

const MyFloor = () => {
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
    if (isNaN(floor)) {
      console.error("Invalid floor number:", floor);
      return;
    }
    setSelectedFloor(floor);
    navigate(`/floor-details/${floor}`);
  };

  const handleViewDetailsClick = (floor: number) => {
    if (isNaN(floor)) {
      console.error("Invalid floor number:", floor);
      return;
    }
    navigate(`/fetch-customer/${floor}`);
  };

  // Converting number to array
  const floorNumbers: number[] = Array.from(
    { length: buildingFloors },
    (_, index) => index + 1
  ).reverse(); // Reverse the array

  return (
    <>
    <SideNavbar/>
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
       <div className="flex justify-center items-center text-center mt-16 ">
        <div className="md:py-5 md:px-7 p-4 rounded shadow-xl shadow-gray-600 bg-white">
          <p className="text-stone-800 font-semibold text-2xl font-serif">
            My Floor
          </p>
          <ul className="items-center justify-center text-center py-7">
            {floorNumbers.map((floor) => (
              <li
                key={floor}
                onClick={() => handleFloorClick(floor)}
                className="cursor-pointer w-[400px] md:w-[500px] flex justify-center items-center text-center pl-12 md:px-9"
              >
                <div
                  className="flex text-center justify-center items-center my-5 text-xl font-semibold text-amber-900 font-serif bg-primary-bg w-full py-2 rounded-md shadow-gray-100 
            shadow-sm hover:bg-cyan-50"
                >
                  Floor {floor}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the click event from bubbling up to the li element
                    handleViewDetailsClick(floor);
                  }}
                  className="ml-4 bg-blue-800 hover:bg-blue-950 text-white font-bold
                 py-4 px-4 rounded-full"
                >
                  <FaAngleDoubleRight />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default MyFloor;
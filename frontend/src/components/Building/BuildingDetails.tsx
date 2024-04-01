import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addBuilding } from "../../api-client";
import SideNavbar from "../Header/SideNavbar";

const BuildingDetails = () => {
  const [floor, setFloor] = useState(0); // Initialize floor as null
  const [buildingId, setBuildingId] = useState(null);
  const [showFloors, setShowFloors] = useState(false);
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const userData = localStorage.getItem("userData");
  const userId = userData ? JSON.parse(userData).userId : null;
  console.log("User id", userId);

  useEffect(() => {
    // If buildingId is set, show floors
    if (buildingId) {
      setShowFloors(true);
    }
  }, [buildingId]);

  const createBuildingAndFloors = async () => {
    try {
      if (!userId) {
        console.error("User ID not found.");
        return;
      }

      const buildingResponse = await addBuilding(parseInt(userId), floor);
      const newBuildingId = buildingResponse.id;
      setBuildingId(newBuildingId);
      setFloor(floor);
      navigate(`/my-floor`); // Reset floor after building is created
    } catch (error: any) {
      console.error("Error creating building or adding floors", error.message);
    }
  };

  const handleFloorClick = () => {
    // Navigate to floor details page
  };

  return (
    <>
    <SideNavbar/>
      <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      {!showFloors ? (
        <form className="text-center" onSubmit={(e) => e.preventDefault()}>
          <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
            <div>
              <label className="block font-semibold font-serif text-amber-900 mb-5">
                How many floors in your building?
              </label>
              <input
                type="number"
                value={floor || ""}
                onChange={(e) => setFloor(parseInt(e.target.value))}
                placeholder="Enter number of floors...."
                className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold"
              />
            </div>
            <button
              onClick={createBuildingAndFloors}
              className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-stone-300 p-16 rounded-xl w-[400px] shadow-amber-800 shadow-2xl mt-4">
          {/* Render Floor components based on the selected number of floors */}
          {[...Array(floor)].map((_, index) => (
            <div
              key={index + 1}
              onClick={() => handleFloorClick(index + 1)}
              className="cursor-pointer"
            >
              Floor {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  
  );
};

export default BuildingDetails;

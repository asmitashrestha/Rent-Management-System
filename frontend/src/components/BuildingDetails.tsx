import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Floor from "./Floor";

const BuildingDetails = () => {
  const [floor, setFloor] = useState(0);
  const [floorArray, setFloorArray] = useState<JSX.Element[]>([]);
  const [showFloors, setShowFloors] = useState(false);
  const navigate = useNavigate();

  const generateFloors = () => {
    const floors = [];
    for (let i = 1; i <= floor; i++) {
      floors.push(
        <Floor key={i} number={i} onClick={() => handleClick(i)} />
      );
    }
    setFloorArray(floors);
    setShowFloors(true);
  };

  const handleClick = (index: number) => {
    console.log(`You clicked floor ${index}`);
    navigate(`/floor-details/${index}`); // Navigate to the details page with floor number
  };

  return (
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      {!showFloors && (
        <form className="text-center" onSubmit={(e) => e.preventDefault()}>
          <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
            <div>
              <label className="block font-semibold font-serif text-amber-900 mb-5">
                How many floors in your building?
              </label>
              <input
                type="number"
                value={floor}
                onChange={(e) => setFloor(parseInt(e.target.value))}
                placeholder="Enter number of floors...."
                className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold"
              />
            </div>
            <button
              onClick={generateFloors}
              className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950"
            >
              Save
            </button>
          </div>
        </form>
      )}
      {showFloors && (
        <div className="bg-stone-300 p-16 rounded-xl w-[400px] shadow-amber-800 shadow-2xl">
          <div>{floorArray}</div>
        </div>
      )}
    </div>
  );
};

export default BuildingDetails;

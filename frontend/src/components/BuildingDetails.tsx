import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloorDetails from "./FloorDetails";

const BuildingDetails = () => {
  const navigate = useNavigate();
  const [numFloors, setNumFloors] = useState(0); // State to store the number of floors
  const [currentFloor, setCurrentFloor] = useState(1); // State to track the current floor being displayed

  const handleChange = (event:any) => {
    const value = parseInt(event.target.value);
    setNumFloors(value); // Update the state with the input value converted to integer
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setCurrentFloor(1); // Reset the current floor to 1 when form is submitted
    navigate('/floor-details');
  };

  const handleNextFloor = () => {
    if (currentFloor < numFloors) {
      setCurrentFloor(currentFloor + 1); // Increment current floor
    }
  };

  return (
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
          <div>
            <label className="block font-semibold font-serif text-amber-900 mb-5">How many floors in your building?</label>
            <input
              type="number"
              value={numFloors} // Use value instead of defaultValue
              onChange={handleChange} // Call handleChange when input changes
              placeholder="Enter number of floors...."
              className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold "
            />
          </div>
          <button type="submit" className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
            Save
          </button>
        </div>
      </form>
      
      {/* Render FloorDetails component for each floor */}
      {currentFloor <= numFloors && <FloorDetails />}
      
      {/* Button to navigate to next floor */}
      {currentFloor < numFloors && (
        <button onClick={handleNextFloor} className="px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950 mt-4">
          Next Floor
        </button>
      )}
    </div>
  );
};

export default BuildingDetails;


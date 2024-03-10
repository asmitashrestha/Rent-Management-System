// BuildingDetails.js
import React from "react";
import { useNavigate } from "react-router-dom";

const BuildingDetails = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/floor-details')
  }
  return (
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      
      <form className="text-center" onSubmit={handleClick}>
        <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
          <div>
            <label className="block font-semibold font-serif text-amber-900 mb-5">How many floors in your building?</label>
            <input
              type="number"
              value={"12"}
              placeholder="Enter number of floors...."
              className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold "
            />
          </div>
          <button type="submit" className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuildingDetails;

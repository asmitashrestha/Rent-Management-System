import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloorDetails = () => {
  const navigate = useNavigate();
  const [floorsArray, setFloorsArray] = useState<number[]>([]); // Specify the type as number[]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setFloorsArray([value]); // Update the state with the input value converted to integer
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Now you can directly access floorsArray to get the number of floors
    console.log(floorsArray); // Print the array of floors to the console
    navigate('/customer-details');
  };

  return (
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
          <div>
            <label className="block font-semibold font-serif text-amber-900 mb-5">Enter price for floor ?</label>
            <input
              type="number"
              defaultValue={floorsArray[0] || ''} // Use defaultValue instead of value
              onChange={handleChange} // Call handleChange when input changes
              placeholder="Enter number of floors...."
              className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold "
            />
          </div>
          <button type="submit" className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FloorDetails;

import React, { useState } from "react";
import { addFloors } from "../../api-client";
import { useNavigate, useParams } from "react-router-dom";

const FloorDetails = () => {
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  // const floorNumber = parseInt(useParams().id!);

  const { id } = useParams();
  console.log("id",id);
   // Get the floor number from route parameter
  const floorNumber = parseInt(id); // Parse the floor number as an integer

  console.log("hey floor",floorNumber);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Retrieve userId from local storage
      const userData = localStorage.getItem("userData");
      const userId = userData ? JSON.parse(userData).userId : null;
      if (!userId) {
        throw new Error("User ID is missing from local storage");
      }
      if (isNaN(floorNumber)) {
        throw new Error("Invalid floor number");
      }
      console.log("floornumber",floorNumber)

      const response = await addFloors(parseInt(userId), floorNumber, parseInt(price));
      console.log("response",response);
      
      setMessage(response);
      setPrice(price);
      navigate(`/customer-details/${floorNumber}`)
    } catch (error: any) {
      console.error("Error adding floor:", error.message);
      setMessage(error.message);
    }
  };

  return (
    <div className="bg-img1 h-screen bg-cover bg-center flex justify-center items-center">
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="bg-stone-300 p-16 rounded-sm shadow-amber-800 shadow-2xl">
          <div>
            <label className="block font-semibold font-serif text-amber-900 mb-5">
              Enter price for floor ?
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price..."
              className="block outline-none w-full mt-2 p-3 rounded-md bg-stone-900 text-cyan-100 font-semibold "
            />
          </div>
          <button
            type="submit"
            className="relative top-7 left-[105px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950"
          >
            Submit
          </button>
        </div>
      </form>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
};

export default FloorDetails;

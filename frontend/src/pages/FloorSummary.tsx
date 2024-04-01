import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFloorById } from "../api-client";
import SideNavbar from "../components/Header/SideNavbar";

const FloorSummary = () => {
  const [floorData, setFloorData] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams(); // Assuming id is the parameter name
  const [floorNumber, setFloorNumber] = useState("");

  useEffect(() => {
    const parseId = parseInt(id);
    if (!isNaN(parseId)) {
      setFloorNumber(parseId.toString()); // Make sure to set floorNumber as a string
    }
  }, [id]);

  useEffect(() => {
    const fetchFloor = async () => {
      if (floorNumber) {
        try {
          console.log("Fetching floor data for floor number:", floorNumber);
          const { data, error } = await fetchFloorById(parseInt(floorNumber));
          console.log("Received data:", data);
          console.log("Received error:", error);
          if (error) {
            setError(error);
            setFloorData(null);
            console.log("Error occurred while fetching floor details");
          } else {
            setFloorData(data);
            setError(null);
          }
        } catch (error) {
          console.log("Error occurred while fetching floor details:", error);
          setError(
            error.message || "An error occurred while fetching floor details"
          );
          setFloorData("");
        }
      }
    };

    fetchFloor();
  }, [floorNumber]);

  const handleChange = (e: any) => {
    setFloorNumber(e.target.value);
    setFloorData(""); // Reset floorData when input changes
  };

  console.log("FloorData", floorData);

  return (
    <>
    <SideNavbar/> 
    <div className="flex justify-center  items-center mt-14">
      <div className="">
        <div className="mb-2">
          <label className="text-lg font-semibold font-serif text-gray-800">
            Enter floor number :{" "}
          </label>
        </div>
        <div>
          <input
            type="number"
            value={floorNumber}
            onChange={handleChange}
            className="bg-black px-7 text-white py-3 rounded shadow-stone-100 shadow-lg"
          />
        </div>

        {/* Removed the button */}
        {error && <p>Error: {error}</p>}

        {floorData && (
          <div className="mt-5 shadow-stone-500 rounded shadow-2xl bg-stone-950 p-5 text-white text-lg">
            <p className="mb-2">
              <span className="text-lg font-semibold mr-1">
                Floor Number :
              </span>{" "}
              {floorData.floorNumber}
            </p>
            <p>
              <span className="text-lg font-semibold mr-1">
                Rent:
              </span>{" "}
              {floorData.price}
            </p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
    </>
   
  );
};

export default FloorSummary;

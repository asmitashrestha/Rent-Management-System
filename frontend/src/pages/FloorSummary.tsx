import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFloorById } from "../../api-client";

const FloorSummary = () => {
  const [floorData, setFloorData] = useState('');
  const [error, setError] = useState(null);
  const { id } = useParams(); // Assuming id is the parameter name
  const [floorNumber, setFloorNumber] = useState('');

  useEffect(() => {
    const parseId = parseInt(id);
    if (!isNaN(parseId)) {
      setFloorNumber(parseId.toString()); // Make sure to set floorNumber as a string
    }
  }, [id]);

  const handleFetchFloor = async () => {
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
      setError(error.message || "An error occurred while fetching floor details");
      setFloorData('');
    }
  };

  const handleChange = (e:any) => {
    setFloorNumber(e.target.value);
    setFloorData(''); // Reset floorData when input changes
  };
  
  console.log("FloorData", floorData);
  
  return (
    <div>
      <input
        type="number"
        value={floorNumber}
        onChange={handleChange}
      />
      <button onClick={handleFetchFloor}>Fetch Floor</button>
      {error && <p>Error: {error}</p>}
  
      {floorData && (
        <div>
          <p>Floor Number: {floorData.floorNumber}</p>
          <p>Price: {floorData.price}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default FloorSummary;

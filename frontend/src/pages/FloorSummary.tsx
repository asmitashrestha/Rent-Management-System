// FloorSummary.js
import React, { useState, useEffect } from "react";
import { fetchFloorById } from "../../api-client";
import { useParams } from "react-router-dom";

const FloorSummary = () => {
  const [floorDetails, setFloorDetails] = useState(1);
  const floorNumber = parseInt(useParams().id!);
  console.log(floorNumber);
  

  useEffect(() => {
    const fetchFloorDetails = async () => {
      try {
        const data = await fetchFloorById(floorNumber);
        console.log(data);
        
        setFloorDetails(data);
      } catch (error:any) {
        console.error("Error fetching floor details:", error.message);
      }
    };

    fetchFloorDetails();
  }, [floorNumber]);

  return (
    <div>
      {floorDetails ? (
        <div>
          <h2>Floor Number: {floorDetails.floorNumber}</h2>
          <p>Price: {floorDetails.price}</p>
          {/* Add other floor details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FloorSummary;

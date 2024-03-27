import { useEffect, useState } from "react";
import { useModalStore } from "../../stores/ModalStore";
import * as apiClient from "../../../api-client";
import { useNavigate } from "react-router-dom";

const AskFloors = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  // const [isBuilding, setIsBuilding] = useState("");
  const [floor, setFloor] = useState(0);

  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const response = await apiClient.addBuilding(floor);
      if (!response) {
        console.log("Something went wrong in adding building");
      }
      closeModal();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkForBuilding = useEffect(() => {
    const checkBuilding = async () => {
      const response = await apiClient.fetchbuilding();
      console.log(response);
      //   setIsBuilding(response);
      //   console.log(setIsBuilding);
    };
    checkBuilding();
  }, []);

  checkForBuilding;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-background font-heading flex flex-col items-center justify-center rounded-md p-4 relative">
        <div className="font-bold text-6xl text-red-500 m-2"></div>
        <p className="text-xl text-text">
          Enter number of floors in your building.
        </p>
        <input
          type="number"
          className="p-2 border border-black rounded-md my-2 w-full"
          onChange={(e) => setFloor(parseInt(e.target.value))}
        />
        <div className="flex flex-row justify-between items-center w-full my-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded-md text-text border border-text bg-background"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md text-white bg-accent"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskFloors;

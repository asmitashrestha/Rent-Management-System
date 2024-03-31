import { useFloorStore } from "../../stores/FloorStore";
import * as apiClient from "../../../api-client";
import { useState, ChangeEvent } from "react";
import { useCustomerModalStore } from "../../stores/ModalStore";

const ProxyCustomerForm = () => {
  const { floorData } = useFloorStore();
  console.log("floornumber", floorData.floorNumber);
  const closeCustomerModal = useCustomerModalStore(
    (state) => state.closeCustomerModal
  );

  const [customerName, setCustomerName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCustomerName(e.target.value);
  };
  const handleSave = async () => {
    try {
      await apiClient.addCustomer(floorData.floorNumber, customerName);
    } catch (error) {
      console.log(error);
    }
    closeCustomerModal();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-background rounded-md p-4">
        <div className="flex flex-col">
          <p className="text-xl text-text">Customer Name:</p>
          <input
            type="text"
            value={customerName}
            onChange={handleChange}
            className="rounded-md p-2 bg-secondary border border-black"
          />
          <div className="flex flex-row justify-between items-center w-full my-2">
            <button
              className="px-4 py-2 rounded-md text-text border border-text bg-background"
              onClick={closeCustomerModal}
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
    </div>
  );
};

export default ProxyCustomerForm;

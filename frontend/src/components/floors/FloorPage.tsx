import CustomerComponent from "../CustomerComponent";
import EmptyFloorCard from "./EmptyFloorCard";
import FloorHeader from "./FloorHeader";
<<<<<<< HEAD
// import ProxyBIll from "./ProxyBIll";
// import ProxyPayment from "./ProxyPayment";
// import { useModalStore } from "../../stores/ModalStore";
// import RemovePopup from "./RemovePopup";
const FloorPage = () => {
  // const isOpen = useModalStore((state) => state.isOpen);
  // const closeModal = useModalStore((state) => state.closeModal);
  // const openModal = useModalStore((state) => state.openModal);

  // const handleOutsideClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   if (event.target === event.currentTarget) {
  //     closeModal();
  //   }
  // };
=======
import ProxyBIll from "./ProxyBIll";
import ProxyPayment from "./ProxyPayment";
import { useModalStore, useBillModalStore } from "../../stores/ModalStore";
import RemovePopup from "./RemovePopup";
import { useFloorStore } from "../../stores/FloorStore";
import * as apiClient from "../../../api-client";
import { useEffect } from "react";
import BillForm from "../BillForm";

const FloorPage = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const openModal = useModalStore((state) => state.openModal);
  const isBillOpen = useBillModalStore((state) => state.isBillOpen);
  const openBillModal = useBillModalStore((state) => state.openBillModal);
  const { selectedFloor, floorData, setFloorData } = useFloorStore();

  console.log("selected floor", selectedFloor);

  // useEffect(() => {
  //   console.log("useEffect triggered with selectedFloor:", selectedFloor);
  //   if (selectedFloor !== null) {
  //     fetchFloorData();
  //   }
  // }, [selectedFloor]);

  const fetchFloorData = async () => {
    try {
      const response = await apiClient.fetchFloor(selectedFloor!);
      console.log("API Response:", response);
      if (response !== undefined) {
        setFloorData(response);
        console.log("setting Data");
      } else {
        console.error("API returned undefined response.");
      }
    } catch (error) {
      console.error("Error fetching floor data:", error);
    }
  };
>>>>>>> bea5471ce1cf4b5a9338af92246dda5fd39bf586

  // if (selectedFloor !== null) {
  //   fetchFloorData();
  // }

  useEffect(() => {
    if (selectedFloor !== null) {
      fetchFloorData();
    }
  }, []);

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  // console.log("floordata", floorData);

  return (
    <div className="flex flex-row justify-center bg-background lg:w-3/5 m-auto">
      <div className="flex flex-col w-3/5">
        <FloorHeader />
<<<<<<< HEAD
        {/* <EmptyFloorCard /> */}
        {/* <CustomerComponent /> */}
        <div className="flex justify-center mt-20 p-5">
      <div className="bg-gray-100 text-center p-12 rounded-md ">

        <div className="flex text-[16px] font-semibold text-white mb-4 bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Current :</p>
          <p>Rs. 13000</p>
        </div>
        <div className="flex text-[16px] font-semibold text-white mb-4  bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Dues :</p>
          <p className="ml-5">Rs. 13000</p>
        </div>
        <div className="flex text-[16px] font-semibold text-white  bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Total:</p>
          <p className="ml-6">Rs. 13000</p>
        </div>
      </div>
    </div>
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-row bg-background font-heading p-2 text-lg gap-4">
          <button className="bg-accent text-background px-4 py-2 rounded-md w-full">
            Generate Bill
          </button>
          <button
            className="bg-accent text-background px-4 py-2 rounded-md w-full"
            // onClick={openModal}
          >
            Remove Tenant
          </button>
        </div>
        
        {/* <span className="mt-8">
          <ProxyBIll />
        </span>
        <span className="mt-6">
          <ProxyPayment />
        </span> */}
      </div>
      {/* {isOpen && (
        <div onClick={handleOutsideClick}>
          <RemovePopup />
        </div> */}
      {/* )} */}
=======
        {floorData && floorData.status === "empty" ? ( // Add null check for floorData
          <EmptyFloorCard />
        ) : (
          <CustomerComponent />
        )}
      </div>
      {floorData && floorData.status === "empty" ? null : (
        <div className="flex flex-col w-2/5">
          <div className="flex flex-row bg-background font-heading p-2 text-lg gap-4">
            <button
              className="bg-accent text-background px-4 py-2 rounded-md w-full"
              onClick={openBillModal}
            >
              Generate Bill
            </button>
            <button
              className="bg-accent text-background px-4 py-2 rounded-md w-full"
              onClick={openModal}
            >
              Remove Tenant
            </button>
          </div>
          <span className="mt-8">
            <ProxyBIll />
          </span>
          <span className="mt-6">
            <ProxyPayment />
          </span>
        </div>
      )}

      {isOpen && (
        <div>
          <RemovePopup />
        </div>
      )}
      {isBillOpen && (
        <div>
          <BillForm />
        </div>
      )}
>>>>>>> bea5471ce1cf4b5a9338af92246dda5fd39bf586
    </div>
  );
};

export default FloorPage;

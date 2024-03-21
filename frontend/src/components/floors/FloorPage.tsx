import CustomerComponent from "../CustomerComponent";
import EmptyFloorCard from "./EmptyFloorCard";
import FloorHeader from "./FloorHeader";
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

  return (
    <div className="flex flex-row justify-center bg-background lg:w-3/5 m-auto">
      <div className="flex flex-col w-3/5">
        <FloorHeader />
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
    </div>
  );
};

export default FloorPage;

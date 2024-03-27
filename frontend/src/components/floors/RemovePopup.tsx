import { FiAlertTriangle } from "react-icons/fi";
import { useModalStore } from "../../stores/ModalStore";

const RemovePopup = () => {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-background font-heading flex flex-col items-center justify-center rounded-md p-4 relative">
        <div className="font-bold text-6xl text-red-500 m-2">
          <FiAlertTriangle />
        </div>
        <p className="text-xl text-text">Do you want to remove the tenant?</p>
        <div className="flex flex-row justify-between items-center w-full my-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded-md text-text border border-text bg-background"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-accent">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemovePopup;

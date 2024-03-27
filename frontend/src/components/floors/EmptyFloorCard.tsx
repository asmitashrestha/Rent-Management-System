import { IoIosAddCircleOutline } from "react-icons/io";
import { useCustomerModalStore } from "../../stores/ModalStore";
import ProxyCustomerForm from "../proxyForms/ProxyCustomerForm";

const EmptyFloorCard = () => {
  const isCustomerOpen = useCustomerModalStore((state) => state.isCustomerOpen);
  const openCustomerModal = useCustomerModalStore(
    (state) => state.openCustomerModal
  );

  return (
    <div className="flex flex-col bg-secondary p-4 rounded-md m-1 flex-1 justify-center items-center font-heading">
      <p className="font-bold text-2xl">This floor is currently empty.</p>
      <div className="text-6xl text-center self-center my-4 cursor-pointer">
        <IoIosAddCircleOutline onClick={openCustomerModal} />
      </div>
      <p className="font-medium text-xl  text-primary">
        Click add button to add customer
      </p>
      {isCustomerOpen ? <ProxyCustomerForm /> : null}
    </div>
  );
};

export default EmptyFloorCard;

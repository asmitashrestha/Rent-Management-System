import { IoIosAddCircleOutline } from "react-icons/io";

const EmptyFloorCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col bg-white p-4 rounded-md">
        <p className="font-bold text-2xl">This floor is currently empty.</p>
        <div className="text-6xl text-center self-center my-4 cursor-pointer">
          <IoIosAddCircleOutline />
        </div>
        <p className="font-medium text-xl text-center">
          Click here to add customer
        </p>
      </div>
    </div>
  );
};

export default EmptyFloorCard;

import { FaUserCircle } from "react-icons/fa";
import RentBlock from "./floors/RentBlock";
const CustomerComponent = () => {
  return (
    <div className="bg-background font-heading text-text font-header rounded-md py-2">
      <div className="bg-secondary rounded-md flex flex-row items-center justify-center gap-2 mx-1 p-4 ">
        <div className="text-6xl">
          <FaUserCircle />
        </div>
        <div className="text-text flex flex-col">
          <p className="text-2xl">User Name</p>
          <p className="text-xl">Moved in: 2024/19/3</p>
        </div>
      </div>
      <div className="flex flex-row gap-1 mx-1">
        <RentBlock text="Bill" values={5000} />
        <RentBlock text="Paid" values={0} />
      </div>
      <div className="mx-1">
        <RentBlock text="Remaining" values={5000} />
      </div>
    </div>
  );
};

export default CustomerComponent;

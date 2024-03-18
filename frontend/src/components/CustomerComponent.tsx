import { FaUserCircle } from "react-icons/fa";
const CustomerComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="flex flex-col bg-white p-4 rounded-md">
        <div className="flex flex-col items-center gap-2 my-2">
          <div className="text-8xl">
            <FaUserCircle />
          </div>
          <p className="font-medium text-2xl">User Name</p>
          <p className="text-xl">Moved in: </p>
        </div>

        <div>
          <p className="font-medium text-lg my-1">Customer Status</p>
          <div className="flex flex-row gap-2">
            <div className="border-2 border-black rounded-md text-center px-4 py-2 bg-coffee text-white">
              <p className="text-lg font-medium ">Bill Amount</p>
              <p className="font-medium">Rs. 100</p>
            </div>
            <div className="border-2 border-black rounded-md text-center px-4 py-2 bg-coffee text-white">
              <p className="text-lg font-medium">Paid Amount</p>
              <p className="font-medium">Rs. 100</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black rounded-md text-center px-4 py-2 my-2 bg-coffee text-white">
          <p className="text-lg font-medium ">Remaining</p>
          <p className="font-medium">Rs. 100</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerComponent;

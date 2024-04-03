import { FaUserCircle } from "react-icons/fa";
// import RentBlock from "./floors/RentBlock";
import useCustomerStore  from "../stores/CustomerStore";
import { useEffect } from "react";
import { useFloorStore } from "../stores/FloorStore";
import * as apiClient from "../api-client";

const CustomerComponent = () => {
  const { customerData, setCustomerData } = useCustomerStore();
  const { floorData } = useFloorStore();
  const floorNumber = floorData.floorNumber;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiClient.fetchCustomer(floorNumber);
        setCustomerData(data.response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setCustomerData]);

  console.log(customerData);

  console.log("customer:", customerData);
  return (
    <div className="bg-background font-heading text-text font-header rounded-md py-2">
      <div className="bg-secondary rounded-md flex flex-row items-center justify-center gap-2 mx-1 p-4 ">
        <div className="text-6xl">
          <FaUserCircle />
        </div>
        <div className="text-text flex flex-col">
          <p className="text-2xl">{customerData.customerName}</p>
          {/* <p className="text-xl">Moved in: 2024/19/3</p> */}
        </div>
      </div>
      <div className="flex flex-row gap-1 mx-1">
        <RentBlock text="Bill" values={customerData.billAmount} />
        <RentBlock text="Paid" values={customerData.paidAmount} />
      </div>
      <div className="mx-1">
        <RentBlock text="Remaining" values={customerData.remainingAmount} />
      </div>
    </div>
  );
};

export default CustomerComponent;

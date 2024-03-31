// import { useNavigate } from "react-router-dom";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useFloorStore } from "../stores/FloorStore";
import { useBillModalStore } from "../stores/ModalStore";
import { useCustomerStore } from "../stores/CustomerStore";

interface FormData {
  // customerName: string;
  // floorRent: string;
  electricityCharges: string;
  waterCharges: string;
  internetCharges: string;
  others: string;
  totalAmount: string;
}

const BillForm = () => {
  const { floorData } = useFloorStore();
  const { customerData } = useCustomerStore();
  // console.log(floorData);

  const [formData, setFormData] = useState<FormData>({
    // customerName: "",
    // floorRent: "",
    electricityCharges: "",
    waterCharges: "",
    internetCharges: "",
    others: "",
    totalAmount: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData); // This will log the form data to the console
    // Here you can add your logic to send the formData to your API endpoint
  };

  const closeBillModal = useBillModalStore((state) => state.closeBillModal);
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/bill-details");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-black bg-opacity-50 ">
      <div className="flex flex-col ">
        <form onSubmit={handleSubmit}>
          <div className="bg-stone-300 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl ">
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <p className="font-bold self-center text-xl text-green-950 font-serif p-2">
                Monthly Bill
              </p>
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 ">
                Customer Name :
              </label>
              <input
                type="text"
                value={customerData.customerName}
                disabled
                onChange={handleChange}
                placeholder="Enter name..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
              />
            </div>
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 mr-4 ">
                Floor rent :
              </label>
              <input
                type="number"
                name="floorRent"
                value={floorData.price}
                disabled
                onChange={handleChange}
                className="outline-none  p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div>
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 ">
                Electricity Charges:
              </label>
              <input
                type="number"
                name="electricityCharges"
                value={formData.electricityCharges}
                onChange={handleChange}
                placeholder="Enter electricity charges"
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
              />
            </div>
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 mr-4 ">
                Water Charges :
              </label>
              <input
                type="number"
                name="waterCharges"
                value={formData.waterCharges}
                onChange={handleChange}
                placeholder="Enter water charges"
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div>
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 mr-4 ">
                Internet Charges :
              </label>
              <input
                type="number"
                name="internetCharges"
                value={formData.internetCharges}
                onChange={handleChange}
                placeholder="Enter internet charges"
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div>
            <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 ">
                Others :
              </label>
              <input
                type="number"
                name="others"
                value={formData.others}
                onChange={handleChange}
                placeholder="Enter other charges"
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div>
            {/* <div className="mb-2 flex flex-wrap flex-col  justify-between">
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 ">
                Total Amount :
              </label>
              <input
                type="number"
                value={formData.totalAmount}
                onChange={handleChange}
                placeholder="Enter remaining amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div> */}
            <div className="flex flex-row justify-between  mt-2">
              <button
                onClick={closeBillModal}
                className="px-4 py-2 rounded-md text-text border border-text bg-background"
              >
                Cancel
              </button>
              <button
                // type="submit"
                className=" px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-950"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillForm;

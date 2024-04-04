import { useState } from "react";
import SideNavbar from "../Header/SideNavbar";
import { useNavigate, useParams } from "react-router-dom";

const Payment = () => {
  const [paidAmount, setPaidAmount] = useState("");
  const navigate = useNavigate();
  const cid = parseInt(useParams().id!);
  console.log("cid", cid);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/payment/${cid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paidAmount }),
      });
      const data = await response.json();
      console.log("data", data);

      if (response.ok) {
        console.log(data.message);
        navigate(`/fetch-customer/${cid}`); // Payment Created
        // You can perform further actions upon successful payment creation
      } else {
        console.error(data.message);
        // Handle error cases
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <>
      <SideNavbar />

      <div className="bg-img1 h-screen flex justify-center items-center">
        <form className="text-center" onSubmit={handleSubmit}>
          <p className="font-bold text-3xl text-gray-600 font-serif p-4">
            Payment
          </p>
          <div className="bg-white mt-10 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl w-[400px]">
            <div className="mb-4">
              <div>
                <label className="font-semibold font-serif text-amber-900 mr-[42px] text-xl">
                  Paid Amount :
                </label>
              </div>
              <div className="mt-6">
                <input
                  type="number"
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                  className="outline-none p-3 rounded-md bg-primary-bg md:ml-2 font-semibold flex-grow"
                />
              </div>
            </div>
            <div className="flex justify-center pb-3">
              <button
                type="submit"
                className="px-5 py-3 bg-amber-950 text-white rounded-md
                 hover:bg-amber-900"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;

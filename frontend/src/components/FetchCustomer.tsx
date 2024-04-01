import { useState, useEffect } from "react";
import { fetchCustomerDetails } from "../../api-client";
import { useParams, useNavigate } from "react-router-dom";

const FetchCustomer = () => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const fId = parseInt(id);
  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchCustomerDetails = async () => {
      try {
        const data = await fetchCustomerDetails(fId);
        setCustomerDetails(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching customer details:", error.message);
        setError(error);
      }
    };

    handleFetchCustomerDetails();
  }, [fId]);

  const handleGoToCustomerDetails = () => {
    navigate(`/customer-details/${fId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-stone-200 rounded px-20 pt-6 pb-8 mb-4 shadow-stone-700 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 font-serif">
          {" "}
          Customer Details
        </h2>
        {/* <p className="mb-4">Customer ID: {fId}</p> */}
        {error && (
          <div>
          
            <p className="text-red-500 text-lg font-semibold">{error.message}</p>
            <button onClick={handleGoToCustomerDetails} className="mt-4 ml-40 bg-stone-950 hover:bg-stone-800 text-white font-bold py-3 px-4 rounded">
              Click here 
            </button>
          </div>
        )}
        {customerDetails && (
          <div className="font-serif">
                  <p className="mb-4 bg-stone-950 px-5 py-3 rounded-2xl text-white text-lg">
              <span className="font-bold text-cyan-100 mr-2  ">
                Customer Name:
              </span>
              {customerDetails.response.customerName}
            </p>
            <p className="mb-4 bg-stone-950 px-5 py-3 rounded-2xl text-white text-lg">
              <span className="font-bold text-cyan-100 mr-2  ">
                Floor Number:{" "}
              </span>
              {customerDetails.response.fId}
            </p>
            <p className="mb-4 bg-stone-950 px-5 py-3 rounded-2xl text-white text-lg">
              <span className="font-bold text-cyan-100 mr-2  ">
                Bill Amount:
              </span>
              {customerDetails.response.billAmount}
            </p>
            <p className="mb-4 bg-stone-950 px-5 py-3 rounded-2xl text-white text-lg">
              <span className="font-bold text-cyan-100 mr-2  ">
                Paid Amount :
              </span>{" "}
              {customerDetails.response.paidAmount}
            </p>
            <p className="mb-4 bg-stone-950 px-5 py-3 rounded-2xl text-white text-lg">
              <span className="font-bold text-cyan-100 mr-2  ">
                Remaining Amount:
              </span>{" "}
              {customerDetails.response.remainingAmount}
            </p>
            {/* Render customer details */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchCustomer;

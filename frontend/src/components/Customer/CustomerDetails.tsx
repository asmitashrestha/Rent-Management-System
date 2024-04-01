import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCustomerStore from '../../stores/customerStore';
import { addCustomerDetails } from '../../api-client'; // Importing the API function

const CustomerDetails = () => {
  const { showForm, customerName, setShowForm, setCustomerName } = useCustomerStore();
  const navigate = useNavigate();
  const fId = parseInt(useParams().id!);

  console.log('customer id', fId);

  const handleAddCustomer = () => {
    setShowForm(true);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      // Call the addCustomerDetails function with the form data
      await addCustomerDetails(fId, customerName); // Replace 123 with actual fid
      navigate(`/bill-details/${fId}`);
    } catch (error) {
      console.error('Error occurred');
    }
  };

  useEffect(() => {
    return () => {
      // Reset form data when component unmounts
      setShowForm(false);
      setCustomerName('');
    };
  }, [setShowForm, setCustomerName]);

  return (
    <div>
      <div className="bg-img2 h-screen bg-cover bg-center flex justify-center items-center">
        {!showForm ? (
          <div>
            <p className="font-bold text-3xl text-green-950 font-serif p-4">Customer Details</p>
            <p className="text-center font-bold text-2xl">This floor is currently empty.</p>
            <div className="flex text-center justify-center">
              <button
                onClick={handleAddCustomer}
                className="px-4 py-3 bg-amber-700 text-white rounded-md mt-4 hover:bg-amber-950 font-bold text-lg"
              >
                Add Customer
              </button>
            </div>
          </div>
        ) : (
          <div className=" h-screen bg-cover bg-center">
            <form className="text-center mt-20" onSubmit={handleSubmit}>
              <p className="font-bold text-3xl text-gray-600 font-serif p-4">Customer Details</p>
              <div className="bg-white mt-20 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl">
                <div className="mb-4">
                  <div>
                    <label className="font-semibold font-serif text-amber-900 mr-[42px] text-xl">
                      Customer Name :
                    </label>
                  </div>
                  <div className="mt-6">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter name..."
                      className="outline-none p-3 rounded-md bg-primary-bg md:ml-2 font-semibold flex-grow"
                    />
                  </div>
                </div>
                <div className="flex justify-between pb-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)} // Cancel button to hide the form
                    className="relative top-2 px-4 py-2 border border-black text-black font-semibold rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="relative top-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-950"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BillForm = () => {
  const [formData, setFormData] = useState({
    floorRent: "",
    electricityCharges: "",
    waterCharges: "",
    internetCharges: "",
    others: "",
  });
  const [error, setError] = useState(null);
const navigate = useNavigate()
  const cId = parseInt(useParams().id!);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/bill/${cId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add bill");
      }

      // Reset form data
      setFormData({
        floorRent: "",
        electricityCharges: "",
        waterCharges: "",
        internetCharges: "",
        others: "",
      });

      // Handle success
      alert("Bill added successfully");
    } catch (error) {
      console.error("Error adding bill:", error.message);
      setError("Failed to add bill");
    }
  };
  const handleCancel = ()=>{
   navigate(`/fetch-customer/${cId}`)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-stone-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-xl shadow-gray-500">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Add Bill
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Electricity Charges:
            </label>
            <input
              type="number"
              name="electricityCharges"
              value={formData.electricityCharges}
              onChange={handleChange}
              className="p-3 w-full rounded-lg shadow-stone-500 shadow-md text-white focus:outline-none focus:ring focus:ring-stone-400 bg-stone-950 border-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold  text-lg">
              Water Charges:
            </label>
            <input
              type="number"
              name="waterCharges"
              value={formData.waterCharges}
              onChange={handleChange}
              className="p-3 w-full rounded-lg shadow-stone-500 shadow-md text-white focus:outline-none focus:ring focus:ring-stone-400 bg-stone-950 border-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold  text-lg">
              Internet Charges:
            </label>
            <input
              type="number"
              name="internetCharges"
              value={formData.internetCharges}
              onChange={handleChange}
              className="p-3 w-full rounded-lg shadow-stone-500 shadow-md text-white focus:outline-none focus:ring focus:ring-stone-400 bg-stone-950 border-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold  text-lg">
              Others:
            </label>
            <input
              type="number"
              name="others"
              value={formData.others}
              onChange={handleChange}
              className="p-3 w-full rounded-lg shadow-stone-500 shadow-md text-white focus:outline-none focus:ring focus:ring-stone-400 bg-stone-950 border-none "
            />
          </div>
          <div className="flex justify-between">
            <button 
            onClick={handleCancel}
            className="text-gray-700 border  border-black py-2 px-4 rounded-md font-semibold ">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-950 text-white p-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 font-semibold "
            >
              Add Bill
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default BillForm;

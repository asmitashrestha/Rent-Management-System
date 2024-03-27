// // import { useNavigate } from 'react-router-dom'

// // const BillForm = () => {
// //   const navigate = useNavigate()
// //   const handleClick = () =>{
// //     navigate('/bill-details')
// //   }
// //   return (
// //     <div>
// //       <div className="bg-img2 h-screen bg-cover bg-center flex justify-center items-center">
// //         <form className="text-center " onSubmit={handleClick}>
// //           <p className='font-bold text-3xl text-green-950 font-serif p-4'>Bill Details</p>
// //           <div className="bg-stone-300 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl">
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Customer Name :</label>
// //               <input
// //                 type="text"
// //                 value={"asmita"}
// //                 placeholder="Enter name..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter floor number..."
// //                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900  mb-2">Electricity Charges:</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter previous amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 mr-4 mb-2">Water Charges :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter current bill amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-3 font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 mr-4 mb-2">Internet Charges :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter current bill amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-3 font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Others :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter paid amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-20 font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Dues Amount :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter remaining amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-6 font-semibold flex-grow"
// //               />
// //             </div>
// //             <div className='mb-4 flex flex-wrap items-center justify-between'>
// //               <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Total Amount :</label>
// //               <input
// //                 type="number"
// //                 value={"1200"}
// //                 placeholder="Enter remaining amount..."
// //                 className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-6 font-semibold flex-grow"
// //               />
// //             </div>
// //             <button type="submit" className="relative top-2 left-[95px] md:left-[145px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // export default BillForm

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addBillDetails } from '../../api-client'; // Import the addBillDetails function

// const BillForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     floorRent: 0,
//     electricityCharges: 0,
//     waterCharges: 0,
//     internetCharges: 0,
//     others: 0,
//   });

//   const handleChange = (e:any) => {
//     setFormData({ ...formData, [e.target.name]: parseInt(e.target.value, 10) });
//   };

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     const { floorRent, electricityCharges, waterCharges, internetCharges, others } = formData;
//     const id = 123; // Replace with the actual customer ID

//     try {
//       await addBillDetails(id, floorRent, electricityCharges, waterCharges, internetCharges, others);
//       console.log("Bill added successfully");
//       // Add any additional logic you need upon successful submission, such as redirecting to another page
//       navigate('/bill-details');
//     } catch (error:any) {
//       console.error('Error adding bill:', error.message);
//       // Handle error state or display error message to the user
//     }
//   };

//   return (
//     <div>
//       <div className="bg-img2 h-screen bg-cover bg-center flex justify-center items-center">
//         <form className="text-center" onSubmit={handleSubmit}>
//           <p className='font-bold text-3xl text-green-950 font-serif p-4'>Bill Details</p>
//           <div className="bg-stone-300 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl">
//             {/* Your input fields */}
//             {/* Example input field */}
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             <div className='mb-4 flex flex-wrap items-center justify-between'>
//               <label className="font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
//               <input
//                 type="number"
//                 name="floorRent"
//                 value={formData.floorRent}
//                 onChange={handleChange}
//                 placeholder="Enter floor rent..."
//                 className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
//               />
//             </div>
//             {/* Add more input fields for other bill details */}
//             <button type="submit" className="relative top-2 left-[95px] md:left-[145px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default BillForm;

import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BillForm = () => {
  const [formData, setFormData] = useState({
    floorRent: '',
    electricityCharges: '',
    waterCharges: '',
    internetCharges: '',
    others: ''
  });
  const [error, setError] = useState(null);
  const cId= parseInt(useParams().id!);

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log("Customer name",cId);
    
    try {
      const response = await fetch(`http://localhost:8000/bill/${cId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add bill');
      }
      
      // Reset form data
      setFormData({
        floorRent: '',
        electricityCharges: '',
        waterCharges: '',
        internetCharges: '',
        others: ''
      });
      
      // Handle success
      alert('Bill added successfully');
    } catch (error:any) {
      console.error('Error adding bill:', error.message);
      setError('Failed to add bill');
    }
  };

  return (
    <div>
      <h2>Add Bill</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Floor Rent:
          <input type="number" name="floorRent" value={formData.floorRent} onChange={handleChange} />
        </label>
        <br />
        <label>
          Electricity Charges:
          <input type="number" name="electricityCharges" value={formData.electricityCharges} onChange={handleChange} />
        </label>
        <br />
        <label>
          Water Charges:
          <input type="number" name="waterCharges" value={formData.waterCharges} onChange={handleChange} />
        </label>
        <br />
        <label>
          Internet Charges:
          <input type="number" name="internetCharges" value={formData.internetCharges} onChange={handleChange} />
        </label>
        <br />
        <label>
          Others:
          <input type="number" name="others" value={formData.others} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Bill</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default BillForm;


// BillDetails.js
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BillDetails = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/bill-details')
  }
  return (
    <div>
      <div className="bg-img2 h-screen bg-cover bg-center flex justify-center items-center">
        <form className="text-center " onSubmit={handleClick}>
          <p className='font-bold text-3xl text-green-950 font-serif p-4'>Bill Details</p>
          <div className="bg-stone-300 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl">
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Customer Name :</label>
              <input
                type="text"
                value={"asmita"}
                placeholder="Enter name..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 mr-4 mb-2">Floor rent :</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter floor number..."
                className="outline-none md:ml-12 p-2 rounded-md bg-stone-900 text-cyan-100 font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900  mb-2">Electricity Charges:</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter previous amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100  font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 mr-4 mb-2">Water Charges :</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter current bill amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-3 font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Others :</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter paid amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-20 font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Dues Amount :</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter remaining amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-6 font-semibold flex-grow"
              />
            </div>
            <div className='mb-4 flex flex-wrap items-center justify-between'>
              <label className=" font-semibold font-serif text-amber-900 md:mr-4 mb-2">Total Amount :</label>
              <input
                type="number"
                value={"1200"}
                placeholder="Enter remaining amount..."
                className="outline-none p-2 rounded-md bg-stone-900 text-cyan-100 md:ml-6 font-semibold flex-grow"
              />
            </div>
            <button type="submit" className="relative top-2 left-[95px] md:left-[145px] px-5 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-950">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BillDetails

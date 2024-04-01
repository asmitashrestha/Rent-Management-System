const BillDetails = () => {
  return (
    <div className="flex justify-center mt-20 p-5">
      <div className="bg-gray-100 text-center p-12 rounded-md ">

        <div className="flex text-[16px] font-semibold text-white mb-4 bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Current :</p>
          <p>Rs. 13000</p>
        </div>
        <div className="flex text-[16px] font-semibold text-white mb-4  bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Dues :</p>
          <p className="ml-5">Rs. 13000</p>
        </div>
        <div className="flex text-[16px] font-semibold text-white  bg-black py-3 px-7 rounded-md">
          <p className="mr-24 ">Total:</p>
          <p className="ml-6">Rs. 13000</p>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;

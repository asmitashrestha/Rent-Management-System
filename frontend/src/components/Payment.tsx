const Payment = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="text-center">
        <p className="font-bold text-3xl text-gray-600 font-serif p-4">Payment</p>
        <div className="bg-white mt-10 py-8 px-20 rounded-lg shadow-stone-900 shadow-2xl w-[400px]">
          <div className="mb-4">
            <div>
              <label className="font-semibold font-serif text-amber-900 mr-[42px] text-xl">Paid Amount :</label>
            </div>
            <div className="mt-6">
              <input
                type="number"
                value={"10"}
                className="outline-none p-3 rounded-md bg-primary-bg md:ml-2 font-semibold flex-grow"
              />
            </div>
          </div>
          <div className="flex justify-center pb-3">
            <button
              type="submit"
              className="px-5 py-3 bg-black text-white rounded-md hover:bg-gray-950"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;

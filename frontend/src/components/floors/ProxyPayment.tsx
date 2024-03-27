const ProxyPayment = () => {
  return (
    <div className="bg-secondary font-heading flex flex-col items-center justify-center text-xl px-2 py-4 rounded-md mx-1 my-2">
      <p className="font-bold">Payment</p>
      <input type="number" className="w-full rounded-md my-2" />
      <button className="px-4 py-2 mt-2 bg-accent text-background rounded-md">
        Submit
      </button>
    </div>
  );
};

export default ProxyPayment;

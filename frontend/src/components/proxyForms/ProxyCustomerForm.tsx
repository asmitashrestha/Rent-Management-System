const ProxyCustomerForm = () => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <p className="text-xl text-text">Customer Name:</p>
        <input type="text" className="rounded-md p-2" />
        <div className="flex flex-row justify-between items-center w-full my-2">
          <button className="px-4 py-2 rounded-md text-text border border-text bg-background">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-accent">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProxyCustomerForm;

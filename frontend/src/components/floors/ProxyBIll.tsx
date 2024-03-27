const ProxyBIll = () => {
  return (
    <div className="flex flex-col bg-optional font-heading items-center justify-center p-4 rounded-md mx-1">
      <span className="text-left text-background text-lg">
        <p className="font-bold text-background text-xl">Monthly Bill</p>
        <p>Current Amount</p>
        <p>Previous Dues</p>
        <p>Total Amount</p>
      </span>
      <div className="px-2 py-1 bg-accent text-background rounded-md my-1">
        <p>View Details</p>
      </div>
    </div>
  );
};

export default ProxyBIll;

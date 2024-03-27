interface RentBlockProps {
  text: string;
  values?: number;
  type?: "price" | "normal";
}

const RentBlock = ({ text, values, type }: RentBlockProps) => {
  if (type == "normal") {
    return (
      <div className="flex flex-col justify-center items-center bg-secondary p-4 my-2 rounded-md font-heading text-2xl font-bold flex-1">
        <p className="text-text">{text}</p>
        <p className="text-primary">{values}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center bg-secondary p-4 my-2 rounded-md font-heading text-2xl font-bold flex-1">
      <p className="text-text">{text} </p>
      <p className="text-primary">Rs. {values}</p>
    </div>
  );
};

export default RentBlock;

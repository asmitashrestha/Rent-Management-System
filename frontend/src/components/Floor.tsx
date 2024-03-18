import React from "react";

interface FloorProps {
  number: number;
  onClick: () => void;
}

const Floor: React.FC<FloorProps> = ({ number, onClick }) => {
  return (
    <div key={number} className="rounded bg-black p-3 m-2 text-yellow-50 font-semibold text-xl flex justify-between">
      <p>Floor {number}</p>
      <button onClick={onClick} className="text-lg bg-amber-950 px-2 py-1 rounded-sm">View Details</button>
    </div>
  );
};

export default Floor;

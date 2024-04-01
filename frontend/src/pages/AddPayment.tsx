import React, { useState } from 'react';
import { addPayment } from '../../api-client';


const AddPayment: React.FC = () => {
  const [id, setId] = useState<number>(0);
  const [paidAmount, setPaidAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Example id, replace with actual value
      // const id = 123; // Example id value, replace with the actual value

      await addPayment(id, paidAmount);
      alert("Payment Created");
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={(e) => setId(parseFloat(e.target.value))}
        />
      </div>

        <div>
          <label htmlFor="paidAmount">Paid Amount:</label>
          <input
            type="number"
            id="paidAmount"
            value={paidAmount}
            onChange={(e) => setPaidAmount(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default AddPayment;

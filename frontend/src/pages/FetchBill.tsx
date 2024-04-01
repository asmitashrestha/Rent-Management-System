import React, { useState, useEffect } from 'react';
import { fetchBillDetails } from '../api-client'; // Assuming your API function is in a file named api.ts
import { useParams } from 'react-router-dom';

interface Bill {
  // Define your bill interface here based on the expected structure
}

const FetchBill: React.FC = () => {
  const [bill, setBill] = useState<Bill | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const id = parseInt(useParams().id!)
  
  useEffect(() => {
    const fetchBill = async () => {
      try {
        const data = await fetchBillDetails(id,cId);
        setBill(data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBill();

    return () => {
      // Cleanup function if needed
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Bill Details</h2>
      {bill && (
        <div>
          <p>Bill ID: {bill.id}</p>
          {/* Render other bill details here */}
        </div>
      )}
    </div>
  );
};

export default FetchBill;

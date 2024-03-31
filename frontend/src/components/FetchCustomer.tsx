import { useState, useEffect } from 'react';
import { fetchCustomerDetails } from '../../api-client'; // Make sure to replace '../../api-client' with the actual path to your API file
import { useParams } from 'react-router-dom';

const FetchCustomer = () => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const fId = parseInt(id);

  useEffect(() => {
    const handleFetchCustomerDetails = async () => {
      try {
        const data = await fetchCustomerDetails(fId);
        console.log("data jhiwe",data.response.customerName);
        
        setCustomerDetails(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching customer details:', error.message);
        setError('Failed to fetch customer details');
      }
    };

    handleFetchCustomerDetails();
  }, [fId]);

  console.log("Customer data",customerDetails);
  

  return (
    <div>
      <h2>Fetch Customer Details</h2>
      <p>Customer ID: {fId}</p>
      {error && <p>{error}</p>}
      {customerDetails && (
        <div>
  
          
          <p>Customer Name: {customerDetails.response.customerName}</p>
          {/* Add more customer details rendering here if needed */}
        </div>
      )}
    </div>
  );
};

export default FetchCustomer;

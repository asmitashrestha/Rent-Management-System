import { SignInFormData } from "./pages/Login";
import { RegisterFormData } from "./pages/Register";

export const register = async (formData: RegisterFormData) => {
  const response = await fetch("http://localhost:8000/users/register", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log("register failed");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const responseBody = await response.json();
  const token = responseBody.token;

  // Make sure token is present in response body
  if (!token) {
    throw new Error("Token not found in response");
  }

  localStorage.setItem("userData", JSON.stringify(responseBody));
  console.log("Token register", token);

  return responseBody;
};

export const Login = async (formData: SignInFormData) => {
  const response = await fetch("http://localhost:8000/users/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Somthing went wrong");
  }
  const responseBody = await response.json();
  // const token = responseBody.token;
  // if(!token){
  //   throw new Error("Token not found in response")
  // }
  localStorage.setItem("userData", JSON.stringify(responseBody));
  // console.log("Token register", token);

  return responseBody;
};

export const addBuilding = async (userId: number, floors: number) => {
  try {
    const response = await fetch("http://localhost:8000/building", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, floors }),
    });
    if (!response.ok) {
      throw new Error("Failed to create building");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error adding building", error.message); // Corrected typo from error.messsage to error.message
    throw error;
  }
};

export const fetchbuilding = async () => {
  try {
    const response = await fetch("http://localhost:8000/building", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error while fetching the building details", errorText);
      throw new Error("Failed to fetch building details");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching the building details", error.message);
    throw error;
  }
};

export const addFloors = async (
  userId: number,
  floorNumber: number,
  price: number
) => {
  try {
    const response = await fetch(`http://localhost:8000/floor/${floorNumber}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        floorNumber: floorNumber,
        price: price,
      }),
    });
    console.log("response", response);

    console.log("floornumber ", floorNumber);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return data;
  } catch (error: any) {
    console.error("Errror adding floor", error.messsage);
    throw new Error(error.message);
  }
};

export const fetchFloorById = async (floorNumber: number) => {
  try {
    const response = await fetch(`http://localhost:8000/floor/${floorNumber}`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error while fetching the floor details", errorText);
      throw new Error("Failed to fetch floor details");
    }

    const data = await response.json();
    return { data, error: null }; // Return both data and error as properties
  } catch (error: any) {
    console.error("Error fetching the floor details", error.message);
    return { data: null, error }; // Return error
  }
};

export const addCustomerDetails = async (fId: number, customerName: string) => {
  console.log("Fid", fId);
  console.log("Customer name", customerName);

  try {
    const response = await fetch(`http://localhost:8000/customer/${fId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerName }),
    });
    if (!response.ok) {
      throw new Error("Failed to add customer");
    }
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error: any) {
    console.error("Error adding customer details", error.message);
    throw error;
  }
};

export const fetchCustomerDetails = async (fId: number) => {
  try {
    const response = await fetch(`http://localhost:8000/customer/${fId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch customer details");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching customer details", error.message);
    throw error;
  }
};

export const fetchFloor = async (floorNumber: number | string) => {
  try {
    const response = await fetch(`http://localhost:8000/floor/${floorNumber}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Something went wrong while fetching floor");
    }
    return response.json();
  } catch (error) {
    console.log("Error fetching floor");
  }
};

export const addBillDetails = async (
  id: number,
  floorRent: number,
  electricityCharges: number,
  waterCharges: number,
  internetCharges: number,
  others: number
) => {
  try {
    const response = await fetch(`http://localhost:8000/bill/${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        floorRent,
        electricityCharges,
        waterCharges,
        internetCharges,
        others,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create building");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error adding building", error.message);
    throw error;
  }
};

export const fetchBillDetails = async (id: number, cId: number) => {
  try {
    const response = await fetch(`http://localhost:8000/bill/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ cId }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong while fetching bill");
    }
    return response.json();
  } catch (error: any) {
    console.log("Error fetching the bill", error.message);
  }
};

export const addPayment = async (id: number, paidAmount: number) => {
  try {
    const response = await fetch(`http://localhost:8000/payment`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, paidAmount }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong while adding payment");
    }
    return true; // Return true if payment is successfully added
  } catch (error:any) {
    console.log("Error adding payment", error.message);
    throw error; // Re-throw the error to handle it in the component
  }
};
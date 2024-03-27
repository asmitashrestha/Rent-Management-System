import { SignInFormData } from "./src/pages/Login";
import { RegisterFormData } from "./src/pages/Register";

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

export const addBuilding = async (floors: number) => {
  try {
    const response = await fetch("http://localhost:8000/building", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ floors }),
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
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return data.message;
  } catch (error: any) {
    console.error("Errror adding floor", error.messsage);
    throw new Error(error.message);
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
    console.error("Error ftching the building details", error.message);
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

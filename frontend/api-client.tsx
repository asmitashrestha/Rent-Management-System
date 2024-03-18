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

  localStorage.setItem("userInfo", JSON.stringify(responseBody));
  console.log("Token register", token);

  return responseBody;
};

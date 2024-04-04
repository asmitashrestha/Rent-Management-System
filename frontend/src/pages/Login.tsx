import { Link, useLocation, useNavigate } from "react-router-dom";
import Signlogo from "../assets/sign.png";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../api-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type SignInFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.Login, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      console.log("Login successful");

      toast.success("Login Successful !", {
        position: "top-right", // Adjust based on your desired position
        autoClose: 500, // Adjust the duration the toast is displayed
        hideProgressBar: false,
      });
      navigate(location.state?.from?.pathname || "/");
    },

    onError: (error: any) => {
      if (error.response) {
        console.log("Error happend", error);

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 409) {
          // HTTP status code 409 indicates a conflict, which could mean user already exists
          toast.error("User already exists", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
          });
        } else {
          // Handle other server errors
          toast.error("An error occurred. Please try again later.", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
          });
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error(
          "No response received from server. Please try again later.",
          {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
          }
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
        });
      }
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <>
      <div className="px-10 py-10 bg-cyan-100 h-screen flex items-center justify-center">
        <div className="md:pt-1 md:pb-10 md:px-24">
          <div className="flex flex-col md:flex-row p-1 bg-white  shadow-teal-950 shadow-2xl rounded-2xl">
            <div className="md:w-1/2 p-8 md:p-16">
              <h1 className="font-bold text-2xl text-blue-950 py-4">Login</h1>
              <form onSubmit={onSubmit}>
                <div className="mb-1">
                  <label className="font-medium text-md text-gray-800">
                    Email Address
                  </label>
                  <input
                    className="w-full border-none outline-none 
              bg-secondary rounded-2xl px-4 py-2 mt-2 text-black"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="current-email"
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}

                <div className="mb-4">
                  <label className="font-semibold text-md text-gray-800">
                    Password
                  </label>
                  <input
                    className="w-full mt-2 border-none outline-none
              bg-secondary rounded-2xl border-gray-300 text-black px-4 py-2"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
                <div
                  className="bg-blue-950 flex justify-center text-center
           hover:bg-blue-700 rounded-2xl"
                >
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-white hover:text-cyan-100 font-semibold"
                  >
                    LOGIN
                  </button>
                  <ToastContainer />
                </div>
              </form>

              <div className="mt-4 flex justify-center text-center items-center">
                <p className="text-sm font-medium mr-2 text-gray-900">
                  Don't have an account yet?
                </p>
                <Link
                  to={"/register"}
                  className="text-blue-950 font-semibold hover:text-teal-950 animate-color-change"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={Signlogo} alt="img" className="w-full h-[430px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import { Link, useNavigate } from "react-router-dom";
import Signlogo from "../assets/sign.png";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../../api-client";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type RegisterFormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate('/')
      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
      }); 
    },

    onError: (error: Error) => {
      toast.error("User already exists", {
        position: "top-right", // Adjust based on your desired position
        autoClose: 500, // Adjust the duration the toast is displayed
        hideProgressBar: false,
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div>
      <div className="px-10 bg-stone-100">
        <div className="md:pt-3 md:pb-5 md:px-24">
          <div className="flex flex-col md:flex-row p-1 bg-slate-100  shadow-teal-950 shadow-2xl rounded">
            <div className="md:w-1/2 p-8 md:p-5">
              <h1 className="font-bold text-2xl text-blue-950 py-4">
                Register
              </h1>
            </div>
            <form action="" method="post" onSubmit={onSubmit}>
              <div>
                <div className="mb-4">
                  <label className="font-medium text-md text-gray-800">
                    Name
                  </label>
                  <input
                    className="w-full border-none outline-none 
              bg-stone-900 rounded-2xl px-4 py-2 mt-1 text-white"
                    type="text"
                    placeholder="Enter your name..."
                    {
                      ...register("userName",{
                        required:"This field is required",
                      })
                    }
                  />
                </div>
                {
                  errors.userName && (
                    <span className="text-red-600">{errors.userName.message}</span>

                  )
                }
                <div className="mb-4">
                  <label className="font-medium text-md text-gray-800">
                    Email Address
                  </label>
                  <input
                    className="w-full border-none outline-none 
              bg-stone-900 rounded-2xl px-4 py-2 mt-1 text-white"
                    type="email"
                    placeholder="Enter your email address..."
                    {
                      ...register("email", {
                        required:'This field is required',
                      })
                    }
                  />
                </div>
                {
                  errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>

                  )
                }
                <div className="mb-4">
                  <label className="font-semibold text-md text-gray-800">
                    Password
                  </label>
                  <input
                    className="w-full mt-1 border-none outline-none
              bg-stone-900 rounded-2xl border-gray-300 text-white px-4 py-2"
                    type="password"
                    placeholder="Enter your password..."
                    {
                      ...register("password", {
                        required: "This field is required",
                        minLength:{
                          value:8,
                          message:"Password must be 8 characters",
                        }
                      })
                    }
                  />
                </div>
                {
                  errors.password && (
                    <span className="text-red-600">
                      {errors.password.message}
                    </span>
                  )
                }
                <div className="mb-4">
                  <label className="font-semibold text-md text-gray-800">
                    Confirm Password
                  </label>
                  <input
                    className="w-full mt-1 border-none outline-none
              bg-stone-900 rounded-2xl border-gray-300 text-white px-4 py-2"
                    type="password"
                    placeholder="Confirm your password..."
                    {...register("confirmPassword", {
                      validate:(val) => {
                        if( !val ){
                          return "This field is required";
                        }else if( watch("password")!== val) {
                          return "Your password do not match"
                        }
                      }
                    })}
                    required
                  />
                </div>
                {
                  errors.confirmPassword && (
                    <span className="text-red-600">{errors.confirmPassword.message}</span>
                  )
                }
                <div
                  className="bg-blue-950 flex justify-center text-center
           hover:bg-blue-700 rounded-2xl"
                >
                  <button type="submit" className="px-4 py-1.5 text-white hover:text-cyan-100 font-semibold">
                    REGISTER
                  </button>
                </div>
                <div className="mt-4 flex justify-center text-center">
                  <p className="text-sm font-medium mr-2 text-gray-900">
                    Already have an account{" "}
                  </p>
                  <Link
                    to="/login"
                    className="text-blue-950 font-semibold hover:text-teal-950 animate-color-change"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>

            <div className="md:w-1/2">
              <img src={Signlogo} alt="img" className="w-full h-[430px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

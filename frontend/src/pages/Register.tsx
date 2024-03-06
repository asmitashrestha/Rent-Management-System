import { Link } from "react-router-dom";
import Signlogo from '../assets/sign.png'

const Login = () => {
  return (
    <div>
      <div className="px-10 bg-stone-100">
        <div className="md:pt-3 md:pb-5 md:px-24">
            <div className="flex flex-col md:flex-row p-1 bg-slate-100  shadow-teal-950 shadow-2xl rounded">
        <div className="md:w-1/2 p-8 md:p-5">
          <h1 className="font-bold text-2xl text-blue-950 py-4">Regsiter</h1>
          <div className="mb-4">
            <label className="font-medium text-md text-gray-800">Name</label>
            <input
              className="w-full border-none outline-none 
              bg-stone-900 rounded-2xl px-4 py-2 mt-1 text-white"
              type="text"
              value={"dscs"}
              placeholder="Enter your name..."
            />
          </div>
          <div className="mb-4">
            <label className="font-medium text-md text-gray-800">Email Address</label>
            <input
              className="w-full border-none outline-none 
              bg-stone-900 rounded-2xl px-4 py-2 mt-1 text-white"
              type="email"
              value={"dscs"}
              placeholder="Enter your email address..."
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-md text-gray-800">Password</label>
            <input
              className="w-full mt-1 border-none outline-none
              bg-stone-900 rounded-2xl border-gray-300 text-white px-4 py-2"
              type="password"
              value={""}
              placeholder="Enter your password..."
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-md text-gray-800">Confirm Password</label>
            <input
              className="w-full mt-1 border-none outline-none
              bg-stone-900 rounded-2xl border-gray-300 text-white px-4 py-2"
              type="password"
              value={""}
              placeholder="Confirm your password..."
              required
            />
          </div>
          <div className="bg-blue-950 flex justify-center text-center
           hover:bg-blue-700 rounded-2xl">
            <button className="px-4 py-1.5 text-white hover:text-cyan-100 font-semibold">
              REGISTER
            </button>
          </div>
          <div className="mt-4 flex justify-center text-center">
            <p className="text-sm font-medium mr-2 text-gray-900">Already have an account </p>
            <Link to='/login' className="text-blue-950 font-semibold hover:text-teal-950 animate-color-change">
                  Login
                </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Signlogo} alt="img" className="w-full h-[430px]" />
        </div>
      </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiLogoGmail, BiLocationPlus } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-950">
        <div className="flex justify-between ml-16 mt-11 ">
          <div className="mb-5 p-3">
            <h1>
              <span className="text-white text-2xl font-serif font-semibold">
                Rent
              </span>{" "}
              <span className="text-blue-400 text-2xl font-bold font-serif">
                Track
              </span>
            </h1>
            <p className="text-justify mt-4 text-md text-white font-serif">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Expedita, nam.
            </p>
          </div>
          <div className="icons flex mt-9 text-white  mb-5">
            <p>
              <p className="mr-4  p-7 text-[40px] text-blue-700  rounded-full">
                <BsFacebook />
              </p>
            </p>
            <p>
              <p className="mr-4 p-7 text-[40px] text-pink-800 rounded-full">
                <BsInstagram />
              </p>
            </p>
            <p>
              <p className="mr-4 p-7 text-[40px] rounded-full text-yellow-800">
                <BiLogoGmail />
              </p>
            </p>
          </div>

          <div className="font-serif mr-20 p-4">
            <h1 className="text-2xl font-bold justify-center text-blue-600 ">
              Discover
            </h1>
            <div className=" ml-4 mt-2 text-white ">
              <Link to="/" className="relative flex justify-center text-center">
                Home
              </Link>
              <Link
                to="/about"
                className="relative flex justify-center text-center"
              >
                About
              </Link>
              <Link
                to="/register"
                className="relative flex justify-center text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

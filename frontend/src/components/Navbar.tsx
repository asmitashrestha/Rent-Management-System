import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/rentlogo.png';

const Navbar = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["blue", "gray", "green", "black"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [colorIndex]);

  const getColor = () => {
    return colors[colorIndex];
  };

  return (
    <div>
      <nav className="flex justify-between text-center bg-gray-100">
        <div className="flex pb-5">
          <img src={Logo} alt="logo" className="rounded-full h-[55px] ml-2 relative top-2 left-5"/>
          <Link to={"/"} className="left-3 relative top-7 font-bold font-serif text-2xl hover:text-blue-800">Rent<span className="text-blue-800 hover:text-gray-900">Track</span></Link>
        </div>
        <div className="font-semibold text-xl font-serif relative right-5 top-7 hover:text-gray-800">
          <Link to={'/rent-data'}>Rent Collection</Link>
          <Link to={"/services"} style={{ color: getColor() }}>Services</Link>
          <Link to={"/login"} className="ml-10" style={{ color: getColor() }}>Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

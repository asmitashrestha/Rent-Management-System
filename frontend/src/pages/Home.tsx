import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Services from "./Services";
import Footer from "../components/Footer";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showLink, setShowLink] = useState(false);
  const textToShow =
    "Collecting house rent data: Insights for informed housing decisions ahead.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex(textIndex + 1);
    }, 50); // Adjust the delay time here (in milliseconds)

    // After the text is fully displayed, show the Link
    if (textIndex >= textToShow.length) {
      setShowLink(true);
    }

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <div>
      <Navbar />
      <div className="bg-img1 h-screen bg-cover bg-center relative">
        
        <p className="para relative top-20 p-[105px] text-xl text-gray-900 font-semibold font-serif flex justify-center text-center">
          {textToShow.slice(0, textIndex)}
        </p>
        {showLink && (
          <div className="flex justify-center text-center">
            <Link
              to="/login"
              className="underline text-lg text-blue-800 hover:text-gray-900 mr-1 font-semibold"
            >
              Click here, to know more
            </Link>
          </div>
        )}
      </div>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Home;

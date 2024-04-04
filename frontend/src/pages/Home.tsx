import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Services from "./Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showLink, setShowLink] = useState(false);
  const navigate = useNavigate()
  const textToShow =
    "Collecting house rent data: Insights for informed housing decisions ahead.";
    const handleSubmit = () => {
      navigate('/services'); // Use history.push for navigation
    };
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
      <div className="bg-img1 h-screen bg-cover bg-center relative -z-50">
        <p className="para relative top-20 p-[105px] text-xl text-gray-900 font-semibold font-serif flex justify-center text-center">
          {textToShow.slice(0, textIndex)}
        </p>
        <div className="flex justify-center text-center">
          <button 
          onClick={handleSubmit}
          className="bg-blue-700 p-3 text-white shadow-stone-950 shadow-xl text-lg rounded-md hover:bg-blue-100">Learn more</button>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;

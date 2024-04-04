import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/rentlogo.png";
import { useModalStore } from "../../stores/ModalStore";
import { useBuildingStore } from "../../stores/BuildingStore";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["blue", "gray", "green", "black"];

  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [colorIndex]);

  const getColor = () => {
    return colors[colorIndex];
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const fetchBuildingData = useBuildingStore(
    (state) => state.fetchBuildingData
  );

  useEffect(() => {
    fetchBuildingData();
  }, [fetchBuildingData]);

  const buildingData = useBuildingStore((state) => state.buildingData);
  const buildingFloors =
    buildingData.length > 0 ? buildingData[0].floors : undefined;

  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between items-center text-center bg-gray-100">
        <div className="flex justify-between items-center md:w-auto w-full p-5">
          <img
            src={Logo}
            alt="logo"
            className="rounded-full h-[55px] ml-2"
          />
          <Link
            to={"/"}
            className="font-bold font-serif text-2xl hover:text-blue-800"
          >
            Rent<span className="text-blue-800 hover:text-gray-900">Track</span>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}> {/* Use toggleMenu */}
            <GiHamburgerMenu className="text-3xl"/>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center text-xl font-semibold font-serif bg-gray-100 p-5`}
          onClick={handleOutsideClick}
        >
  
          {buildingFloors ? (
            <Link
              to={"/my-floor"}
              style={{ color: getColor() }}
              className="mr-4 mb-2 md:mb-0"
            >
              My Floors
            </Link>
          ) : null}
          <Link
            to={"/services"}
            style={{ color: getColor() }}
            className="mr-4 mb-2 md:mb-0"
          >
            Services
          </Link>
          <Link
            to={"/login"}
            style={{ color: getColor() }}
            className="mb-2 md:mb-0"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

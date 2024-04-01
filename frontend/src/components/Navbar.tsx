import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/rentlogo.png";
import { useModalStore } from "../stores/ModalStore";
import { useBuildingStore } from "../stores/BuildingStore";
import AskFloors from "./proxyForms/AskFloors";

const Navbar = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["blue", "gray", "green", "black"];

  const isOpen = useModalStore((state) => state.isOpen);
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
      <nav className="flex justify-between text-center bg-gray-100">
        <div className="flex pb-5">
          <img
            src={Logo}
            alt="logo"
            className="rounded-full h-[55px] ml-2 relative top-2 left-5"
          />
          <Link
            to={"/"}
            className="left-3 relative top-7 font-bold font-serif text-2xl hover:text-blue-800"
          >
            Rent<span className="text-blue-800 hover:text-gray-900">Track</span>
          </Link>
        </div>
        <div className="font-semibold text-xl font-serif relative right-5 top-7 hover:text-gray-800">
          <Link
            to={"/rent-data"}
            style={{ color: getColor() }}
            className="mr-9"
          >
            Rent Collection
          </Link> 
        
          {buildingFloors ? (
            <Link
              to={"/my-floor"}
              style={{ color: getColor() }}
              className="mr-2"
            >
              My Floors
            </Link>
          ) : null}

        
          <Link to={"/services"} style={{ color: getColor() }}>
            Services
          </Link>
          <Link to={"/login"} className="ml-4" style={{ color: getColor() }}>
            Login
          </Link>
        </div>
        {isOpen && (
          <div onClick={handleOutsideClick}>
            <AskFloors />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

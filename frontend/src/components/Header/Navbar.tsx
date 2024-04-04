import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/rentlogo.png";
import { useModalStore } from "../../stores/ModalStore";
import { useBuildingStore } from "../../stores/BuildingStore";

const Navbar = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["blue", "gray", "green", "black"];

  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setColorIndex((colorIndex + 1) % colors.length);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [colorIndex]);

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
      <nav className="flex justify-between text-center bg-gray-100 items-center p-2">
        <div className="flex p-2 items-center gap-2">
          <img src={Logo} alt="logo" className="rounded-full h-[55px] ml-2 " />
          <Link
            to={"/"}
            className="font-bold font-serif text-2xl hover:text-blue-800"
          >
            Rent<span className="text-blue-800 hover:text-gray-900">Track</span>
          </Link>
        </div>
        <div className="flex font-semibold text-xl font-serif  hover:text-gray-800 mr-8 gap-4">
          {/* <Link
            to={"/rent-data"}
            style={{ color: getColor() }}
            className="mr-9"
          >
            Rent Collection
          </Link> */}

          {buildingFloors ? (
            <Link
              to={"/my-floor"}
              style={{ color: getColor() }}
              className="mr-2"
            >
              My Floors
            </Link>
          ) : (
            <span
              className="cursor-pointer mx-1 text-blue-700"
              onClick={openModal}
            >
              Register building
            </span>
          )}

          <Link to={"/services"} style={{ color: getColor() }}>
            Services
          </Link>
          <Link to={"/login"} className="" style={{ color: getColor() }}>
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

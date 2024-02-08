import { NavLink } from "react-router-dom";
// import "./Header.css";
import MenuIconDark from "../assets/menu-dark.png";
import CloseMenuIconDark from "../assets/close-menu-dark.png";

import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className=" p-[15px] md:p-[24px] flex flex-row justify-between items-center text-[#083556] bg-white rounded-t-[22px] my-[20px] mx-[28px] md:my-0 xl:mx-[80px] mx-[28px]">
      <div className="logo flex items-center hidden md:block">
        <img src="" alt="" />
        <h1 className="text-[28px] ml-8 md:ml-7 lg:text-[32px] font-bold">
          NAME
        </h1>
      </div>

      <nav className="flex flex-row justify-between	 items-center w-full md:w-auto">
        <div className="w-10 h-10 mr-3.5 cursor-pointer md:hidden">
          <div onClick={toggleMenuIcon}>
            {!isOpen ? (
              <img src={MenuIconDark} />
            ) : (
              <img src={CloseMenuIconDark} />
            )}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <ul
            className={`flex flex-col md:flex-row items-center  absolute z-10 md:static right-0  left-0 transition-all duration-500 ease-in bg-[#20876E] md:bg-white mx-[28px] md:mx-0 md:mr-[20px] rounded-b-[22px] md:text-[#083556] text-white ${
              isOpen ? "top-[110px] " : "top-[-490px]"
            }`}
          >
            <li
              onClick={toggleMenuIcon}
              className="md:mr-8 text-xl md:my-0 py-3 mx-auto w-full text-center cursor-pointer md:py-0"
            >
              <NavLink
                className=" lg:text-[18px] block md:inline  text-sm font-semibold leading-6"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li
              onClick={toggleMenuIcon}
              className="md:mr-8 text-xl md:my-0 py-3 mx-auto w-full text-center cursor-pointer md:py-0"
            >
              <NavLink
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li
              onClick={toggleMenuIcon}
              className="md:mr-8 text-xl md:my-0 py-3 mx-auto w-full text-center cursor-pointer md:py-0"
            >
              <NavLink
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-"
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li
              onClick={toggleMenuIcon}
              className="md:mr-8 text-xl md:my-0 py-3 mx-auto w-full text-center cursor-pointer md:py-0"
            >
              <NavLink
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-"
                to="/team"
              >
                Team
              </NavLink>
            </li>
          </ul>

          <div className="md:mr-8 md:ml-8 text-xl md:my-0  bg-[#083556] text-white cursor-pointer rounded-[10px]">
            <button>
              <NavLink
                className="text-base lg:text-[24px] md:my-0 md:py-[10px] md:px-[16px] py-[6px] px-[10px] inline-block"
                to="/signup" >
                Get Started
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

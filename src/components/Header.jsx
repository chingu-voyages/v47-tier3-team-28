import { NavLink } from "react-router-dom";
// import "./Header.css";
import MenuIconDark from "../assets/menu-dark.png";
import CloseMenuIconDark from "../assets/close-menu-dark.png";
import UserImg from "../assets/user.png";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenuIcon = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileIcon = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const navigateToRouteAndCloseProfileMenu = (route) => {
    navigate(route);
    setIsProfileOpen(false);
  };

  return (
    <header className=" p-[15px] md:p-[24px] flex flex-row justify-between items-center text-[#083556] bg-transparent rounded-t-[22px] my-[20px] mx-[28px] md:my-0 xl:mx-[80px] mx-[28px] relative">
      <div className="logo flex items-center hidden md:block">
        <img src="" alt="" />
        <h1 className="text-[28px] ml-8 md:ml-7 lg:text-[32px] font-bold">
          LevelUp
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
            className={`flex flex-col md:flex-row items-center  absolute z-10 md:static right-0  left-0 transition-all duration-500 ease-in bg-white md:bg-transparent mx-[1px]
            md:mx-0 md:mr-[20px] rounded-b-[22px] text-[#083556]  ${
              isOpen
                ? "top-[90px] border border-[#083556] md:border-0 "
                : "top-[-490px]"
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
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-6"
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
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-6"
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
                className="lg:text-[18px] block md:inline  text-sm font-semibold leading-6"
                to="/team"
              >
                Team
              </NavLink>
            </li>
          </ul>

          <div className="md:mr-8">
            {user ? (
              <div className="flex items-center ">
                <span className="lg:text-[18px] block md:inline  text-sm md:mr-8 md:my-0">
                  Hello <span className="font-bold">{user?.firstName}</span>
                </span>
                <img
                  onClick={toggleProfileIcon}
                  src={UserImg}
                  alt=""
                  className="w-[40px] md:w-[50px] ml-4 text-xl md:my-0 cursor-pointer"
                />
              </div>
            ) : (
              <div>
                <button className="bg-[#083556] text-white cursor-pointer rounded-[10px]  md:ml-8 text-xl md:my-0">
                  <NavLink
                    className="text-base lg:text-[24px] md:my-0 md:py-[10px] md:px-[16px] py-[6px] px-[10px] inline-block"
                    to="/signup"
                  >
                    Get Started
                  </NavLink>
                </button>
              </div>
            )}
          </div>

          {isProfileOpen ? (
            <div className="absolute right-0 top-[90px] md:top-[98px] bg-white p-[10px] text-center md:text-left rounded-b-[10px] text-[#083556] border border-[#083556] left-0 md:left-auto z-[100]">
              <p
                className="p-[10px] cursor-pointer"
                onClick={() =>
                  navigateToRouteAndCloseProfileMenu("/user/profile")
                }
              >
                My Profile
              </p>
              <p
                className="p-[10px] cursor-pointer"
                onClick={() => navigateToRouteAndCloseProfileMenu("/courses")}
              >
                Courses
              </p>
              <p
                className="p-[10px] cursor-pointer"
                onClick={() =>
                  navigateToRouteAndCloseProfileMenu("/user/edit-profile")
                }
              >
                Edit Profile
              </p>
              <p
                className="p-[10px] cursor-pointer"
                onClick={() =>
                  navigateToRouteAndCloseProfileMenu("/user/change-password")
                }
              >
                Change password
              </p>
              <p
                className="p-[10px] cursor-pointer"
                onClick={() => navigateToRouteAndCloseProfileMenu("/")}
              >
                Log out
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

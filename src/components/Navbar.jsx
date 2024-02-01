import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navmenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/service",
      name: "Service",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-evenly items-center bg-white top-0 sticky shadow-xl py-2">
      <div className="flex items-center justify-start gap-4">
        <img className="w-16 h-16" src={Logo} alt="" />
        <div>
          <span className="text-[#007E85] font-roboto text-xl">Health</span>
          <span className="text-[#6EAB36] font-roboto text-xl">Care</span>
        </div>
      </div>
      <div>
        <ul className="md:flex hidden items-center justify-start gap-6">
          {navmenu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={`text-xl font-bold font-roboto ${
                  location.pathname === item.link
                    ? "text-[#007E85]"
                    : "text-black"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        {isMenuOpen === true ? (
          <IoMdClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        {isMenuOpen && (
          <div className="absolute h-80 top-16 left-0 right-0 flex flex-col justify-evenly items-center bg-white shadow-md pb-5 z-20">
            {navmenu.map((menu) => (
              <div key={menu.name}>
                <NavLink
                  to={menu.link}
                  activeClassName="text-green-700"
                  className="text-xl font-medium p-2"
                  onClick={toggleMenu}
                >
                  {menu.name}
                </NavLink>
              </div>
            ))}
            <div>
              <button className="bg-[#007E85] text-white font-medium px-4 py-2 rounded-lg">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="md:block hidden">
        <button className="bg-[#007E85] text-lg text-white font-medium px-5 py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

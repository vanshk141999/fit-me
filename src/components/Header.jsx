/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { MdOutlineLightMode } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from "../assets/logo.png";
import DarkLogo from "../assets/darklogo.png";

function Header({ isActive, toggleTheme }) {
  return (
    <div className="flex px-6 mt-10 lg:mt-4 lg:px-2 justify-between items-center lg:py-10">
      <a href="/">
        <img
          src={isActive ? DarkLogo : Logo}
          alt=""
          className="w-24 lg:ml-36"
        />
      </a>
      <div className="flex gap-4 justify-between items-center lg:gap-12 lg:mr-20">
        <div className="cursor-pointer" onClick={toggleTheme}>
          {isActive ? (
            <MdOutlineLightMode size={25} color="white" />
          ) : (
            <MdOutlineLightMode size={25} />
          )}
        </div>
        <a href="/">
          {isActive ? (
            <HiOutlineShoppingBag size={25} color="white" />
          ) : (
            <HiOutlineShoppingBag size={25} />
          )}
        </a>
        <button className="bg-black text-white rounded-lg	px-4 py-2">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;

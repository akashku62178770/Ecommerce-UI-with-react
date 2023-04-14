import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import LoggedIn from "./Loggedin";
// const Navbar: FC<{ signin: () => void; register: () => void }> = ({
//   signin,
//   register,
// }) => {
    const Navbar = () => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      color: isActive ? "black" : "#876156",
    };
  };
// 
  return (
    <nav className=" hidden flex-1 justify-between items-center md:flex ">
      <ul className="flex gap-5 lg:gap-16">
        <li>
          <NavLink
            to="/"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Browse Now
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5 lg:gap-10">
        <button
          className="text-brown hover:scale-110 hover:text-darkBrown transition text-md lg:text-lg"
        //   onClick={signin}
          onClick={console.log('signin')}
        >
          Sign in
        </button>
        <button
          className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg "
        //   onClick={register}
          onClick={console.log("register")}
        >
          Register
        </button>
      </div>
      {/* <LoggedIn /> */}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import awsugn_icon from "../../assets/new_awsugn.png";
import icon from "../../assets/dark-logo.tiff"
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png"
import HiddenMenu from "./HiddenMenu";
import Navbar from "./Navbar";
import SignIn from "./Signin";
import Register from "./Register";
import { getToken } from "../../services/LocalStorageService";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [register, setRegister] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { access_token } = getToken();

  const setActive = () => {
    setIsActive(true);
  };
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const signInClicked = () => {
    setSignin(true);
  };
  const cancleSignin = () => {
    setSignin(false);
  };
  const registerClicked = () => {
    setRegister(true);
  };
  const cancleRegister = () => {
    setRegister(false);
  };

  const refresh = () => {
    const { refresh_token } = getToken();
    fetch("https://api.awsugn.biz/auth/jwt/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ refresh_token })

    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  };

  return (
    <>
      {register ? <Register cancleRegister={cancleRegister} /> : ""}
      {signin ? <SignIn cancle={cancleSignin} /> : ""}
      <header className="flex justify-between items-center h-20 px-5 md:px-10">
        {/* <NavLink to="/"> */}
        <img
          // src={awsugn_icon}
          src={logo}
          alt=""
          className="w-[8rem] md:w-[10rem] mr-[8%] lg:mr-[16%] xl:mr-[25%] 2xl:mr-[30%]"
        />
        {/* </NavLink> */}
        <Navbar signin={signInClicked} register={registerClicked} />
        <button className="block md:hidden" onClick={openMenu}>
          Menu: <MenuIcon className="text-4xl text-brown" />
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } h-[100vh]  top-0 right-0 w-[60%] bg-white z-30 animate-sliderightmenu fixed`}
        >
          <HiddenMenu
            refresh={refresh}
            closeMenu={closeMenu}
            signin={signInClicked}
            register={registerClicked}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
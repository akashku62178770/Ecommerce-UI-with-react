import React from "react";

import cart_icon from "../../assets/cart.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const LoggedIn = () => {
  return (
    <div className="flex gap-5 lg:gap-10">
      <button className="bg-darkBrown px-5 py-2  text-white rounded-lg font-bold hover:bg-brown transition text-lg ">
        <div className="flex items-center gap-2 relative">
          <p className="font-yatra">CART</p>
          <img src={cart_icon} alt="" className="w-5 h-5" />
          <div className="absolute bg-white text-darkBrown rounded-full text-xs w-5 h-5 border border-brown top-[-1rem] right-[-1.5rem]">
            2
          </div>
        </div>
      </button>
      <div className="flex items-center gap-2">
        <p className="text-darkBrown">[Username]</p>
        <AccountCircleIcon className="text-darkBrown text-4xl" />
      </div>
    </div>
  );
};

export default LoggedIn;

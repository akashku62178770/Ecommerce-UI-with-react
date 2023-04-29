import React, { useState } from "react";
import {
  storeToken,
  getToken,
  removeToken,
} from "../../services/LocalStorageService";
import cart_icon from "../../assets/cart.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { unSetUserToken } from "../../features/authSlice";
import { unSetUserInfo } from "../../features/userSlice";

const LoggedIn = ({ cartLength }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(unSetUserInfo({ id: "", username: "" , email: "" }));
    // console.log("Logout Clicked");
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };

  return (
    <div className="flex gap-5 lg:gap-10">
      <button className="bg-darkBrown px-5 py-2  text-white rounded-lg font-bold hover:bg-brown transition text-lg ">
        <div className="flex items-center gap-2 relative">
          <Link to="/cart">
            <p className="font-yatra">CART</p>
          </Link>
          <img src={cart_icon} alt="" className="w-5 h-5" />
          <div className="absolute bg-white text-darkBrown rounded-full text-xs w-5 h-5 border border-brown top-[-1rem] right-[-1.5rem]">
            {cartLength}
          </div>
        </div>
      </button>
      <div className="flex items-center gap-2">
        {/* <p className="text-darkBrown">[Username]</p> */}
        {/* <NotificationsIcon className="text-darkBrown text-4xl" >
        
        </NotificationsIcon> */}
        <span className="fa-stack fa text-brown" data-count="28">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-bell fa-stack-1x fa-inverse"></i>
        </span>
        <div className="relative">
          <button
            type="button"
            // className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleDropdown}
          >
            <AccountCircleIcon className="text-darkBrown text-4xl" />
          </button>
          {isOpen && (
            <div className="absolute  flex-col right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                // role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-brown hover:bg-gray-100 hover:text-gray-900"
                >
                  Profile
                </Link>
                <Link
                  to="/orderpage"
                  className="block px-4 py-2 text-sm text-brown hover:bg-gray-100 hover:text-gray-900"
                >
                  My Orders
                </Link>
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={handleLogout}
                  sx={{}}
                >
                  Logout
                  <LogoutIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;

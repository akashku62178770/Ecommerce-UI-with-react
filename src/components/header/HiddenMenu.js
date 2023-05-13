import { React  } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";


const HiddenMenu = ({closeMenu, signin, register, refresh }) => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      color: isActive ? "black" : "#876156",
    };
  };
  return (
    <>
      <button onClick={closeMenu}>
        <CloseIcon className="text-4xl mt-5 ml-5 text-brown" />
      </button>
      <div className="flex flex-col justify-center items-center gap-5 mt-16">
        <NavLink
          to="/"
          style={navLinkStyles}
          className="hover:text-black text-brown text-lg"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/browse"
          style={navLinkStyles}
          className="hover:text-black text-brown text-lg"
          onClick={closeMenu}
        >
          Browse Now
        </NavLink>
        <NavLink
          to="/aboutus"
          style={navLinkStyles}
          className="hover:text-black text-brown text-lg"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        {/* <button
          className="text-brown hover:scale-125 hover:text-darkBrown transition text-lg"
          onClick={() => {
            signin();
            closeMenu();
            refresh()
          }} 
        >
          Sign in
        </button>  */}
        <button
          className="text-brown hover:scale-125 hover:text-darkBrown transition text-lg"
          onClick={() => {
            signin();
            closeMenu();
            refresh()
          }} 
        >
          Sign in
        </button>
        <button
          className="bg-darkBrown px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg "
          onClick={() => {
            register();
            closeMenu();
            refresh()
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default HiddenMenu
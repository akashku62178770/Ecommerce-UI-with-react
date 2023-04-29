import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Ordering from "./Ordering";
import ordering from "../assets/ordering.png";

const OrderPopup = ({ closeMenu, orderpage }) => {
  return (
    <>
      <div
        className=" flex justify-center items-center gap-5 inset-0  mx-auto"
        style={{
          backgroundImage: `url(${ordering})`,
          alignContent: "center",
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center ",
        //   height: "100vh",
        //   width: "70vw",
        }}
      >
        {/* <button onClick={closeMenu}>
        <CloseIcon className="text-4xl mt-5 ml-5 text-brown" />
      </button> */}
        <Ordering closeMenu={closeMenu} />
        {/* <button
          className="bg-darkBrown px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg mb-10"
          onClick={() => {
            orderpage();
            closeMenu();
          }}
        >
          Order
        </button> */}
      </div>
    </>
  );
};

export default OrderPopup;

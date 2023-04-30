import React from "react";
import rectangle from "../assets/side_rectangle.png";
import insta from "../assets/icon_ig.png";
import fb from "../assets/icon_fb.png";
import teleg from "../assets/icon_telegram.png";
import tiktok from "../assets/icon_tiktok.png";
import yt from "../assets/icon_youtube.png";
import { Link } from "react-router-dom";
const SideLinks = () => {
  return (
    <div className=" fixed right-0 z-20 top-[25%]">
      <img src={rectangle} alt="" className="sm:w-20 w-14 " />
      <Link to="https://instagram.com/awsugn">
        <img
          src={insta}
          alt=""
          className="absolute top-[1rem] right-2 sm:w-14 w-10 cursor-pointer"
        />
      </Link>
      <Link to="https://www.facebook.com/awsugn">
        <img
          src={fb}
          alt=""
          className="absolute sm:top-[6rem] top-[4.5rem] right-2 sm:w-14 w-10 cursor-pointer"
        />
      </Link>
      <Link to="https://www.t.me/s/awsugn">
        <img
          src={teleg}
          alt=""
          className="absolute sm:top-[11rem] top-[8rem] right-2 sm:w-14 w-10 cursor-pointer"
        />
      </Link>
      <div className="bg-veryLightBrown absolute sm:top-[16rem] top-[11.5rem] right-2 sm:w-14 w-10 sm:h-14 h-10 rounded-full ounded-full flex justify-center items-center cursor-pointer">
        <Link to="https://www.tiktok.com/@awsugn">
          <img src={tiktok} alt="" className=" w-5 sm:w-7" />
        </Link>
      </div>
      <Link to="https://www.youtube.com/@awsugn">
        <img
          src={yt}
          alt=""
          className="absolute sm:top-[21rem] top-[15rem] right-2 sm:w-14 w-10 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default SideLinks;

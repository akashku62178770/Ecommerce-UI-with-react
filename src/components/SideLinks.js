import React from "react";
import rectangle from "../assets/side_rectangle.png";
import insta from "../assets/icon_ig.png";
import fb from "../assets/icon_fb.png";
import teleg from "../assets/icon_telegram.png";
import tiktok from "../assets/icon_tiktok.png";
import yt from "../assets/icon_youtube.png";
const SideLinks = () => {
  return (
    <div className=" fixed right-0 z-20 top-[25%]">
      <img src={rectangle} alt="" className="sm:w-20 w-14 " />
      <img
        src={insta}
        alt=""
        className="absolute top-[1rem] right-2 sm:w-14 w-10 cursor-pointer"
      />
      <img
        src={fb}
        alt=""
        className="absolute sm:top-[6rem] top-[4.5rem] right-2 sm:w-14 w-10 cursor-pointer"
      />
      <img
        src={teleg}
        alt=""
        className="absolute sm:top-[11rem] top-[8rem] right-2 sm:w-14 w-10 cursor-pointer"
      />
      <div className="bg-veryLightBrown absolute sm:top-[16rem] top-[11.5rem] right-2 sm:w-14 w-10 sm:h-14 h-10 rounded-full ounded-full flex justify-center items-center cursor-pointer">
        <img src={tiktok} alt="" className=" w-5 sm:w-7" />
      </div>

      <img
        src={yt}
        alt=""
        className="absolute sm:top-[21rem] top-[15rem] right-2 sm:w-14 w-10 cursor-pointer"
      />
    </div>
  );
};

export default SideLinks;

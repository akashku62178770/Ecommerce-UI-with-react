import React, { useState } from "react";
import searchIcon from "../assets/search-icon.png";
import downIcon from "../assets/down.png";
import mainImg from "../assets/main-img.png";
import herobg from "../assets/hero-rec.png";
import heroOvalTop from "../assets/oval1.png";
import heroOvalBottom from "../assets/oval2.png";

import "../index.css";

const Hero = () => {
  // const [selectedData, setSelectedDate] = useState<Date | null>(); i'll see
  const [selectedData, setSelectedDate] = useState ();
  return (
    <div className="relative">
      <div className="flex flex-col gap-10 justify-center items-center md:items-start">
        <div className="flex flex-col justify-center items-center md:items-start h-[22rem] gap-[1rem] w-[100vw]">
          <div className="w-[20rem] sm:w-[25rem] xl:w-[55rem] px-[0%] 2xl:px-[10%] ">
            <h1  className="font-roboto text-[4rem] text-white md:ml-[5rem] pb-shadow">
              Pay Less
            </h1 >
            <h1  className="font-roboto text-brown text-[4rem] md:ml-[5rem] lg:ml-[15rem] drop-shadow-lg pw-shadow">
              Wear
            </h1 >
            <h1  className="font-roboto text-[4rem] text-white md:ml-[5rem] lg:ml-[20rem] lg:w-[20rem] drop-shadow-lg pb-shadow">
              The Best<span className="text-LightBrown">!</span>
            </h1 >
          </div>
          <img
            src={herobg}
            alt=""
            className="absolute -z-50 right-0 top-[-6rem] w-[40rem] lg:w-[50rem] xl:w-[70rem] hidden md:block "
          />
        </div>
        <div className=" md:pl-[5%] xl:pl-[15%]">
          <form
            action=""
            className="relative flex flex-col items-center gap-10"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Search by type, occasions, clothe name, . . ."
              className="w-[20rem] sm:w-[28rem] h-[4rem] pl-4 pr-16 rounded-xl border-2 border-brown outline-none font-roboto"
            />
            <div className="flex justify-between gap-3 sm:gap-x-5 relative ml-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Cultural"
                className="w-[9rem] sm:w-[11rem] h-[4rem] pl-4 pr-7 sm:pr-14 rounded-xl border-2 border-brown outline-none font-roboto"
              />
              {/* <button>
                <img
                  src={downIcon}
                  alt=""
                  className="absolute top-6 w-7 left-[6.5rem] sm:left-[8rem]"
                />
              </button> */}

              <input
                type="text"
                name=""
                id=""
                placeholder="26/02/2023"
                className="w-[9rem] sm:w-[11rem] h-[4rem] pl-4 pr-7 sm:pr-14 rounded-xl border-2 border-brown outline-none font-roboto"
              />
              {/* <button>
                <img
                  src={downIcon}
                  alt=""
                  className="absolute top-6 w-7 right-5 sm:right-9"
                />
              </button> */}
            </div>
            <button>
              <img
                src={searchIcon}
                alt=""
                className="absolute top-4 w-9 right-5"
              />
            </button>
            <button className="bg-darkBrown hover:bg-brown w-[100%] text-white font-roboto py-3 rounded-lg transition mt-[-2.3rem]">
              Advance Filter
            </button>
          </form>
        </div>
      </div>
      <div className="absolute top-24 right-4 lg:right-[3rem] 2xl:right-[10%] hidden md:block">
        {/* <img
          src={bgImg}
          alt="background image"
          className="h-[30rem] w-[20rem] lg:w-[30rem] lg:h-[45rem]"
        /> */}
        <div className="relative right-0 top-[-5rem] w-[22rem]">
          <img
            src={heroOvalTop}
            alt=""
            className="absolute -z-10 top-0 w-[22rem]"
          />
          <img
            src={heroOvalBottom}
            alt=""
            className="absolute -z-20 top-[-1rem] left-[-1rem]"
          />
        </div>

        <img
          src={mainImg}
          alt="main image"
          className="relative  w-[19rem] h-[40rem] xl:right-[12rem]"
        />
      </div>
    </div>
  );
};

export default Hero;

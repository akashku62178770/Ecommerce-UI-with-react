import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import topRectangle from "../assets/Rectangle 9.png";
import { HabeshaDress } from "../models/habesha-dress";
import "react-slideshow-image/dist/styles.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
const Latest = () => {
  const [isOverImg, setIsOverImg] = useState(false);
  // const [src, setSrc] = (useState < number) | (null > null);
  const [src, setSrc] = useState (null);
  const [dresses, setDresses] = useState([]);
  useEffect(() => {
    const fetchDresses = async () => {
      await axios("https://api.awsugn.biz/clothes/")
        .then(function (response) {
         
         
          console.log(response.data.results)
          setDresses(response.data.results)
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchDresses();
  }, []);
  return (
    <>
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10">
        <img src={topRectangle} className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Latest
        </p>
      </div>
      <Link
        to={"/"}
        className="absolute sm:right-28 right-16 text-brown text-xl hover:scale-110 hover:text-darkBrown transition"
      >
        View All
      </Link>
      <div className="flex flex-wrap justify-center mt-12 px-5 gap-10">
        {/* {HabeshaDress.map((dress, index) => (
          <Card index={index} dress={dress} />
        ))} */}
        {dresses.map((dress, index) => (
          <div>
            {/* <img
              src={dress.images[0].image}
              alt={`occa_dress ${dress.id}`}
              className="w-[450px]"
            /> */}
              <Card
              index={index}
              image={dress.images[0].image}
              dress={dress}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <Link
          to="/browse"
          className="border text-orange border-orange text-lg sm:text-xl px-8 py-2 sm:px-10 sm:py-4 font-sanchez rounded-lg hover:bg-orange transition hover:text-white shadow-orange shadow-lg "
        >
          Browse More
        </Link>
      </div> */}
    </>
  );
};

export default Latest;

import React, { useEffect, useState } from "react";
import topRectangle from "../assets/Rectangle 9.png";
import { OccasionalDress } from "../models/occasional-dress";
import axios from "axios";
import Card from "./Card";
import OccasionCard from "./OccasionCard";

const Occasions = () => {
  const [dresses, setDresses] = useState([]);
  useEffect(() => {
    const OccasionalDress = async () => {
      await axios("https://api.awsugn.biz/clothes/")
        .then(function (response) {
          setDresses(response.data.results);
        })

        .catch(function (error) {
          console.log(error);
        });
    };
    OccasionalDress();
  }, []);
  return (
    <>
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10">
        <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Occasions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-5 mt-10">
        {dresses.map((dress, index) => (
          <div>
            {/* <img
              src={dress.images[0].image}
              alt={`occa_dress ${dress.id}`}
              className="w-[450px]"
            /> */}
            <OccasionCard index={index} image={dress.images[0].image} dress={dress} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Occasions;

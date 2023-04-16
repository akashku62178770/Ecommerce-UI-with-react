import React from "react";
import topRectangle from "../assets/Rectangle 9.png";
import { OccasionalDress } from "../models/occasional-dress";

const Occasions = () => {
  return (
    <>
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10">
        <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Occasions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-5 mt-10">
        {OccasionalDress.map((occa) => (
          <img
            src={occa.image}
            alt={`occa_dress ${occa.id}`}
            className="w-[450px]"
          />
        ))}
      </div>
    </>
  );
};

export default Occasions;

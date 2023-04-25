import React, { useEffect, useState } from "react";
import topRectangle from "../assets/Rectangle 9.png";
import { OccasionalDress } from "../models/occasional-dress";
import axios from "axios";
import Card from "./Card";

const Occasions = () => {
  const [dresses, setDresses] = useState([]);
  useEffect(() => {
    const OccasionalDress = async () => {
      await axios("https://api.awsugn.biz/clothes/")
        .then(function (response) {
          // console.log("response1", response);
          // console.log("response2", response.data.results);
          // dresses = response.data.results;
          setDresses(response.data.results);
          // dresses.map((dress) => {
          //   console.log("id", dress.index);
          // console.log("title", dress.rent_price);
          // console.log("title", dress.sale_price);
          // });
          // console.log("dresses", dresses);
        })
        // .then((resposne) => {
        //   console.log("response", resposne);
        //   console.log("response1", resposne.data);

        // })
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
            <Card index={index} image={dress.images[0].image} dress={dress} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Occasions;

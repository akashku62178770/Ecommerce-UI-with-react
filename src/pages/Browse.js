import React, { useEffect, useState } from "react";
import herobg from "../assets/Rectangle 12.png";
import SideLinks from "../components/SideLinks";
import topRectangle from "../assets/Rectangle 9.png";

import Related from "../components/related";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";
import Latest from "../components/latest";
const Browse = () => {
  const [dresses, setDresses] = useState([]);

  const BrowseDress = async () => {
    await axios("https://api.awsugn.biz/clothes/")
      .then(function (response) {
        // console.log(response.data.results);
        setDresses(response.data.results);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    BrowseDress();

  }, )
  return (
    <>
      {/* <div>
        <img src={herobg} alt="" />
      </div> */}
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10"
        // style={{ backgroundImage: `url(${herobg})`}}
      >
        <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Occasions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-5 mt-10"
        style={{ backgroundImage: `url(${herobg})`}}
      >
      {/* <img src={herobg} alt="" /> */}
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
      <Related />
      <Latest/>
      <Footer />
    </>
  );
};

export default Browse;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import herobg from "../assets/Rectangle 12.png";
import SideLinks from "../components/SideLinks";
import topRectangle from "../assets/Rectangle 9.png";

import Related from "../components/related";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";
import Latest from "../components/latest";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const Browse = (curElem) => {
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
  const { id, name, image, price, category } = curElem;

  useEffect(() => {
    // BrowseDress();

  }, )
  const { filter_products, grid_view } = useFilterContext();
  console.log("filter_products",filter_products)
  console.log("grid_view",grid_view)
  if (grid_view === true) {
    // return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
  // return (
  //   // <>
  //   //   {/* <div>
  //   //     <img src={herobg} alt="" />
  //   //   </div> */}
  //   //   <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10"
  //   //     // style={{ backgroundImage: `url(${herobg})`}}
  //   //   >
  //   //     <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
  //   //     <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
  //   //       Occasions
  //   //     </p>
  //   //   </div>
  //   //   <div className="flex flex-wrap justify-center gap-y-5 mt-10"
  //   //     style={{ backgroundImage: `url(${herobg})`}}
  //   //   >
  //   //   {/* <img src={herobg} alt="" /> */}
  //   //     {dresses.map((dress, index) => (
  //   //       <div>
  //   //         {/* <img
  //   //           src={dress.images[0].image}
  //   //           alt={`occa_dress ${dress.id}`}
  //   //           className="w-[450px]"
  //   //         /> */}
  //   //         <Card index={index} image={dress.images[0].image} dress={dress} />
  //   //       </div>
  //   //     ))}
  //   //   </div>
  //   //   <Related />
  //   //   <Latest/>
  //   //   <Footer />
  //   // </>
 
  // );
};

export default Browse;

 
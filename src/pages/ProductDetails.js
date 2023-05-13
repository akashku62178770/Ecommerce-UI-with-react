import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProdDetail from "../components/ProdDetail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Related from "../components/related";
import Footer from "../components/Footer";
import axios from "axios";
import topRectangle from "../assets/Rectangle 9.png";
import { useProductContext } from "../context/productContext";
import { Box, Rating, Typography } from "@mui/material";
// import

const API = "";
const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const [value, setValue] = useState(4);

  useEffect(() => {
    getSingleProduct(`https://api.awsugn.biz/clothes/${id}`);
    // fetchDresses();
  }, [id]);

  const {
    title,
    description,
    category,
    occasion,
    quantity,
    num_of_time_rented,
    sale_price,
    rent_price,
  } = singleProduct;
  // console.log("occasion: " + occasion.list())
  // console.log("img: " + images )
  // const fetchDresses = async () => {
  //   await fetch(`https://api.awsugn.biz/clothes/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data:", data);
  //       setDress(data);
  //     })
  //     .catch((error) => console.log("error", error));
  //   // const res = await axios.get(`https://api.awsugn.biz/clothes/${id}`);
  //   // const singleProduct = await res.data;
  //   // console.log("data3", res.data)
  // };
  if (isSingleLoading) {
    return <div className="page_loading">Loading....</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center px-[5%] lg:px-[10%] mt-10 gap-10 md:flex-row flex-col">
        <ProdDetail id={id} />

        <div className="flex flex-col gap-5">
          <h1 className="text-darkBrown  text-3xl ">{title}</h1>
          <p>{description}</p>
          <hr className="text-brown  mt-2" />
          <h2 className="text-brown text-xl">
            Category:{" "}
            <span className="text-sm text-black pl-5">{category}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Occasions:
            {/* {occasion[0]} */}
            {occasion &&
              occasion.map((item, i) => {
                return (
                  <span className="text-sm text-black pl-5">{item.title}</span>
                );
              })}
            {/* {occasion.map((item, i) => (
              <span>{occasion.title}</span>
            ))}  */}
          </h2>
          <hr className="text-brown mt-2" />
          <h2 className="text-brown text-xl">
            Quantity:{" "}
            <span className="text-sm text-black pl-5">{quantity}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Rented:{" "}
            <span className="text-sm text-black pl-5">
              {num_of_time_rented}
            </span>
          </h2>
          <hr className="text-brown mt-2" />
          <h2 className="text-brown text-xl">
            Location:{" "}
            <span className="text-sm text-black pl-5">22 golagol area</span>
          </h2>
          <hr className="text-brown  mt-2" />
          <h2 className="text-brown text-xl">
            Sale Price:{" "}
            <span className="text-2xl line-through text-black pl-5">
              {sale_price}
            </span>
          </h2>
          <h2 className="text-brown text-xl">
            Rent Price:
            <span className="text-3xl text-black pl-5">{rent_price}</span>
          </h2>
          <button className="bg-darkBrown text-white text-xl p-2 rounded-md">
            Add to Cart
            <AddShoppingCartIcon className="ml-2 text-2xl" />{" "}
          </button>
          <button className="bg-brown text-white text-xl p-4 rounded-md">
            BOOK
          </button>
        </div>
      </div>
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10">
        <img src={topRectangle} alt="Review" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-roboto text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Review
        </p>
        <Box
          variant="container"
          sx={{
            "& > legend": { mt: 2, mx: 2 },
          }}
        >
          <div className="flex">
            <div className="flex-col mx-4 py-4 px-8">
              <Rating
              name="size-large" 
                // name="simple-controlled"
                
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend">Rate The Clothe:</Typography>
            </div>
            <div className="flex-col mx-4 py-4 border-brown">
              <textarea className="rounded border-bold border-darkBrown" rows="4" cols="50"></textarea>
            </div>
          </div>
        </Box>
      </div>
      <Related />
      <Footer />
    </>
  );
};

export default ProductDetails;

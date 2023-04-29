import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProdDetail from "../components/ProdDetail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Related from "../components/related";
import Footer from "../components/Footer";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  // const dresses = location.state;
  const [dress, setDress] = useState([]);

  useEffect(() => {
    fetchDresses();
  });

  const fetchDresses = async () => {
    await fetch(`https://api.awsugn.biz/clothes/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("data:", data);
        setDress(data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="flex justify-between items-center px-[5%] lg:px-[10%] mt-10 gap-10 md:flex-row flex-col">
        <ProdDetail id={dress.id} />

        <div className="flex flex-col gap-5">
          <h1 className="text-darkBrown  text-3xl ">{[dress.title]}</h1>
          <p>{[dress.description]}</p>
          <hr className="text-brown  mt-2" />
          <h2 className="text-brown text-xl">
            Category:{" "}
            <span className="text-sm text-black pl-5">{[dress.category]}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Occasions:
            {/* {[dress.occasion].map((item) => {
              return (
                <span className="text-sm text-black pl-5">{[item.title]}</span>
              );
            })} */}
          </h2>
          <hr className="text-brown mt-2" />
          <h2 className="text-brown text-xl">
            Quantity:{" "}
            <span className="text-sm text-black pl-5">{[dress.quantity]}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Rented:{" "}
            <span className="text-sm text-black pl-5">
              {[dress.num_of_time_rented]}
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
              {[dress.sale_price]}
            </span>
          </h2>
          <h2 className="text-brown text-xl">
            Rent Price:
            <span className="text-3xl text-black pl-5">
              {[dress.rent_price]}
            </span>
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

      <Related />
      <Footer />
    </>
  );
};

export default ProductDetails;

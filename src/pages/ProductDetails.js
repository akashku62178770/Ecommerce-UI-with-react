import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProdDetail from "../components/proDetail";
import { HabeshaDress } from "../models/habesha-dress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Related from "../components/related";
import Footer from "../components/Footer";
import axios from "axios";

const ProductDetails = ({id}) => {
  const location = useLocation();
  const dresses = location.state;
  console.log(dresses);
  useEffect(() => {
    const fetchDresses = async () => {
      await axios("https://api.awsugn.biz/clothes/{id}")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchDresses();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-[5%] lg:px-[10%] mt-10 gap-10 md:flex-row flex-col">
        <ProdDetail images={dresses} />
        <div className="flex flex-col gap-5">
          <h1 className="text-darkBrown  text-3xl ">
            Wedding Habesha Cultural Dress
          </h1>
          <p>description</p>
          <hr className="text-brown  mt-2" />
          <h2 className="text-brown text-xl">
            Category: <span className="text-sm text-black pl-5">Cultural</span>
          </h2>
          <h2 className="text-brown text-xl">
            Occasions: <span className="text-sm text-black pl-5">Weddings</span>
          </h2>
          <hr className="text-brown mt-2" />
          <h2 className="text-brown text-xl">
            Quantity: <span className="text-sm text-black pl-5">6</span>
          </h2>
          <h2 className="text-brown text-xl">
            Rented: <span className="text-sm text-black pl-5">1 time</span>
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
              8500 ETB
            </span>
          </h2>
          <h2 className="text-brown text-xl">
            Rent Price:{" "}
            <span className="text-3xl text-black pl-5">1500 ETB</span>
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

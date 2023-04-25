import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProdDetail from "../components/proDetail";
import { HabeshaDress } from "../models/habesha-dress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Related from "../components/related";
import Footer from "../components/Footer";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const dresses = location.state;
  const baseUrl = "https://api.awsugn.biz/clothes/";
  const [dress, setDress] = useState(null);
  console.log("dresses", dresses);
  console.log("id", id);
  useEffect((id) => {
    const fetchDresses = async (id) => {
      // https://api.awsugn.biz/clothes/1/
      console.log("hi");
      await axios(baseUrl + id)
        .then(function (response) {
          console.log("data:", response.data.title);
          setDress(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchDresses(id);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-[5%] lg:px-[10%] mt-10 gap-10 md:flex-row flex-col">
        {/* <ProdDetail images={dress.image} /> */}
        <div className="flex flex-col gap-5">
          <h1 className="text-darkBrown  text-3xl ">{dress.title}</h1>
          <p>{dress.description}</p>
          <hr className="text-brown  mt-2" />
          <h2 className="text-brown text-xl">
            Category:{" "}
            <span className="text-sm text-black pl-5">{dress.category}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Occasions:{" "}
            <span className="text-sm text-black pl-5">{dress.occasion}</span>
          </h2>
          <hr className="text-brown mt-2" />
          <h2 className="text-brown text-xl">
            Quantity:{" "}
            <span className="text-sm text-black pl-5">{dress.quantity}</span>
          </h2>
          <h2 className="text-brown text-xl">
            Rented:{" "}
            <span className="text-sm text-black pl-5">
              {dress.num_of_time_rented}
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
              {dress.sale_price}
            </span>
          </h2>
          <h2 className="text-brown text-xl">
            Rent Price:
            <span className="text-3xl text-black pl-5">{dress.rent_price}</span>
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

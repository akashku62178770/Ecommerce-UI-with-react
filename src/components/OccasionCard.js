import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { HabeshaDress } from "../models/habesha-dress";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { UserContext, CartContext } from "../Context";
import ProductDetails from "../pages/ProductDetails";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { getToken } from "../services/LocalStorageService";
import {
  Card,
  CardActionArea,
  CardActions,
  CardConte,
  CardMedia,
  Button,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const OccasionCard = ({ index, image, dress }) => {
  const [isOverImg, setIsOverImg] = useState(false);
  const { access_token } = getToken();
  const [src, setSrc] = useState(null);
  const [cartButtonStatus, setCartButtonStatus] = useState(false);
  const navigate = useNavigate();
  //   const {cartData, setCartData} = useContext(CartContext);
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  const [display, setDisplay] = useState(false);

  return (
    <div
      key={index}
      className="flex flex-col gdressap-2  w-[26rem] h-[26rem] mb-10 hover:border-2 border-brown/100 transition-all px-2 rounded-md py-2 hover:shadow-xl"
    >
      <div
        className="slide-container w-[25rem]  h-[25rem] cursor-pointer"
        onMouseEnter={() => {
          setSrc(index + 1);
          setIsOverImg(true);
          console.log("entered");
        }}
        onMouseLeave={() => {
          setSrc(index);
          setIsOverImg(false);
        }}
        onClick={() => {
          console.log("onClick");
          // navigate(`/browse/${dress.id}`,
          navigate(`/browse/${dress.id}`);
          <ProductDetails id={dress.id} />;
        }}
      >
        <Fade
          autoplay={isOverImg && dress.id === src ? true : false}
          arrows={false}
          infinite
          defaultIndex={index}
          duration={1500}
          pauseOnHover={false}
        >
          {/* {isOverImg ? ( 
            <div className="w-[15rem]" style={{backgroundImage: `url(${image})` }}>
            <div className="flex-container ">  
                
              <h1 className="absolute text-lg"> {dress.occasion[0].title}</h1>
              <button className="justify-center mx-auto my-auto items-center rounded bg-white bg-brown">View Collection</button> 
              <img src={image} alt="img" className="object-fill w-[15rem]" /> 
           </div>
          </div>  
          ): (    
          <div className="w-[15rem]">
            <div className="image-container ">
              <img src={image} alt="img" className="object-fill w-[15rem]" />
            </div>
          </div>  
           )} */}
          {isOverImg ? (
            <div
              className="w-[25rem] h-[25rem] occasionType border-lg"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div
                className="flex-container flex-col gap-2 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(218, 189, 153, 0.55);"
                }}
              >
                <h1 className="absolute text-lg top-10 py-12 text-brown" style={{fontWeight: "bold", fontSize: 38}}> {dress.occasion[0].title} 's</h1>
                <button className="absolute mx-auto  items-center rounded bg-brown p-2">
                  View Collection
                </button>
                <img src={image} alt="img" className="object-fill w-[25rem] mx-4 " />
              </div>
            </div>
          ) : (
            <div className="w-[25rem] h-[25rem]">
              <div className="image-container">
                <img src={image} alt="img" className="object-fill w-[25rem] mx-4" />
              </div>
            </div>
          )}
        </Fade>
      </div>
    </div>
  );
};

export default OccasionCard;

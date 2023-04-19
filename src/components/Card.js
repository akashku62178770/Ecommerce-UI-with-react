import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { HabeshaDress } from "../models/habesha-dress";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Card = ({ id, index, image, dress }) => {
  const [isOverImg, setIsOverImg] = useState(false);
  // const [src, setSrc] = useState<number | null>(null); i'll see
  const [src, setSrc] = useState(null);
  const [cartButtonStatus, setCartButtonStatus] = useState(false);
  const navigate = useNavigate();

  const addClicked = (dress) => {
    console.log(dress);
    const cartData = [
      {
        'product': {
          "id": dress.id, 
          "title": dress.title
        },
        "user": {
          "id": 1
      }
    }
    ];
    let cartString = JSON.stringify(cartData);
    localStorage.setItem('cartDAta', cartString);
  };

  // for reference
  

  return (
    <div
      id={id}
      className="flex flex-col gap-2  w-[16rem] mb-10 hover:border-2 border-brown/80 transition-all px-2 rounded-md py-2 hover:shadow-xl"
    >
      <div
        className="slide-container w-[15rem] cursor-pointer"
        onMouseEnter={() => {
          setSrc(index + 1);
          setIsOverImg(true);
        }}
        onMouseLeave={() => {
          setSrc(index);
          setIsOverImg(false);
        }}
        onClick={() => {
          console.log("onClick");
          // navigate(`/browse/${dress.id}`, { state: HabeshaDress });
          navigate(`/browse/${id}`, {});
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
          {/* {HabeshaDress.map((fadeImage, i) => (
            <div className="each-fade w-[15rem]" key={i}>
              <div className="image-container ">
                <img src={fadeImage.image} className="object-fill w-[15rem]" />
              </div>
            </div>
          ))} */}
          <div className="w-[15rem]">
            <div className="image-container ">
              <img src={image} className="object-fill w-[15rem]" />
            </div>
          </div>
        </Fade>
      </div>
      <h1 className="font-yatra  text-2xl text-center text-darkBrown">
        {dress.title}
      </h1>
      <p className="text-center text-xl font-roboto text-brown ">
        Quantity: {dress.quantity}
      </p>
      <p className="text-center font-light font-montserrat text-brown text-xl">
        <s>{dress.sale_price} Birr</s>
      </p>

      <p className="text-center  text-3xl text-darkBrown">
        {dress.rent_price} Birr
      </p>
      <div className="flex justify-center">
        <button
          className="bg-darkBrown hover:bg-brown  text-white py-3 w-[10rem] rounded-lg transition font-bold text-xl mb-10 mx-5"
          type="button"
          onClick={addClicked(dress)}
        >
          Add to Cart
          <i className="fa-solid fa-cart-plus ms-2"></i>
        </button>
        {/* <AddShoppingCartOutlinedIcon/> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> */}
      </div>
    </div>
  );
};

export default Card;

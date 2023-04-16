import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { HabeshaDress } from "../models/habesha-dress";

const Card = ({index, dress}) => {
  const [isOverImg, setIsOverImg] = useState(false);
  // const [src, setSrc] = useState<number | null>(null); i'll see
  const [src, setSrc] = useState(null);
  const navigate = useNavigate();

  const bookClicked = () => {};
  return (
    <div className="flex flex-col gap-2  w-[16rem] mb-10 hover:border-2 border-brown/80 transition-all px-2 rounded-md py-2 hover:shadow-xl">
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
          navigate(`/browse/${dress.id}`, { state: HabeshaDress });
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
          {HabeshaDress.map((fadeImage, i) => (
            <div className="each-fade w-[15rem]" key={i}>
              <div className="image-container ">
                <img src={fadeImage.image} className="object-fill w-[15rem]" />
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <h1 className="font-yatra  text-2xl text-center text-darkBrown">
        {dress.name}
      </h1>
      <p className="text-center text-xl font-roboto text-brown ">
        {dress.size}
      </p>
      <p className="text-center font-light font-montserrat text-brown text-xl">
        <s>{dress.oldPrice} Birr</s>
      </p>

      <p className="text-center  text-3xl text-darkBrown">{dress.price} Birr</p>
      <div className="flex justify-center">
        <button
          className="bg-darkBrown hover:bg-brown  text-white py-3 w-[10rem] rounded-lg transition font-bold text-xl mb-10"
          onClick={bookClicked}
        >
          BOOK
        </button>
      </div>
    </div>
  );
};

export default Card;

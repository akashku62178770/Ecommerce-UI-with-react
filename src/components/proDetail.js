import React, { FC } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Carousel } from "react-responsive-carousel";

// const ProdDetail: FC<{ images: any }> = ({ images }) => 
const ProdDetail = ({ images }) =>{
  const imagess = images.map((i: any) => ({
    url: i.image,
  }));
  return (
    <div className="flex justify-center items-center bg-white border-t-4 border-b-4   border-brown xl:w-[35rem]">
      {/* <SimpleImageSlider
        width={500}
        height={700}
        images={imagess}
        showBullets={false}
        showNavs={true}
        navStyle={2}
      /> */}
      <Carousel
        className="lg:w-[30rem] w-[22rem] flex justify-center flex-col "
        showIndicators={true}
        // infiniteLoop
        renderArrowPrev={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute top-[50%] left-2 z-10"
          >
            <ArrowBackIosIcon className="text-4xl text-brown" />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute top-[50%] right-2 z-10"
          >
            <ArrowForwardIosIcon className="text-4xl text-brown" />
          </button>
        )}

        // renderArrowPrev={null}
      >
        {images.map((i: any) => (
          <div>
            <img src={i.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProdDetail;

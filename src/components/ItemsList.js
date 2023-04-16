import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { HabeshaDress } from "../models/habesha-dress";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { useRef, useState } from "react";
import topRectangle from "../assets/Rectangle1.png";

const ItemsList = () => {
  const [isOverImg, setIsOverImg] = useState(false);
  // const [src, setSrc] = useState<number | null>(null);
  const [src, setSrc] = useState(null);
  const fadeRef = useRef(null);

  return (
    <>
      <div className="border-t-2 border-orange mt-20 relative">
        <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-yatra text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Latest
        </p>
      </div>
      <Box className="flex flex-wrap justify-center gap-[5%] mt-[10rem] px-5">
        {HabeshaDress.map((dress, index) => (
          <Box
            className="flex flex-col gap-3 shadow-md w-[15rem] mb-10"
            key={index}
          >
            <Box
              className="w-[15rem]"
              onMouseEnter={() => {
                setSrc(index + 1);
                setIsOverImg(true);
              }}
              onMouseLeave={() => {
                setSrc(null);
                setIsOverImg(false);
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
                  <div className="each-fade w-fit" key={i}>
                    <div className=" w-fit">
                      <img src={fadeImage.image} />
                    </div>
                  </div>
                ))}
              </Fade>
            </Box>

            <h1 className="font-bold font-raleway text-2xl text-center">
              {dress.name}
            </h1>
            <p className="text-center font-light font-montserrat text-orange ">
              {dress.size}
            </p>

            <p className="text-center  text-3xl text-orange">
              {dress.price} Birr
            </p>

            <Box className="flex justify-center">
              <Button
                size="large"
                variant="contained"
                className="bg-orange text-xl mb-4 hover:shadow-black hover:shadow-sm hover:bg-deepOrage w-fit"
              >
                Book
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ItemsList;

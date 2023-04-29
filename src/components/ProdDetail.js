import React, {   useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

const ProdDetail = ( ) => {
  const [image, setImage] = useState([]);
  const {id} = useParams()

  const fetchImage = async () => {
    await fetch(`https://api.awsugn.biz/clothes/${id}/images/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setImage(data.results);
      })
      .catch((error) => console.log("error", error));
  };
  // useEffect(() => {
  fetchImage();
  // });

  return (
    <Carousel>
      {image.map((image, i) => {
        return (
          <>
            <p key={i}>{image.id} </p>
            <img
              className="object-fill"
              
              src={[image.image]}
              alt="image"
            />
          </>
        );
      })}
    </Carousel>
  );
};

export default ProdDetail;

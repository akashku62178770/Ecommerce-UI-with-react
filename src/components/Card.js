import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { HabeshaDress } from "../models/habesha-dress";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { UserContext, CartContext } from "../Context";
import ProductDetails from "../pages/ProductDetails";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { getToken } from "../services/LocalStorageService";

const Card = ({ index, image, dress }) => {
  const [isOverImg, setIsOverImg] = useState(false);
  const { access_token } = getToken();
  const [src, setSrc] = useState(null);
  const [cartButtonStatus, setCartButtonStatus] = useState(false);
  const navigate = useNavigate();
  const { cartData, setCartData } = useContext(CartContext);
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  // const postCartData = async (cartid) => {
  //   // console.log("iddata1", cartid)
  //   // cartid =  "cartid"
  //   await fetch("https://api.awsugn.biz/carts/" + cartid + "/items", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `JWT ${access_token}`,
  //     },
  //     body: JSON.stringify(cartData.products),
  //   }).then((response) =>
  //     response
  //       .json()
  //       .then((data) => {
  //         console.log("cart data?", data);
  //         console.log("cartid?", cartid);
  //       })
  //       .catch((error) => console.error(error))
  //   );
  // };

  useEffect(() => {
    // addClicked()
    // console.log("useEffect")
    // var id = dress.id;
    // checkProductInCart(id)
  }, []);

  function checkProductInCart(product_id) {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    if (cartJson != null) {
      cartJson.map((cart) => {
        if (cart != null && cart.dress.id === product_id) {
          setCartButtonStatus(true);
        }
      });
    }
  }

  const addClicked = () => {
    // console.log("dress:", dress.id);
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);

    // console.log(dress);
    var cartData = {
      product: dress,

      user: data ? data.id : "",
    };

    if (cartJson != null) {
      cartJson.push(cartData);
      var cartString = JSON.stringify(cartJson);
      localStorage.setItem("cartData", cartString);
      setCartData(cartJson);
    } else {
      var newCartList = [];
      newCartList.push(cartData);
      var cartString = JSON.stringify(newCartList);
      localStorage.setItem("cartData", cartString);
    }
    setCartButtonStatus(true);
  };

  // for reference
  // const cartRemoveButtonHandler = () => {
  //   var previousCart = localStorage.getItem("cartData");
  //   var cartJson = JSON.parse(previousCart);
  //   cartJson.map((cart, index) => {
  //     if(cart != null && cart.product.id == productData.id){
  //       delete cartJson[index]; // not tthis
  //       cartJson.splice(index, 1);
  //     }
  //   });
  //   var cartString = JSON.stringify(cartJson);
  //   localStorage.setItem("cartData", cartString);
  //   setCartButtonStatus(false);
  //   setCartData(cartJson);
  // }

  return (
    <div
      key={index}
      className="flex flex-col gdressap-2  w-[16rem] mb-10 hover:border-2 border-brown/80 transition-all px-2 rounded-md py-2 hover:shadow-xl"
    >
      <div
        className="slide-container w-[15rem] cursor-pointer"
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
        {dress.id}
      </h1>
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
          onClick={addClicked}
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

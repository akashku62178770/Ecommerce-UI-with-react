import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext, UserContext } from "../Context";
import OrderPage from "./OrderPage";
import OrderPopup from "./OrderPopup";
import { getToken } from "../services/LocalStorageService";
import CartItems from "./CartItems";

// [
//   {
//       "cart_id": "0c07d36a-cbdf-4d45-b98d-5f27ee645466",
//       "user": 11,
//       "items": [
//           {
//               "id": 2,
//               "cart": "0c07d36a-cbdf-4d45-b98d-5f27ee645466",
//               "clothe": 1,
//               "quantity": 1,
//               "created_at": "2023-04-23T18:08:58.480902Z",
//               "last_update": "2023-04-23T18:08:58.480933Z"
//           }
//       ],
//       "last_update": "2023-04-23T09:41:14.526228Z",
//       "created_at": "2023-04-23T09:41:14.526189Z"
//   }
// ]
// https://api.awsugn.biz/carts/0c07d36a-cbdf-4d45-b98d-5f27ee645466/

// [
//   {
//       "id": 2,
//       "cart": "0c07d36a-cbdf-4d45-b98d-5f27ee645466",
//       "clothe": 1,
//       "quantity": 1,
//       "created_at": "2023-04-23T18:08:58.480902Z",
//       "last_update": "2023-04-23T18:08:58.480933Z"
//   }
// ]
const Cart = () => {
  // const userContext = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);
  const [orderpage, setOrderPage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { access_token } = getToken();
  const [cartid, setCartid] = useState(null);
  const [dress, setDress] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  // console.log("cartpage", cartData);
  const [cartItems, setCartItems] = useState({
    clothe: "1",
    quantity: "1",
  });

  const postCartItems = async () => {
    await fetch("https://api.awsugn.biz/carts/" + cartid + "/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${access_token}`,
      },
      body: JSON.stringify(cartItems),
    }).then((response) =>
      response
        .json()
        .then((data) => {
          console.log("cart data?", data);
          console.log("cartid?", cartid);
        })
        .catch((error) => console.error(error))
    );
  };

  const getCartid = async () => {
    await fetch("https://api.awsugn.biz/carts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDress(data);
        // console.log("dress:", data);
        // console.log("id:", data[0].cart_id);
        setCartid(data[0].cart_id);
        // console.log("id1", cartid);
      })
      .catch((error) => console.log("error", error));
  };

  // const getCartProducts = async () => {
  //   await fetch("https://api.awsugn.biz/clothes/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `JWT ${access_token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDress(data);
  //       // console.log("dress:", data);
  //       // console.log("id:", data[0].cart_id);
  //       setCartid(data[0].cart_id);
  //       // console.log("id1", cartid);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  // Posting cart data
  const postCartData = async () => {
    console.log("iddata1", cartid);
    // cartid =  "cartid"
    await fetch("https://api.awsugn.biz/carts/" + cartid + "/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${access_token}`,
      },
      body: JSON.stringify(cartData.products),
    }).then((response) =>
      response
        .json()
        .then((data) => {
          console.log("cart data?", data);
          console.log("cartid?", cartid);
        })
        .catch((error) => console.error(error))
    );
  };
  getCartid();
  // useEffect(() => {
  // getCartid();
  // postCartData();
  // }, []);

  const handleCheckboxChange = (event) => {
    // setIsChecked(event.target.checked);
  };

  const handleSubmit = (product_id) => {
    // const value = parseInt(document.getElementById("item.product.dress.quantity").value)
    // console.log(value);
    // setCount(value-1)
  };

  const openMenu = () => {
    setIsOpen(true);
    postCartData();
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const orderPageClicked = () => {
    setOrderPage(true);
  };
  const cancleOrder = () => {
    setOrderPage(false);
  };

  return (
    <>
      {orderpage ? <OrderPage cancleOrder={cancleOrder} /> : ""}

      <header
        className="flex-container h-[15vh] p-4"
        style={{ backgroundColor: "#FFFAFA" }}
      >
        <div className="flex gap-5 padding-10 my-10 justify-left ">
          <h1
            className="text-brown font-bold text-xl justify-content left-[100px] text-center"
            style={{ fontSize: 84 }}
          >
            CART:
          </h1>
        </div>
      </header>
      <p>{cartid}</p>
      <CartItems cartid={cartid} />

      <div className="flex flex-wrap py-10">
        <div className="flex-col mx-auto">
          <div className="flex gap-10 ">
            <h3 className="flex-col text-brown mx-0 left-0 align-left">
              <b>Sum</b>
            </h3>
            <h3 className="flex-col text-brown align-right">
              <b>4500</b>
            </h3>
          </div>
          <div className="flex gap-10 lg:gap-10">
            <button
              className="bg-darkBrown text-white rounded-lg hover:scale-110 hover:text-darkBrown transition text-md lg:text-lg"
              onClick={openMenu}
              // onClick={console.log('signin')}
            >
              Order
            </button>
            <button
              className="bg-darkBrown text-white rounded-lg hover:scale-110 hover:text-darkBrown transition text-md lg:text-lg"
              onClick={postCartItems}
              // onClick={console.log('signin')}
            >
              Save Cart
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } h-[100vh]  top-0 right-0 w-[60%] bg-white z-30 animate-sliderightmenu fixed`}
          >
            <OrderPopup
              closeMenu={closeMenu}
              // cancleOrder = {cancleOrder}
              orderpage={orderPageClicked}
              // register={registerClicked}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col mx-auto px-4">
        <div className="flex items-center">
          <div className="mr-4">
            <span className="font-bold">Total price:</span>
          </div>
          <div>
            <span>3340</span>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext, UserContext } from "../Context";
import OrderPage from "./OrderPage";
import OrderPopup from "./OrderPopup";

const Cart = () => {
  const userContext = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);
  const [orderpage, setOrderPage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState({
    userId: "",
    id: "",
    clothe: "",
    quantity: "",
    created_at: "",
    last_update: "",
  });
  // const
  console.log(cartData);
  //   [
  //     {
  //         "id": 2,
  //         "cart": "0c07d36a-cbdf-4d45-b98d-5f27ee645466",
  //         "clothe": 1,
  //         "quantity": 1,
  //         "created_at": "2023-04-23T18:08:58.480902Z",
  //         "last_update": "2023-04-23T18:08:58.480933Z"
  //     }
  // ]
  // const [isChecked, setIsChecked] = useState(false);
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(),
  //   };
  //   fetch("https://api.awsugn.biz/carts/{id}/items", requestOptions)
  //     .then((response) => response.json())
  //     // .then((data) => this.setState({ postId: data.id }));
  // }, []);

  const handleCheckboxChange = (event) => {
    // setIsChecked(event.target.checked);
  };

  const handleIncrement = (product_id) => {
    // const value = parseInt(document.getElementById("quantity_required").value)
    // setCount(value+1)
    // console.log(value);
  };
  const handleDecrement = (product_id) => {
    // const value = parseInt(document.getElementById("item.product.dress.quantity").value)
    // console.log(value);
    // setCount(value-1)
  };
  const handleSubmit = (product_id) => {
    // const value = parseInt(document.getElementById("item.product.dress.quantity").value)
    // console.log(value);
    // setCount(value-1)
  };

  const openMenu = () => {
    setIsOpen(true);
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

      <div className="flex flex-col">
        {cartData &&
          cartData.map((item) => {
            return (
              <div className="flex mx-auto my-4">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={handleCheckboxChange}
                />
                <div
                  className="flex bg-darkBrown grid-container rounded w-[100vh] mx-2"
                  style={{}}
                >
                  <img
                    src={item.product.dress.images[0].image}
                    alt="..."
                    className="object-fill w-[15vh]"
                  />
                  <div className="flex-column text-white">
                    <h4 className="ms-4 mt-4">
                      <b>{item.product.dress.title}</b>
                    </h4>
                    <h5>Available Quantity: {item.product.dress.quantity}</h5>
                    <h5>Rented: {item.product.dress.num_of_time_rented}</h5>
                  </div>

                  <div className="custom-number-input mx-auto align-bottom  text-white">
                    <br />
                    <br />
                    <div className=" flex h-5 w-20 rounded relative bg-transparent mt-1 xs">
                      <button
                        data-action="decrement"
                        className=" bg-buttonBg text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={handleDecrement(item.product.dress.id)}
                      >
                        <span className="m-auto text-black font-bold text-md">
                          −
                        </span>
                      </button>

                      <input
                        type="int"
                        id={item.product.dress.quantity}
                        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-brown"
                        name="custom-input-number"
                        // value={value}
                        // value="2"
                        // onChange={}
                      />

                      <button
                        data-action="increment"
                        className="bg-buttonBg text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={handleIncrement(item.product.dress.id)}
                      >
                        <span className="m-auto font-bold text-md text-black btn-md rounded-full">
                          +
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex-column text-white">
                    <h4 className="ms-4 mt-4">
                      <b>{item.product.dress.title}</b>
                    </h4>
                    {/* <h5>{} *{item.product.dress.rent_price}</h5> */}
                    <h5 id="result">2 *{item.product.dress.rent_price}</h5>

                    <h5></h5>
                  </div>
                </div>
              </div>
            );
          })}
        {!cartData && (
          <div className="flex-container mx-auto">
            <h2 className="padding text-lg my-4" style={{ fontSize: 32 }}>
              Nothing in the cart!
            </h2>
            <Link to="/">
              <button className="button bg-darkBrown rounded-lg text-white hover:bg-brown text-lg w-[15vh] mt-">
                Home
              </button>
            </Link>
          </div>
        )}
      </div>

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

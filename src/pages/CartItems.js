import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
import { CartContext, UserContext } from "../Context";

const CartItems = ({ cartid }) => {
  const { access_token } = getToken();
  const { cartData, setCartData } = useContext(CartContext);
  const [num, setNum] = useState(0);
  const [cartItems, setCartItems] = useState({
    clothe: "",
    quantity: "",
  
  });
  

  // cartData.map((item) => {
  //   console.log("item;", item.product)
  //   setCartItems(
  //     {quantity: item.product.quantity })
  // })

  const handleIncrement = (id) => {
    // const value = parseInt(document.getElementById("quantity_required").value)
    // setCount(value+1)
    // console.log(value);
  };
  const handleDecrement = (id) => {
    // const value = parseInt(document.getElementById("item.product.dress.quantity").value)
    // console.log(value);
    // setCount(value-1)
  };
  // cartData.

// console.log(cartItems)
  // let incNum =()=>{
  //     if(num<10)
  //     {
  //     setNum(Number(num)+1);
  //     }
  //   };
  //   let decNum = () => {
  //      if(num>0)
  //      {
  //       setNum(num - 1);
  //      }
  //   }
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  //   const getCartItems = async () => {
  //     console.log("cartid12", cartid);
  //     // await fetch(`https://api.awsugn.biz/carts/${cartid}/items`, {
  //     await fetch("https://api.awsugn.biz/carts/" + cartid + "/items", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `JWT ${access_token}`,
  //       },
  //     }).then((response) =>
  //       response
  //         .json()
  //         .then((data) => {
  //           console.log("cart data:", data);
  //           //   setCartData(data);
  //         })
  //         .catch((error) => console.error(error))
  //     );
  //   };

  //   useEffect(() => {
  //   getCartItems();
  // }, []);

  const handleCheckboxChange = (event) => {
    // setIsChecked(event.target.checked);
  };
  // cartData.map((item) => {
  //   console.log("product;", item.product)
  // })
  console.log(cartData)

  // const handleIncrement = (id) => {
  //   setNum(Number(num) + 1);
  // };
  // const handleDecrement = () => {
  //   setNum(num - 1);
  // };
  const handleSubmit = (product_id) => {
    // const value = parseInt(document.getElementById("item.product.dress.quantity").value)
    // console.log(value);
    // setCount(value-1)
  };
  return (
    <>
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
                    // src={item.product.dress.images[0].image}
                    src={item.product.images[0].image}
                    // src={item.images.first().image}
                    alt="..."
                    className="object-fill w-[15vh]"
                  />
                  <div className="flex-column text-white">
                    <h4 className="ms-4 mt-4">
                      {/* <b>{item.product.dress.title}</b> */}
                      <b>{item.product.title}</b>
                    </h4>
                    {/* <h5>Available Quantity: {item.product.dress.quantity}</h5> */}
                    {/* <h5>Available Quantity: {item.quantity}</h5> */}
                    {/* <h5>Rented: {item.product.dress.num_of_time_rented}</h5> */}
                    <h5>Rented: {item.product.num_of_time_rented}</h5>
                  </div>

                  <div className="custom-number-input mx-auto align-bottom  text-white">
                    <br />
                    <br />
                    <div className=" flex h-5 w-20 rounded relative bg-transparent mt-1 xs">
                      <button
                        data-action="decrement"
                        className=" bg-buttonBg text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        // onClick={handleDecrement(item.product.dress.id)}
                        onClick={handleDecrement}
                      >
                        <span className="m-auto text-black font-bold text-md">
                          −
                        </span>
                      </button>

                      <input
                        type="int"
                        // id={item.product.dress.quantity}
                        // id={item.product.quantity}
                        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-brown"
                        name="number"
                        value={num}
                        onChange={handleChange}
                      />

                      <button
                        data-action="increment"
                        className="bg-buttonBg text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        // onClick={handleIncrement(item.product.dress.id)}
                        onClick={handleIncrement}
                      >
                        <span className="m-auto font-bold text-md text-black btn-md rounded-full">
                          +
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex-column text-white">
                    <h4 className="ms-4 mt-4">
                      {/* <b>2 *{item.product.dress.rent_price}</b> */}
                      <b>2 *{item.product.rent_price}</b>
                    </h4>
                    {/* <h5>{} *{item.product.dress.rent_price}</h5> */}
                    <h5 id="result"></h5>
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
    </>
  );
};

export default CartItems;

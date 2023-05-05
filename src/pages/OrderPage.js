import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext, UserContext } from "../context/Context";
import { getToken } from "../services/LocalStorageService";
import OrderDetails from "./OrderDetails";

const OrderPage = () => {
  const userContext = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);
  const [order, setOrder] = useState([]);

  const { access_token } = getToken();

  const getMyOrders = async () => {
    await fetch("https://api.awsugn.biz/orders/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getMyOrders();
  });

  return (
    <>
      <header
        className="flex-container h-[15vh] p-4"
        style={{ backgroundColor: "#FFFAFA" }}
      >
        <div className="flex gap-5 padding-10 my-10 justify-left ">
          <h1
            className="text-brown font-bold text-xl justify-content left-[100px] text-center"
            style={{ fontSize: 84 }}
          >
            Orders
          </h1>
        </div>
      </header>

      {/* table  */}
      {/* <div className="flex"> */}
      <div className="flex justify-center">
        <table
          className="bar table-fixed h-[100vh] w-[150vh] text-center text-brown"
          style={{ fontSize: 32 }}
        >
          <thead className="divide-y">
            <tr>
              <th>Order Code</th>
              <th>Duration</th>
              <th>Price (Br.)</th>
              <th>Payment Status</th>
            </tr>
          </thead>

          {/* <hr className="text-bold " /> */}
          <tbody className="divide-y text-bold">
            {order.map((item) => {
              return (
                <tr key={item.id}>
                  {/* `/orderdetails/${item.order_code}` */}
                  <td
                    
                     
                  // ><Link to={() => {<OrderDetails order_code={item.order_code} />;}}> 
                  ><Link className="hover:shadow-xl" to={`/orderdetails/${item.order_code}`}> 
                    {item.order_code}</Link>
                  </td>
                  <td>
                    {item.from_date} - {item.to_date}
                  </td>
                  <td>6,000.00</td>
                  <td>{item.payment_status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-5 padding-10 my-10 justify-center ">
        <button className="bg-darkBrown h-[10vh] w-[30vh] px-5 py-2  text-white rounded-lg font-bold hover:bg-brown  text-lg  text-center">
          <div className="items-center gap-2 relative">
            <Link to="/orderDetails" className="">
              <p className="font-yatra" style={{ fontSize: 28 }}>
                Load More
              </p>
            </Link>
          </div>
        </button>
      </div>
    </>
  );
};

export default OrderPage;

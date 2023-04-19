import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
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
              <th>Other Code</th>
              <th>Duration</th>
              <th>Price (Br.)</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <hr className="text-bold " />
          <tbody className="divide-y text-bold">
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
       
      </div>
      <div className="flex gap-5 padding-10 my-10 justify-center ">
      <button className="bg-darkBrown h-[10vh] w-[30vh] px-5 py-2  text-white rounded-lg font-bold hover:bg-brown transition text-lg  text-center"
        
      >
        <div className="items-center gap-2 relative">
          <Link to="/orderDetails" className="">
          <p className="font-yatra" style={{fontSize: 28}}>Load More</p>
          </Link>
        </div>
      </button>
        </div>
      
    
    </>
  );
};

export default OrderPage;

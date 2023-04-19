import React from "react";

const OrderDetails = () => {
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
            Order Details:
          </h1>
        </div>
      </header>
      
      <div className="flex justify-center h-[15vh] p-10 mb-5">
        <div className="flex-col justify-center text-xl"
        style={{fontSize: 28}}
        >
          <div className="flex justify-content gap-12">
            <h2 className=" ">Order code : 560045</h2>
            <h2 className="">Payment Status : Pending</h2>
          </div>
          <div className="flex my-5 gap-12">
            <h2>Duration : 01/04/2023 - 04/04/2023</h2>
            <h2>Total Price : 15,000.00 Br.</h2>
          </div>
           <div className="flex my-5">
            <h2>Delivery Address : Nagawara, Manyata Tech park rd, 560045</h2>
            {/* <h2>Total Price : 15,000.00 Br.</h2> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center p-10 mt-5">
        <table
          className="bar table-fixed h-[100vh] w-[150vh] text-center text-brown"
          style={{ fontSize: 32 }}
        >
          <thead className="divide-y">
            <tr>
              <th>Clothe</th>
              <th>Quantity</th>
              <th>Price (Br.)</th>
              {/* <th>Payment Status</th> */}
            </tr>
          </thead>
          <hr className="text-bold " />
          <tbody className="divide-y text-bold">
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>560045</td>
              <td>1/04/23 - 10/4/23</td>
              <td>6,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderDetails;

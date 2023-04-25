import * as React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import ordering from "../assets/ordering.png";
import vector from "../assets/Vector.png";
import OrderPage from "./OrderPage";

// [
//   {
//       "customer": 11,
//       "order_code": 1,
//       "payment_status": "P",
//       "from_date": "2023-04-11",
//       "to_date": "2023-04-12",
//       "delivery_location": "AA",
//       "status": "in-progress",
//       "created_at": "2023-04-23T09:34:33.935204Z",
//       "last_update": "2023-04-23T09:34:33.935239Z"
//   }
// ]

// [
//   {
//       "id": 1,
//       "clothe": 4,
//       "order": 1,
//       "quantity": 1,
//       "created_at": "2023-04-23T09:35:16.649715Z",
//       "last_update": "2023-04-23T09:35:16.649756Z"
//   }
// ]

const Ordering = ({ closeMenu }) => {
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  // const [data, setData] = useState(true);
  const [orderData, setOrderData] = useState({
    userId: "",
    id: "",
    location: "",
    quantity: "",
    from_date: "",
    to_date: "",
    created_at: "",
    last_update: "",
  });

  const {
    userId,
    id,
    location,
    quantity,
    from_date,
    to_date,
    created_at,
    last_update,
    message,
  } = orderData;
  const handleVerify = (token) => {
    if (token) {
      setIsVerified(true);
    }
    // i've to remove this shit
    else {
      setIsVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      location: data.get("location"),
      quantity: data.get("quantity"),
      from_date: data.get("from_date"),
      to_date: data.get("to_date"),
      message: data.get("message"),
    };
    console.log(actualData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actualData),
    };

    fetch("https://api.awsugn.biz/orders/", requestOptions)
      .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // }, []);

  // const res = await orderForm(actualData);
  // if (res.error) {
  //   setError(res.error)
  // }
  // if (res.data) {
  //   console.log(res.data)
  // }

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-brown w-[60vw] h-[90vh] flex justify-center items-center animate-slowfade overflow-scroll py-10  mb-10 mx-auto"
      style={{ backgroundImage: `url(${ordering})` }}>
  
          
        <hr />
          <button
            className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
            onClick={closeMenu}
          >
            <CloseIcon className="text-4xl text-brown text-center  " />
          </button>
          <h1 
          className="absolute top-[141px] text-center flex-wrap justify-center  "
          style={{ fontSize: "96px", color: "#FFFFFF" }}
        >
          <b>ORDERING</b>
        </h1>
        <div className="absolute top-[301px] flex gap-4">
          <div className="max-w-xl lg:max-w-lg  ">
            <img
              className="flex-col h-[15vh] w-[15vh] left-[100px]"
              src={vector}
            />
          </div>
          <div className="max-w-xl lg:max-w-lg" style={{ fontSize: 28 }}>
            <h1 className="text-bold ms-4 text-white px-10">
              Selected Clothe Title
            </h1>
            <br />
            <h1 className="ms-4 text-white px-10">Rent Price: $10</h1>
            <h1 className="ms-4 text-white px-10">Available Quantity: 2</h1>
          </div>

          {/* form */}
          {/* <div className=" items-bottom my-auto"> */}
            <div className="flex flex-col   lg:bg-opacity-0 sm:mx-10 mx-2 rounded-lg">
              <form
                action=""
                className="flex flex-col gap-5 relative z-10 bg-transparent rounded "
                onSubmit={handleSubmit}
              >
                <div className="px-10  justify-center sm:justify-between gap-4">
                  {/* <div className="column"> */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="location"
                      placeholder="Delivery Location"
                      className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem]  text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                      value={location}
                      onChange={handleChange}
                    />
                    {/* <i class="fa-sharp fa-regular fa-location-dot"> </i> */}
                    {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-location-dot" /> */}

                    <input
                      type="number"
                      placeholder="Quantity"
                      name="quantity"
                      className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                      value={quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <br />
                  <div className="flex gap-2">
                    <input
                      type="date"
                      placeholder="From date"
                      name="from_date"
                      className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                      value={from_date}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="date"
                      placeholder="To Date"
                      name="to_date"
                      className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                      value={to_date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex item-center justify-between px-10">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Additional Comment or Phone Number"
                    className="text-brown outline-none border border-brown p-3 rounded-md sm:w-[25rem] w-[13rem]"
                    value={message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <p className="text-red">{error}</p>
                  <button
                    type="submit"
                    on
                    className="bg-darkBrown text-white p-4 text-lg rounded-md px-5"
                  >
                    Book
                  </button>
                </div>
                <div className="flex justify-center"></div>

                <p className="text-red  text-center mt-2">{error}</p>
              </form>
            {/* </div> */}
          </div>
        </div>
      </div>
      
      {/* //     className="flex justify-center h-[120vh] w-[110%] rounded-md  bg-no-repeat bg-center bg-cover sm:bg-contain"
    //     style={{ backgroundImage: `url(${ordering})` }}
    //   >
    //     <h1 
    //       className="absolute top-[141px] text-center flex-wrap justify-center  "
    //       style={{ fontSize: "96px", color: "#FFFFFF" }}
    //     >
    //       <b>ORDERING</b>
    //     </h1>
    //     <div className="absolute top-[301px] flex gap-4">
    //       <div className="max-w-xl lg:max-w-lg  ">
    //         <img
    //           className="flex-col h-[15vh] w-[15vh] left-[100px]"
    //           src={vector}
    //         />
    //       </div>
    //       <div className="max-w-xl lg:max-w-lg" style={{ fontSize: 28 }}>
    //         <h1 className="text-bold ms-4 text-white px-10">
    //           Selected Clothe Title
    //         </h1>
    //         <br />
    //         <h1 className="ms-4 text-white px-10">Rent Price: $10</h1>
    //         <h1 className="ms-4 text-white px-10">Available Quantity: 2</h1>
    //       </div>
    //     </div>
    //     <hr />

    form here
    //     <div className="align-bottom my-auto">
    //       <div className="flex flex-col   lg:bg-opacity-0 sm:mx-10 mx-2 rounded-lg">
    //         <form
    //           action=""
    //           className="flex flex-col gap-5 relative z-10 bg-transparent rounded "
    //           onSubmit={handleSubmit}
    //         >
    //           <div className="px-10  justify-center sm:justify-between gap-4">
    //             <div className="flex gap-2">
    //               <input
    //                 type="text"
    //                 name="location"
    //                 placeholder="Delivery Location"
    //                 className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem]  text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
    //                 value={location}
    //                 onChange={handleChange}
    //               />

    //               <input
    //                 type="number"
    //                 placeholder="Quantity"
    //                 name="quantity"
    //                 className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
    //                 value={quantity}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </div>
    //             <br />
    //             <div className="flex gap-2">
    //               <input
    //                 type="date"
    //                 placeholder="From date"
    //                 name="from_date"
    //                 className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
    //                 value={from_date}
    //                 onChange={handleChange}
    //                 required
    //               />
    //               <input
    //                 type="date"
    //                 placeholder="To Date"
    //                 name="to_date"
    //                 className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
    //                 value={to_date}
    //                 onChange={handleChange}
    //                 required
    //               />

                  
    //             </div>
    //           </div>
    //           <div className="flex item-center justify-between px-10">
    //             <textarea
    //               name="message"
    //               id=""
    //               placeholder="Additional Comment or Phone Number"
    //               className="text-brown outline-none border border-brown p-3 rounded-md sm:w-[25rem] w-[13rem]"
    //               value={message}
    //               onChange={handleChange}
    //               required
    //             ></textarea>
    //             <p className="text-red">{error}</p>
    //             <button
    //               type="submit"
    //               on
    //               className="bg-darkBrown text-white p-4 text-lg rounded-md px-5"
    //             >
    //               Book
    //             </button>
    //           </div>
    //           <div className="flex justify-center"></div>

    //           <p className="text-red  text-center mt-2">{error}</p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>*/}
    </>
  );
};

export default Ordering;

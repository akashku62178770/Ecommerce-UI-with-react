import * as React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import ordering from "../assets/ordering.png";
import tick from "../assets/success.png";
import vector from "../assets/Vector.png";
import OrderPage from "./OrderPage";
import { getToken } from "../services/LocalStorageService";
import Success from "../components/Success";

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
  const { access_token } = getToken();
  const [ordercode, setOrdercode] = useState(null);
  const [success, setSuccess] = useState(false);
  const [orderData, setOrderData] = useState({
    userId: "",
    id: "",
    delivery_location: "",
    quantity: "",
    from_date: "",
    to_date: "",
    created_at: "",
    last_update: "",
  });

  const {
    userId,
    id,
    delivery_location,
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
      delivery_location: data.get("delivery_location"),
      quantity: data.get("quantity"),
      from_date: data.get("from_date"),
      to_date: data.get("to_date"),
      message: data.get("message"),
    };
    console.log(actualData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${access_token}`,
      },
      body: JSON.stringify(actualData),
    };

    fetch("https://api.awsugn.biz/orders/", requestOptions)
      .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));
      .then((data) => {
        console.log("data", data);
        console.log("data", data.order_code);
        setOrdercode(data.order_code);
        console.log("code", ordercode);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };
  const successPopup = () => {
    setSuccess(false);
  };

  return (
    <>
      <div
        className="h-[120vh] w-[110%] flex justify-center items-center animate-slowfade overflow-scroll py-10  mb-10 mx-auto"
        // style={{ backgroundImage: `url(${ordering})`, alignContent: "center" }}
      >
        <div className="flex top-fixed">
          <button
            className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
            onClick={closeMenu}
          >
            <CloseIcon className="text-4xl text-brown text-center  " />
          </button>
          <h1
            className="absolute top-[80px] text-center flex-wrap justify-center  "
            style={{ fontSize: "96px", color: "#FFFFFF" }}
          >
            <b>ORDERING</b>
          </h1>
          <div className="absolute top-[201px] flex gap-4">
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
          </div>
          {/* form */}
          {/* <div className=" items-bottom my-auto"> */}
          <div className="">
            <form
              action=""
              className="flex flex-col top-[130px] gap-5 relative  rounded "
              onSubmit={handleSubmit}
            >
              <div className="px-10  justify-center sm:justify-between gap-4">
                {/* <div className="column"> */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="delivery_location"
                    placeholder="Delivery Location"
                    className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem]  text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                    value={delivery_location}
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
                  onClick={() => setSuccess(true)}
                  className="bg-darkBrown text-white p-4 text-lg rounded-md px-5"
                >
                  Book
                </button>
              </div>
              <div className=" flex justify-center"></div>
              {success && (
                <div
                  className=" fixed  bg-transparent inset-0 flex items-center justify-center"
                  style={{ backgroundColor: "#787878" }}
                >
                  <div
                    className="flex p-10 successPopup rounded-lg w-[50vh] h-[40vh]"
                    style={{
                      backgroundImage: `url(${tick})`,
                      backgroundSize: "cover",
                      backgroundColor: "transparent",
                      backgroundRepeat: 'no-repeat',
                      // backgroundPosition: 'center ',
                    }}
                  >
                    {/* <img className="fixed tick w-[15vh]" src={tick} alt="success" /> */}

                    <div className="successMessage flex-container items-center justify-center">
                      <h2 className="items-center text-lg font-medium mb-2">
                        Order Successful
                      </h2>
                      <p className="mb-4">Thanks for ordering with us</p>
                      <button
                        className="bg-green px-3 py-2 rounded-lg"
                        onClick={successPopup}
                      >
                        Okay
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <p className="text-red  text-center mt-2">{error}</p>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordering;

import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ordering from "../assets/ordering.png";
import vector from "../assets/Vector.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ordering = () => {
  const [error, setError] = React.useState("");
  const [isVerified, setIsVerified] = useState(false);
  const handleVerify = (token: any) => {
    if (token) {
      setIsVerified(true);
    }
  };
  const formik = useFormik({
    initialValues: {
      location: "",
      quantity: "",
      from_date: "",
      to_date: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("firstname is required!"),
      lastname: Yup.string().required("lastname is required!"),
      message: Yup.string().required("Please write your message!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (isVerified) {
        console.log(values);
        resetForm();

        // Submit form data
      } else {
        alert("Please verify that you are not a robot.");
      }
    },
  });
  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center h-[120vh] w-[110%] rounded-md  bg-no-repeat bg-center bg-cover sm:bg-contain"
        style={{ backgroundImage: `url(${ordering})` }}
      >
        <h1
          className="absolute top-[141px] text-center flex justify-center  "
          style={{ fontSize: "96px", color: "#FFFFFF" }}
        >
          <b>ORDERING</b>
        </h1>
        <div className="absolute top-[301px] flex">
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
        <div className="">
          <div className="flex flex-col justify-center items-center gap-5 relative z-10 mt-5 py-5 bg-veryLightBrown lg:bg-opacity-0 sm:mx-10 mx-2 rounded-lg">
            <form
              action=""
              className="flex flex-col gap-5 relative z-10 bg-transparent rounded "
              onSubmit={formik.handleSubmit}
            >
              <div className="px-10  justify-center sm:justify-between gap-4">
                {/* <div className="column"> */}
                <div className="flex gap-2">
                
                  <input
                    type="text"
                    name="location"
                    placeholder="Delivery Location"
                    className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem]  text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                    
                  />
                  {/* <i class="fa-sharp fa-regular fa-location-dot"> </i> */}
                  {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-location-dot" /> */}
                 
                  <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                  />
                </div>
                <br />
                <div className="flex gap-2">
                  <input
                    type="date"
                    placeholder="From date"
                    name="from_date"
                    className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.from_date}
                  />
                  <input
                    type="date"
                    placeholder="To Date"
                    name="to_date"
                    className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md bg-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.to_date}
                  />

                  <p className="text-red">{error}</p>
                </div>
              </div>
              <div className="flex item-center justify-between px-10">
                <textarea
                  name="message"
                  id=""
                  placeholder="Additional Comment or Phone Number"
                  className="text-brown outline-none border border-brown p-3 rounded-md sm:w-[25rem] w-[13rem]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>

                <button className="bg-darkBrown text-white p-4 text-lg rounded-md px-5">
                  Book
                </button>
              </div>
              <div className="flex justify-center">
                {/* <ReCAPTCHA
                sitekey="6LfyeC4lAAAAAGEs7tRDjLcLl53nJNeXx0kyV2oA"
                onChange={handleVerify}
              /> */}
              </div>

              <p className="text-red  text-center mt-2">
                {(formik.errors.location &&
                  formik.touched.location &&
                  formik.errors.location) ||
                  (formik.errors.quantity &&
                    formik.touched.quantity &&
                    formik.errors.quantity) ||
                  (formik.errors.from_date &&
                    formik.touched.from_date &&
                    formik.errors.from_date) ||
                    (formik.errors.to_date &&
                    formik.touched.to_date &&
                    formik.errors.to_date) ||
                    (formik.errors.message &&
                    formik.touched.message &&
                    formik.errors.message)}
              </p>
              <p className="text-red  text-center mt-2">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordering;

// import React from "react";
// import vector from "../assets/Vector.png";
// import vector5 from "../assets/Vector 5.png";
// import vector1 from "../assets/Vector 1.png";

// const Ordering = () => {
//   return (
//     <>
{
  /* //   Example
    //   <div class="bg-darkBrown rounded-lg p-4 flex flex-col border border-darkBrown ">
    //     <div className="flex flex-row justify-center">
    //       <img className=" " src={vector5} />
    //       <h2>Selecting</h2>
    //       <h4>title</h4>
    //       <h4>title</h4>
    //     </div>
    //   </div>    
    //   <div class="bg-darkBrown rounded-lg p-4 flex flex-col border border-darkBrown ">
    //     <div className="flex flex-row justify-center">
    //       <img className=" " src={vector1} />
    //       <h2>Selecting</h2>
    //       <h4>title</h4>
    //       <h4>title</h4>
    //     </div>
    //   </div> */
}

{
  /* <div class="bg-darkBrown rounded-lg p-4 flex flex-col border border-darkBrown ">
        <div className="flex flex-row justify-center">
          <img className=" " src={ordering} />
          <h2>Selecting</h2>
          <h4>title</h4>
          <h4>title</h4>
        </div>
      </div>
    </>
  );

}; */
}

//       <div
//         className="flex flex-wrap justify-center items-center h-screen rounded-md  bg-no-repeat bg-center bg-cover sm:bg-contain"
//         style={{ backgroundImage: `url(${ordering})` }}
//       >
//         <div className="flex mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Contact sales
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Aute magna irure deserunt veniam aliqua magna enim voluptate.
//           </p>
//         </div>
//         <div className="relative isolate ">
//           <h1 className="h-[80vw]-title">Ordering</h1>
//         </div>
//         <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
//               <div className="max-w-xl lg:max-w-lg">
//                 <img className="flex-col h-[10vh] w-[10vh]" src={vector} />
//               </div>
//               <div className="max-w-xl lg:max-w-lg">
//                 <h1 className="text-bold ms-4 text-white px-10">
//                   Selected Clothe Title
//                 </h1>
//                 <h1 className="ms-4 text-white px-10">Rent Price: $10</h1>
//                 <h1 className="ms-4 text-white px-10">Available Quantity: 2</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4">
//           <div className="w-full sm:w-1/2 md:w-1/3 p-4">
//             <div className="flex  bg-white rounded-lg p-4 shadow justify-between">
//               {/* <h2 className="text-lg font-bold mb-2">Box 1</h2>
//               <img className="flex-col " src={vector} />
//               <div className="flex rounded-lg p-4 shadow justify-between">
//                 <h1 className="text-bold ms-4 text-white px-10">
//                   Selected Clothe Title
//                 </h1>
//                 <h1 className="ms-4 text-white px-10">
//                   Rent Price: $10
//                 </h1>
//                 <h1 className="ms-4 text-white px-10">
//                   Available Quantity: 2
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/3 p-4">
//             <div className="bg-white rounded-lg p-4 shadow">
//               <h2 className="text-lg font-bold mb-2">Box 2</h2>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/3 p-4">
//             <div className="bg-white rounded-lg p-4 shadow">
//               <h2 className="text-lg font-bold mb-2">Box 3</h2>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// };

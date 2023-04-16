import { Box } from "@mui/material";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import footerOval from "../assets/footer_ellipse.png";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Footer = () => {
  // const verifyToken = async (token: string) => {
  //   console.log("inverifyToken");
  //   const secretKey = "6LcYiSAlAAAAAC1L6jG9GPypMYnlIRxu_Gevcks0";
  //   console.log(secretKey);
  //   const result = await axios(
  //     `https://www.google.com/recaptcha/api/siteverify?secret=${token}&response=${secretKey}`
  //   )
  //     .then((response) => {
  //       console.log(response);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   return result;
  // };
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (token: any) => {
    if (token) {
      setIsVerified(true);
    }
  };
  // const captchaRef = useRef<any>();
  const captchaRef = useRef();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
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
    <div className="bg-brown flex flex-col border border-darkBrown relative overflow-hidden ">
      <div className="flex justify-between xl:pr-[5%]  lg:flex-row flex-col">
        <div className="flex flex-col items-center ">
          <div className="mt-5 w-fit">
            <h1 className=" text-veryLightBrown text-3xl">About Us</h1>
            <hr className="text-veryLightBrown mx-3 mt-2" />
          </div>
          <p className="font-roboto text-white w-[80%] xl:w-[70%] text-[0.9rem] xl:text-[1.1rem] my-10">
            AWSUGN is a renting platform powered by ASA Technologies. Started as
            a way of solving the inconvenient and unorganized renting market of
            clothes, it relieves customers from the tiresome process of
            searching for clothes by providing an online platform that allows
            choosing and book clothes at the tip of their fingers.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 relative z-10 mt-5 py-5 bg-veryLightBrown lg:bg-opacity-0 sm:mx-10 mx-2 rounded-lg">
          <div>
            <h1 className=" text-brown text-3xl ">Contact Us</h1>
            <hr className="text-brown mx-3 mt-2" />
          </div>

          <form
            action=""
            className="flex flex-col gap-5 relative z-10 "
            onSubmit={formik.handleSubmit}
          >
            <div className="px-10 flex justify-center sm:justify-between gap-4">
              <input
                type="text"
                name="firstname"
                placeholder="first name"
                className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem]  text-brown outline-none border border-brown px-3 rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
              <input
                type="text"
                placeholder="last name"
                name="lastname"
                className="sm:w-[15rem] sm:h-[3rem] w-[9rem] h-[2.5rem] text-brown outline-none border border-brown px-3 rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
            </div>
            <div className="flex item-center justify-between px-10">
              <textarea
                name="message"
                id=""
                placeholder="Write your message here"
                className="text-brown outline-none border border-brown p-3 rounded-md sm:w-[25rem] w-[13rem]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>

              <button className="bg-darkBrown text-white p-4 text-lg rounded-md px-5">
                send
              </button>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LfyeC4lAAAAAGEs7tRDjLcLl53nJNeXx0kyV2oA"
                onChange={handleVerify}
              />
            </div>

            <p className="text-red  text-center mt-2">
              {(formik.errors.firstname &&
                formik.touched.firstname &&
                formik.errors.firstname) ||
                (formik.errors.lastname &&
                  formik.touched.lastname &&
                  formik.errors.lastname) ||
                (formik.errors.message &&
                  formik.touched.message &&
                  formik.errors.message)}
            </p>
            <p className="text-red  text-center mt-2">{error}</p>
          </form>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-2 justify-between border-t border-LightBrown mx-0 md:mx-16 px-5 py-5 items-center relative z-10">
        <h1 className=" text-white font-bold text-md sm:text-lg ">
          AWSUGN{" "}
          <span className="font-normal text-LightBrown">powered by </span> ASA
          Technologies
        </h1>
        <div className="">
          <Link
            to="/"
            className="border-r-2 border-darkBrown lg:text-brown text-white px-5 text-lg font-bold hover:text-darkBrown"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="border-darkBrown lg:text-brown text-white px-5 text-lg font-bold hover:text-darkBrown"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src={footerOval}
          alt="footer-eclipse"
          className=" lg:w-[75%] xl:w-[65%] 2xl:w-[55%] absolute -right-[10rem] top-0 xl:-top-10 z-0 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Footer;

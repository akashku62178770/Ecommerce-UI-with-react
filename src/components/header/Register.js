import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { statusActions } from "../../redux/statusSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../Loader";

const Register = ({cancleRegister}) => {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const status = useAppSelector((state) => state.status);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      // phone: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username required!"),
      firstname: Yup.string().required("First name required!"),
      // middlename: Yup.string().required("Middle name required!"),
      middlename: Yup.string(),
      lastname: Yup.string().required("Last name required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required!"),
      password: Yup.string()
        .min(6, "Must be at least 6 digits!")
        .required("Password is required!"),
      confirmPassword: Yup.string().required("Confirm Password is required!"),
      gender: Yup.string().required("Please select your gender!"),
      // phone: Yup.string().required("Phone number required!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (phone.length < 4) {
        setError("Phone number is required!");
        return;
      }

      dispatch(statusActions.setIsLoading());
      // await axios
      //   .post("http://api.awsugn.biz/auth/users", {
      // username: values.username,
      // first_name: values.firstname,
      // middle_name: values.middlename,
      // last_name: values.lastname,
      // email: values.email,
      // password: values.password,
      // gender: values.gender,
      // phone_number: `+${phone}`,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //     dispatch(statusActions.setSuccess("Success!"));
      //     resetForm();
      //   })
      //   .catch(function (error) {
      //     console.log(
      //       values.username,
      //       values.firstname,
      //       values.middlename,
      //       values.lastname,
      //       values.confirmPassword,
      //       values.password,
      //       values.gender,
      //       phone
      //     );

      //     console.log(error);
      //     dispatch(statusActions.setError(error.response.data.detail));
      //   });
      const bodyData = {
        username: values.username,
        first_name: values.firstname,
        middle_name: values.middlename,
        last_name: values.lastname,
        email: values.email,
        password: values.password,
        gender: values.gender,
        phone_number: `+${phone}`,
      };
      await fetch("https://api.awsugn.biz/auth/users", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.json());
          console.log( "Registration successful");
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  // console.log(phone);

  return (
    <div className="bg-black/70 w-[100vw] h-[100vh] fixed z-40 flex justify-center items-center animate-slowfade overflow-scroll mb-10">
      <div className="bg-veryLightBrown relative rounded-xl py-10 px-5 sm:px-10 mt-[30rem] w-[360px] sm:w-fit">
        <button
          className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
          onClick={cancleRegister}
        >
          <CloseIcon className="text-4xl text-brown text-center  " />
        </button>
        <h1 className="font-roboto text-brown text-4xl my-5 text-center">
          Register
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <p className="text-red">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          <p className="text-red">
            {formik.errors.firstname &&
              formik.touched.firstname &&
              formik.errors.firstname}
          </p>
          <input
            type="text"
            name="middlename"
            placeholder="middle name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.middlename}
          />
          <p className="text-red">
            {formik.errors.middlename &&
              formik.touched.middlename &&
              formik.errors.middlename}
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          <p className="text-red">
            {formik.errors.lastname &&
              formik.touched.lastname &&
              formik.errors.lastname}
          </p>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p className="text-red">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </p>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <p className="text-red">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm password"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <p className="text-red">
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword}
          </p>

          <select
            name="gender"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="" disabled selected>
              gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <p className="text-red">
            {formik.errors.gender &&
              formik.touched.gender &&
              formik.errors.gender}
          </p>
          {/* <input
            type="text"
            name="phone"
            placeholder="phone"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          /> */}
          <PhoneInput
            country={"et"}
            inputStyle={{
              borderColor: "brown",
              height: "3.5rem",
              width: "20rem",
              marginLeft: "0",
            }}
            onChange={(phone) => {
              setPhone(phone);
            }}

            // value={}
            // onChange={(phone) => this.setState({ phone })}
          />
          <p className="text-red">{error}</p>
          {/* <p className="text-orange mb-10">
            Make sure to include country code (+251...)
          </p> */}

          <div className="my-5 ">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="accent-brown"
              onChange={(e) => {
                e.target.checked ? setAgree(true) : setAgree(false);
              }}
            />
            <label htmlFor="agree" className="ml-3 text-brown">
              I agree to the{" "}
              <Link to={"/"} className="underline">
                terms and condition.
              </Link>
            </label>
          </div>
          <div>
            {status.success && (
              <p className="text-green  text-center px-5">
                {status.success_message}
              </p>
            )}
            {status.error && (
              <p className="text-red  text-center px-5">
                {status.error_message}
              </p>
            )}
            {status.loading && <Loader />}
          </div>
          <button
            type="submit"
            className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg disabled:scale-100 disabled:bg-disabled disabled:cursor-not-allowed"
            disabled={!agree ? true : false}
          >
            Register
          </button>
          <Link to={""} className="text-brown hover:text-darkBrown">
            Already have an account? Sign in!
          </Link>
        </form>
      </div>
    </div>
  );
};


export default Register
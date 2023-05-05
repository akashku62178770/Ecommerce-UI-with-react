import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import {
  storeToken,
  getToken,
  removeToken,
} from "../../services/LocalStorageService";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../Loader";
import { Typography, Alert } from "@mui/material";
import { useRegisterUserMutation } from "../../services/userAuthApi";

const Register = ({  cancleRegister }) => {
  const [phone_number, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  // const status = useAppSelector((state) => state.status);
  // const dispatch = useAppDispatch();
  const [server_error, setServerError] = useState({});
  // const [error, setError] = useState({
  //   status: false,
  //   msg: "",
  //   type: "",
  // });

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      firstname: data.get("firstname"),
      middlename: data.get("middlename"),
      lastname: data.get("lastname"),
      email: data.get("email"), // name of the field
      gender: data.get("gender"), // name of the field
      // phone_number: data.get("phone_number"), // name of the field
      phone_number: phone_number,
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      agree: data.get("agree"),
    };

    console.log("phone", actualData.phone_number);
    const res = await registerUser(actualData);
    console.log(res);
    if (res.error) {
      console.log(typeof res.error.data.errors);
      console.log(res.error.data);
      console.log(res.error.data.errors);
      setServerError(res.error.data);
    }
    if (res.data) {
      // console.log(typeof res.data);
      console.log(res.data);
      storeToken(res.data.token);
      alert("Registration successful ");
      navigate("/");
    }

    // console.log(actualData);
    // if (
    //   actualData.name &&
    //   actualData.email &&
    //   actualData.password &&
    //   actualData.tc !== null
    // ) {
    //   if (actualData.password === actualData.password2) {
    //     console.log(actualData);
    //     document.getElementById("registration-form").reset();
    //     setError({
    //       status: true,
    //       msg: "Registration Success",
    //       type: "success",
    //     });
    //     navigate("/dashboard");
    //   } else {
    //     setError({
    //       status: true,
    //       msg: "Passwords does not match",
    //       type: "error",
    //     });
    //   }
    // } else {
    //   setError({ status: true, msg: "All Fields are Required", type: "error" });
    // }
  };

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
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.username ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.username[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.firstname ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.firstname[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="middlename"
            placeholder="middle name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.middlename ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.middlename[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.lastname ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.lastname[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="email"
            placeholder="email"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.email ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.email[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="password"
            placeholder="password"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.password ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.password[0]}
            </Typography>
          ) : (
            ""
          )}
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm password"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          />
          {server_error.confirmPassword ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.confirmPassword[0]}
            </Typography>
          ) : (
            ""
          )}

          <select
            name="gender"
            className="w-[20rem] border-brown outline-none border p-4 rounded-md "
          >
            <option value="" disabled defaultValue="None">
              Gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          {server_error.gender ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.gender[0]}
            </Typography>
          ) : (
            ""
          )}

          <PhoneInput
            name="phone_number"
            country={"et"}
            inputStyle={{
              borderColor: "brown",
              height: "3.5rem",
              width: "20rem",
              marginLeft: "0",
            }}
            onChange={(phone_number) => {
              setPhone(phone_number);
            }}
          />
          {server_error.phone_number ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.phone_number[0]}
            </Typography>
          ) : (
            ""
          )}

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
            {/* {status.success && (
              <p className="text-green  text-center px-5">
                {status.success_message}
              </p>
            )}
            {status.error && (
              <p className="text-red  text-center px-5">
                {status.error_message}
              </p>
            )} */}
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
          {/* {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )} */}
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import {
  CircularProgress,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRegisterUserMutation } from "../../services/userAuthApi";
import registerbg from "../../assets/Registerotp.png";

const Register = ({ cancleRegister }) => {
  const [phone_number, setPhone] = useState("");
  const [code_number, setCode] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  // const status = useAppSelector((state) => state.status);
  // const dispatch = useAppDispatch();
  const [server_error, setServerError] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    //  navigate("/signinpopup");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Enter your OTP");
  //   sendSMS(to, message, template_id)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      first_name: data.get("first_name"),
      middle_name: data.get("middle_name"),
      last_name: data.get("last_name"),
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
      cancleRegister()
    }
  };

  const handlePhone = async () => {
    var phoneField = document.querySelector("#phoneField");
    var otpField = document.querySelector("#otpField");

    // btn.addEventListener("click", function() {
    //   if (phoneField.style.display === "block") {
    phoneField.style.display = "none";
    otpField.style.display = "block";
    await fetch("https://api.awsugn.biz/send_otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"to":phone_number}),
    })
    .then((response) => {
      if (response.ok) {
        // Success response handling
        
        console.log("OTP verified successfully!");
        console.log(response)
        console.log(response.data)
      } else {
        // Error response handling
        // console.log(error)
        console.log("Error in phone!");
      }
    })
    .catch((error) => {
      // Network error handling
      console.error("Network error:", error);
    });
 
      // .then((response) => {
      //    await response.json();
      // })
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((error) => console.log("error", error));
      console.log(phone_number);
  };
  const handleOtp = () => {
    var otpField = document.querySelector("#otpField");
    var formField = document.querySelector("#formField");
    otpField.style.display = "none";
    formField.style.display = "block";
    
    const otpData = {
      // "code": code_number,
      "code": document.getElementById("otp").value,
      "phone": phone_number,
    }
    fetch("https://api.awsugn.biz/verify_otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(otpData),
    })
    .then((response) => {
      if (response.ok) {
        // Success response handling
        
        console.log("OTP verified successfully!");
        console.log(response)
        console.log(response.data)
      } else {
        // Error response handling
        console.log("Error verifying OTP!");
      }
    })
    .catch((error) => {
      // Network error handling
      console.error("Network error:", error);
    });
  };

  return (
    <div className="relative bg-black/70 w-[100vw] h-[100vh]  z-30 flex justify-center items-center animate-slowfade overflow-scroll my-auto">
      <div
        className=" relative rounded-xl py-20 px-5 sm:px-10 mt-[30rem] w-[360px] sm:w-fit top+50"
        style={{
          backgroundImage: `url(${registerbg})`,
          backgroundSize: "cover",
          backgroundColor: "blur",
        }}
      >
        <button
          className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
          onClick={cancleRegister}
        >
          <CloseIcon className="text-4xl text-brown text-center  " />
        </button>
        <h1 className="font-roboto text-white text-4xl my-5 text-center">
          Register
        </h1>

        {/* phone number field  */}
        <div id="phoneField" style={{ display: "block" }}>
          <Box
            // component="form"
            // noValidate
            sx={{ mt: 1 }}
            id="phone-form"
            // onSubmit={handlePhone}
          > 
            <PhoneInput
              // className="rounded"
              country={"et"}
              required 
              inputStyle={{
                border: "round",
                borderColor: "brown",
                height: "3.5rem",
                width: "20rem",
                marginLeft: "0",
              }}
              onChange={(phone) => {
                setPhone(phone);
              }}
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
                style={{ backgroundColor: "#876156" }}
                onClick={handlePhone}
                id="phoneVerify"
              >
                Verify
              </Button>
              {/* )} */}
            </Box>

            <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
            <Button style={{ color: "white" }} onClick={cancleRegister}>
              Cancel
            </Button>
          </Box>
        </div>

        {/* Otp field */}
        {/* <div className={`${isOpen ? "block" : "hidden"}`}> */}
        <div id="otpField" style={{ display: "none" }}>
          <Box
            // component="form"
            // noValidate
            sx={{ mt: 1 }}
            id="otp-form"
            // onSubmit={handleOtp}
          >
            <TextField
              className="border-brown"
              margin="normal"
              required
              fullWidth
              id="otp"
              name="otp"
              type="otp"
              label="Type OTP code here..."
              onChange={(otp) => {
                setCode(otp);
              }}
              
            />
    {!code_number &&<p className="text-red">This field cannot be empty</p>}
            
            <Box textAlign="center">
              <div className="flex">
                <NavLink
                  className="rounded text-bold"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                  // style={{ backgroundColor: "#876156" }}
                >
                  Resend
                </NavLink>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5, mx: 5 }}
                  style={{ backgroundColor: "#876156" }}
                  onClick={handleOtp}
                  // onSubmit={!code_number && <p className="text-red">This field cannot be empty</p>}
                >
                  Login
                </Button>
              </div>
            </Box>
          </Box>
        </div>

        {/* form 3 for user details  */}
        <div className="flex">
          <form
            id="formField"
            onSubmit={handleSubmit}
            className=" flex-col  justify-center items-center gap-2 "
            style={{ display: "none" }}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            />
            {server_error.username ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.username[0]}
              </Typography>
            ) : (
              ""
            )}
            <input
              type="text"
              name="first_name"
              placeholder="first name"
              className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            />
            {server_error.firstname ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.firstname[0]}
              </Typography>
            ) : (
              ""
            )}
            <input
              type="text"
              name="middle_name"
              placeholder="middle name"
              className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            />
            {server_error.middlename ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.middlename[0]}
              </Typography>
            ) : (
              ""
            )}
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              className="w-[20rem] border-brown outline-none border p-4 rounded-md "
            />
            {server_error.lastname ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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
              <option value="None">None</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {server_error.gender ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
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

            <button
              type="submit"
              className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg disabled:scale-100 disabled:bg-disabled disabled:cursor-not-allowed"
              disabled={!agree ? true : false}
              // onClick={handleOpen}
            >
              Register
            </button>
            <Link to={""} className="text-brown hover:text-darkBrown">
              Already have an account? Sign in!
            </Link>
            {server_error.non_field_errors ? (
              <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { setUserToken } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../services/userAuthApi";
import signin from "../../assets/Signin.png";
import {
  storeToken,
  getToken,
  removeToken,
} from "../../services/LocalStorageService";
import Register from "./Register";

const Signin = ({ cancle, register }) => {
  const [showPassword, setShowPassword] = useState(false);
  // const status = useAppSelect((state) => state.status);
  const [server_error, setServerError] = useState({});

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"), // name of the field
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      console.log("error1", res.error.data);
      // console.log("error2", res.error.data.errors);
      setServerError(res.error.data);
    }
    if (res.data) {
      // console.log(typeof res.data);
      console.log(res.data);
      console.log("token:", res.data);
      storeToken(res.data);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      cancle()
    }
  };
  let { access_token } = getToken();
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  // const submitSignin = () => {

  // }

  return (
    <div className="bg-black/70 w-[100vw] h-[100vh] fixed z-40 flex justify-center items-center animate-slowfade ">
      <div
        className="bg-veryLightBrown relative rounded-xl p-10"
        style={{
          backgroundImage: `url(${signin})`,
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        <button
          className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
          onClick={cancle}
        >
          <CloseIcon className="text-4xl text-brown text-center  " />
        </button>
        <h1 className="font-roboto text-white text-4xl my-5 text-center">
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="sm:w-[20rem] w-[18rem]  border-brown outline-none border p-4 rounded-md text-brown"
            style={{ backgroundColor: "transparent" }}
          />
          {server_error.username ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.username[0]}
            </Typography>
          ) : (
            ""
          )}
          <div className="relative">
            <input
              type={`${!showPassword ? "password" : "text"}`}
              name="password"
              placeholder="password"
              className="sm:w-[20rem] w-[18rem] border-brown outline-none border p-4 rounded-md text-brown"
              style={{ backgroundColor: "transparent" }}
            />
            {!showPassword ? (
              <VisibilityIcon
                className="w-7 h-7 text-md p-1 hover:bg-veryLightBrown rounded-full absolute top-4 right-3 transition"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <VisibilityOff
                className="w-7 h-7 text-md p-1 hover:bg-veryLightBrown rounded-full absolute top-4 right-3 transition"
                onClick={() => setShowPassword(false)}
              />
            )}
            {server_error.password ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.password[0]}
              </Typography>
            ) : (
              ""
            )}
          </div>

          <Link
            to={""}
            className="text-brown hover:text-darkBrown"
            style={{ color: "#DABD99C7" }}
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg "
            // onSubmit={console.log("submit")}
            // onClick={() => {
            //   isLoading ? <AlertTitle>signed in</AlertTitle> : "";
            // }}
          >
            Sign In
          </button>
          {server_error.detail ? (
            <Alert severity="error">{server_error.detail}</Alert>
          ) : (
            ""
          )}
          
          {/* <Link to={"/register"} className="text-white hover:text-darkBrown">
            Or <span style={{ color: "#DABD99C7" }}>Create Account</span>
          </Link> */}
        </form>
        <button
            onClick={() => <Register register={register} />}
            className=" hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg  transition text-lg "
          >
            Or <span style={{ color: "#DABD99C7" }}>Create Account</span>
          </button>
      </div>
    </div>
  );
};

export default Signin;

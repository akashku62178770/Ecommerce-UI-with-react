import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Loader from "../Loader";
import { statusActions } from "../../redux/statusSlice";

const Signin = ({ cancle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const status = useAppSelector((state) => state.status);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch(statusActions.setIsLoading());
      await axios
        .post("http://api.awsugn.biz/auth/jwt/create", {
          username: values.username,
          password: values.password,
        })
        .then(function (response) {
          console.log(response);
          dispatch(statusActions.setSuccess("Success!"));
          resetForm();
        })
        .catch(function (error) {
          console.log(error);
          dispatch(statusActions.setError(error.response.data.detail));
        });
    },
  });
  
  return (
    <div className="bg-black/70 w-[100vw] h-[100vh] fixed z-40 flex justify-center items-center animate-slowfade ">
      <div className="bg-veryLightBrown relative rounded-xl p-10">
        <button
          className="absolute right-0 top-0 hover:border border-brown hover:bg-white rounded-full m-2 transition"
          onClick={cancle}
        >
          <CloseIcon className="text-4xl text-brown text-center  " />
        </button>
        <h1 className="font-roboto text-brown text-4xl my-5 text-center">
          Sign In
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="sm:w-[20rem] w-[18rem]  border-brown outline-none border p-4 rounded-md text-brown"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <p className="text-red">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </p>
          <div className="relative">
            <input
              type={`${!showPassword ? "password" : "text"}`}
              name="password"
              placeholder="password"
              className="sm:w-[20rem] w-[18rem] border-brown outline-none border p-4 rounded-md text-brown"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
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
            <p className="text-red mb-10 text-center mt-2">
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </p>
          </div>
          {status.success && (
            <p className="text-green  text-center">{status.success_message}</p>
          )}
          {status.error && (
            <p className="text-red  text-center">{status.error_message}</p>
          )}
          {status.loading && <Loader />}
          <Link to={""} className="text-brown hover:text-darkBrown">
            Forgot password?
          </Link>
          <button className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg ">
            Sign In
          </button>
          <Link to={""} className="text-brown hover:text-darkBrown">
            Or Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};


export default Signin
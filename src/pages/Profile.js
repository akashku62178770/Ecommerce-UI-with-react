import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  storeToken,
  getToken,
  removeToken,
} from "../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo, unSetUserInfo } from "../features/userSlice";

const Profile = () => {
  const handleLogout = () => {
    dispatch(unSetUserInfo({ id: "", username: "", email: "" }));
    // console.log("Logout Clicked");
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/login");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  const [userData, setUserData] = useState({
    id: "",
    username:"",
    email: "",
    name: "",
  });
  console.log("data", data);
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      console.log("success");
      setUserData({
        id: data.id,
        username: data.username,
        email: data.email,
        name: data.first_name,
      });
    }
  }, [data, isSuccess]);

  

  return (
    <>
      {/* {" "}
      <div className="flex-container mx-auto">
        <h2 className="padding text-lg my-4" style={{ fontSize: 32 }}>
          Nothing in the cart!
        </h2>
        <Link to="/">
          <button className="button bg-darkBrown rounded-lg text-white hover:bg-brown text-lg w-[15vh] mt-">
            Home
          </button>
        </Link>
      </div> */}
      <Grid container>
        <Grid
          item
          sm={8}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>Dashboard</h1>
          <br/>
          <Typography variant="h5"> id: {userData.id}</Typography>
          <Typography variant="h5"> username: {userData.username}</Typography>
          <Typography variant="h5"> Email: {userData.email}</Typography>
          <Typography variant="h6"> Name: {userData.name} </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          {/* <ChangePassword /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;

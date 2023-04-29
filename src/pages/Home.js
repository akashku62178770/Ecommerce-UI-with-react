import React from "react";
import Footer from "../components/Footer";
import SignIn from "../components/header/Signin";
import Hero from "../components/hero";
import Latest from "../components/latest";
import Occasions from "../components/occasions";
import SideLinks from "../components/SideLinks";
import { getToken, storeToken } from "../services/LocalStorageService";

const Home = () => {
  const { refresh_token } = getToken();

  if (refresh_token !== null) {
    fetch("https://api.awsugn.biz/auth/jwt/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refresh_token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("token refreshed:", data);
        storeToken(data);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      {/* <SideLinks /> */}
      <Hero />
      <Occasions />
      <Latest />
      <Footer />
    </div>
  );
};

export default Home;

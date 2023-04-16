import React from "react";
import Footer from "../components/Footer";
import SignIn from "../components/header/Signin";
import Hero from "../components/hero";
import ItemsList from "../components/ItemsList";
import Latest from "../components/latest";
import Occasions from "../components/occasions";
import SideLinks from "../components/SideLinks";

const Home = () => {
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

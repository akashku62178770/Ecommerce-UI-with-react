import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};
 
export default GridView;
import type { NextPage } from "next";
import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Products from "../components/products";
const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Products/>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import Slider from "../Slider/Slider"
import { ProductData } from "../utils/data";
function Home() {
  const [product, SetProduct] = useState();
  const theme = window.localStorage.getItem("theme-azclone")
    ? window.localStorage.getItem("theme-azclone")
    : "light";
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    SetProduct(data.products);
  }
  getData();

  return (
    <div className={theme === "light" ? "home" : "home__dark home"}>
      <div className="home__container">
       <Slider></Slider>
        <div className="home__row">
          {ProductData.products &&
            ProductData.products.map((e, index) => {
              return <Product key={index} {...e}></Product>;
            })}
        </div>
      </div>
    </div>
  );
}
export default Home;

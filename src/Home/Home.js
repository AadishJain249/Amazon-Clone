import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import formatCurrency from "../utils/formatCurrency";
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
    // console.log(data);
    SetProduct(data.products);
    // console.log(product);
  }
  getData();

  return (
    <div className={theme === "light" ? "home" : "home__dark home"}>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {product &&
            product.map((e, index) => {
              return <Product key={index} {...e}></Product>;
            })}
        </div>
      </div>
    </div>
  );
}
export default Home;

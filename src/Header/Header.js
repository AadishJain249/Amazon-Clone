import React from "react";
import "font-awesome/css/font-awesome.min.css";
// import { useState, useEffect } from "react";
import "./Header.css";
import "./Switch.css";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CountrySelector from "./CountrySelector";
const Header = () => {
  const [{ basket, user }] = useStateValue();
  // console.log(useStateValue());
  const theme = window.localStorage.getItem("theme-azclone")
    ? window.localStorage.getItem("theme-azclone")
    : "light";

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  const toDark = () => {
    window.localStorage.setItem("theme-azclone", "dark");
    window.location.reload();
  };
  const toLight = () => {
    window.localStorage.setItem("theme-azclone", "light");
    window.location.reload();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      <div className="header__theme">
        {theme === "dark" ? (
          <label className="switch">
            <input type="checkbox" onClick={toLight} checked />
            <span className="slider round"></span>
          </label>
        ) : (
          <label className="switch">
            <input type="checkbox" onClick={toDark} />
            <span className="slider round"></span>
          </label>
        )}
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
          
          <CountrySelector></CountrySelector>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__option">
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Return&</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;

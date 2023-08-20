import React from "react";
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Checkout.css";
import SubTotal from "../../src/Subtotal/SubTotal";
function Checkout() {
  const theme = window.localStorage.getItem("theme-azclone")
    ? window.localStorage.getItem("theme-azclone")
    : "light";
  const [{ basket, user }] = useStateValue();
  return (
    <div className={theme === "light" ? "checkout" : "checkout__dark checkout"}>
      <div className="checkout__left">
        <div className={theme === "light" ? "" : "checkout__body__dark"}>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item, index) => (
            <CheckOutProduct
              id={item.id}
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;

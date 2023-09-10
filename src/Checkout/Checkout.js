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
    // <div className="checkout">
    <div className={theme === "light" ? "checkout" : "checkout__dark checkout"}>
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* List of all the products */}
            {basket?.map((item, index) => (
              <CheckOutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

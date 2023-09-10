import React from "react";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getAmount } from "../Reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }] = useStateValue();
  const theme = window.localStorage.getItem("theme-azclone")
  ? window.localStorage.getItem("theme-azclone")
  : "light";
console.log(basket);
  return (
    <div className={theme === "light" ? "subtotal" : "subtotal__dark subtotal"}>
     <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{`₹ ${getAmount(basket)}`}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

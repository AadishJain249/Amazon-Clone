import React from "react";
import "./SubTotal.css";
import {useHistory} from 'react-router-dom'
import { useStateValue } from "../StateProvider/StateProvider";
import { getAmount } from "../Reducer";

function SubTotal() {
  const his=useHistory()
  const theme = window.localStorage.getItem("theme-azclone")
    ? window.localStorage.getItem("theme-azclone")
    : "light";
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className={theme === "light" ? "subtotal" : "subtotal__dark subtotal"}>
        <p>
          {/* Part of the homework */}
          Subtotal ({basket.length} items):{" "}
          <strong>{`₹ ${getAmount(basket)}`}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        <button onClick={e => his.push('/payment')}>Proceed to Checkout</button>

    </div>
  );
}

export default SubTotal;
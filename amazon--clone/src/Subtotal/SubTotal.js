import React from "react";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getAmount } from "../Reducer";

function SubTotal() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="subtotal">
      <>
        <p>
          {/* Part of the homework */}
          Subtotal ({basket.length} items):{" "}
          <strong>{`₹ ${getAmount(basket)}`}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
      <button>Proceed to checkout</button>
    </div>
  );
}
export default SubTotal;

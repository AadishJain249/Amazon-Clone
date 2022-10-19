import React from "react";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getAmount } from "../Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <p>Subtotal ({basket.length} items):{" "}
           <strong>{`₹ ${getAmount(basket)}`}</strong>
        </p>
       <small className="subtotal__gift">
       <input type="checkbox" /> This order contains a gift      
        </small>
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
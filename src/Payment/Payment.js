import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
import { getAmount } from "../Reducer";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket.length}items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Sector 3 Rohini</p>
            <p>Delhi</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form 
            >
              <div className="payment__priceContainer">
                <p>
                  Order Value ({basket.length} items):{" "}
                  <strong>{`₹ ${getAmount(basket)}`}</strong>
                </p>
                {/* button is disabled after one performing one of these actions */}
                <button >
                <Link to='/'><span>Buy Now</span></Link>
                </button>                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

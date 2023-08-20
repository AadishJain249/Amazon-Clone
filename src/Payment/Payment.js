/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getAmount } from "../Reducer";
import { db } from "../firebase";

function Payment() {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setclientsecret] = useState("");
  const elements = useElements();
  const [error, seterror] = useState(null);
  const [disable, setdisable] = useState(true);
  //
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const amount = Number(getAmount(basket).replace(",", "")) * 100;
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${amount}`,
      });
      setclientsecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log(clientSecret);
  const handlesubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const result = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Aadish",
          },
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        seterror(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history("/");
      });
  };

  const handlechange = (event) => {
    setdisable(event.empty);
    seterror(event.error ? event.error.message : "");
  };
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
            <form onSubmit={handlesubmit}>
              <CardElement onChange={handlechange}></CardElement>
              <div className="payment__priceContainer">
                <p>
                  Order Value ({basket.length} items):{" "}
                  <strong>{`₹ ${getAmount(basket)}`}</strong>
                </p>
                {/* button is disabled after one performing one of these actions */}
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

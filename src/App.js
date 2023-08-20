import "./App.css";
import Payment from "./Payment/Payment";
import {Route, Routes } from "react-router-dom";
import { React, useEffect } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import Footer from "./Footer/Footer";
import { useStateValue } from "./StateProvider/StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function App() {
  const [{},dispatch]=useStateValue()
  const promise = loadStripe(process.env.stripe_key)
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // router act as a wrapper parent element
    // we can use router  anywhere
    <>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                <Header></Header>
                <Checkout></Checkout>
              </div>
            }
          ></Route>

          <Route path="/login" element={<Login></Login>}></Route>

          <Route
            path="/payment"
            element={
              <div>
                <Header></Header>{" "}
                <Elements stripe={promise}>
                  <Payment></Payment>
                </Elements>
              </div>
            }
          ></Route>

          <Route
            path="/"
            element={
              <div>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

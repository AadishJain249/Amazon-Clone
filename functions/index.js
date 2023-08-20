const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe=require('stripe')();
const app = express();
// - Middlewares
app.use(cors());
app.use(express.json());
app.post("/payments/create",async(req,res)=>{
    const total = req.query.total;
    console.log("amount ", total);
    const paymentIntent = await stripe.PaymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

exports.api = functions.https.onRequest(app);

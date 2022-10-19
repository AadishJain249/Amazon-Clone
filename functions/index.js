// http://localhost:5001/clone-6cf0d/us-central1/api
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require('stripe')
const stripe="sk_test_51LqrtKSDl8Bf4BRHVcVxkIVLr28ymqKKjeOMiBTMAxQIO3CglulNfum3x6o8BwpeUbC8bvUGGZduTaxsDN1zIlR200CqpnOYKP";
const app = express();
// - Middlewares
console.log("hello");
console.log(stripe);
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send(stripe)
})
// console.log(stripe);
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

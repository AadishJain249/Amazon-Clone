const express=require('express')
const dotenv = require('dotenv').config();
// dotenv.config({});
require('./src/db/mongodb')
// console.log(process.env.CLIENT_ID );
// console.log(process.env.CLIENT_ID );
// console.log(process.env.CLIENT_SECRET );
// console.log();
const app=express();
const port = process.env.PORT | 3000;
const {route} =require('./src/routers/user')
app.use(express.json())
app.use(route)
app.listen(port, () => {
    console.log('App listening on port 3000!');
});
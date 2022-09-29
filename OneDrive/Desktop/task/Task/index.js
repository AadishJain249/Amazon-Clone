const express=require('express')
const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'});
require('./src/db/mongodb')
const app=express()
const port = process.env.PORT | 3000;
const {route,emailnew} =require('./src/routers/user')
app.use(express.json())
app.use(route)
app.listen(port, () => {
    console.log('App listening on port 3000!');
});
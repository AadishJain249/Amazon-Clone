
const u=require('../../template')
const v=require('../nodemailer')
const express =require('express')
const route=new express.Router()
const User=require('../models/user')
const sendmail=require('../nodemailer')
route.get('/hello/',async (req,res) => {
    res.send(req.user);
});
let emailnew="aadi"
route.post('/hello/req', async(req, res) => {
    const newUser=new User(req.body)
    v.sendMail(req.body.email)// will send req to the
    newUser.save().then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports={route}
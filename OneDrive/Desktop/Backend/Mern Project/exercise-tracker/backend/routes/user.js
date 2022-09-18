const express=require('express')
const route=new express.Router()
const User=require('../models/user')
route.get('/',(req,res)=>{
    User.find().then(ex=>res.send(ex)).catch(err => res.status(400).json('Error: ' + err))
})
route.post('/add',(req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save().then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports=route
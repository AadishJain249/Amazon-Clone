const express=require('express')
const route=new express.Router()
const Exercise=require('../models/exercise')
route.get('/',(req,res)=>{
    Exercise.find().then(ex=>res.send(ex)).catch(err => res.status(400).json('Error: ' + err))
})
route.post('/add',(req,res)=>{
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
    newExercise.save().then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
route.get('/:id',async(req,res)=>{
 try {
    const id=req.params.id
    const exercise=await Exercise.findById(id)
    if(!exercise)
    {
        return res.send('not found')
    }
    res.send('found the user id')
 } catch (error) {
    res.send(error)
 }
})
route.delete('/:id',async(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id).then(()=>res.send('deleted')).catch((err)=>res.send(err))
})
route.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id).then(ex=>{
        ex.username = req.body.username;
        ex.description = req.body.description;
        ex.duration = Number(req.body.duration);
        ex.date = Date.parse(req.body.date);
        ex.save().then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    
    res.send('updated succesfully!')
})
module.exports=route
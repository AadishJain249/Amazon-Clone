const mongoose=require('mongoose')
const ExerciseSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    
},{timestamps:true})
const exercise=mongoose.model('exercise',ExerciseSchema)
module.exports=exercise
const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        minlength:3,
        unique:true
    }
},{timestamps:true})
const user=mongoose.model('user',UserSchema)
module.exports=user
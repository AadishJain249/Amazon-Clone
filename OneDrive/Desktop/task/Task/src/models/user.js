// mongo schema
const mongo=require('mongoose')
const validator=require('validator')
const userSchema=new mongo.Schema(
    {
        userID:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true,
            lowercase:true,
            
               },
        PhoneNO:{
            type:Number,
            default:0,
            validate(value){
                if(value<0)
                {
                    throw new Error('phone no should be of 10 digits')
                }
            }
        },
    }
)
const User=mongo.model('User',userSchema
)
module.exports=User
const mongo=require('mongoose')
const link='mongodb+srv://aadish:aadishjain@cluster0.4dnczts.mongodb.net/?retryWrites=true&w=majority'
mongo.connect(link,{ 
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
  })
    .then(function(result){
        console.log("connected");
    })
    .catch((err)=>
    {
        console.log(err);
    })
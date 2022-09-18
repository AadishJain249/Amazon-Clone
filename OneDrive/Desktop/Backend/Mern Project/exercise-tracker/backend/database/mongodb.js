const mongo=require('mongoose')
const link='mongodb+srv://aadish:aadishjain@cluster0.z2mwbon.mongodb.net/?retryWrites=true&w=majority'
mongo.connect(link,{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  })
    .then(function(result){
        console.log("connected");
    })
    .catch((err)=>
    {
        console.log(err);
    })
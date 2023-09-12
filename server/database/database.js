const mongoose=require('mongoose');

const dbconnect=()=>{
    mongoose.connect('mongodb+srv://twcontactform:406842%40TWcf@thriverscontactform.ryuzygz.mongodb.net/',
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    })
    .then(()=>{
        console.log("You are connected to database. ")
    })
    .catch((err)=>{
        console.log("Error occured !!!");
        console.log(err.message);
    })

}
module.exports=dbconnect;

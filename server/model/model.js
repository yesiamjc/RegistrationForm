const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema(
    {
            FirstName:{
                type:String,
                required:true,
                maxLength:50,
            },
            LastName:{
                type:String,
                required:true,
                maxLength:50,
            },
            Email:{
                type: String,
                required: true,
                maxLength: 50,
            },
            phoneNumber:{
                type:Number,
                required:true,
                maxLength:50,
            }
    }
);

module.exports=mongoose.model('data',contactSchema);
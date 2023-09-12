const contact=require("../model/model");

exports.enteredContact=async(req,res)=>{

    try{
        const{FirstName, LastName, Email, phoneNumber}=req.body;
        const response=await contact.create({FirstName, LastName, Email, phoneNumber});
        res.status(200).json({
            success:true,
            data:response,
            message:'Data Entered',

        })

    }
    catch(err){
        console.error(err);
        console.log("Data Not Entered !!!");
        res.status(500).json({
            success:false,
            data:err.message,
            message:'Error Occured !!!',
        })
    }
    

}

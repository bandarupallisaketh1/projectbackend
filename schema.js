 const mongoose=require("mongoose")

 const contentSchema={
    username:String,
    password:String
    //producutName:String,
    //Productid:Number ->for any type of data we can specify the data like this in the above formate
 }
 const Content=mongoose.model("projcet",contentSchema)//mandatory

 module.exports=Content
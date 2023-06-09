const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port= process.env.PORT || 5000;
const mongoose= require("mongoose")
const Content=require("./schema")

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://keerthireddyvemireddy99:keerthireddyvemireddy99@cluster0.k6vjkol.mongodb.net/firstdb?retryWrites=true&w=majority")
 .then(()=>{
    console.log("mongodb connected successfully")
 })
 .catch((err)=>{
    console.log(err)
 })

app.get("/add",(req,res)=>{
    res.send("This is Saketh")   
})

app.get("/users",async(req,res)=>{
    await Content.find()
     .then(found=>res.json(found))
})

app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password

    })
    newData.save()
})

app.listen(5000,()=>console.log("server stared successfully"))

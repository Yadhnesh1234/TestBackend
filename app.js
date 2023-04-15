const express= require('express')
const mongoose=require('mongoose');
const router = require('./routes/user-routes');
const app=express()
app.use(express.json())
app.use("/name",router);

mongoose.connect(
   "mongodb+srv://admin:yadh@cluster0.z1phwkl.mongodb.net/?retryWrites=true&w=majority"
).then(()=>app.listen(8080,()=>console.log("connection done"))).catch((err)=>{ console.log(err)})

//6xaiQrTIRnE10Mve
const express = require("express");
const app=express();
const cors =require("cors");
require("./conn/conn");
require('dotenv').config()
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})
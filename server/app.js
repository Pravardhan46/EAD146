const express=require("express");
const mongoose = require('mongoose');
const router=require("./routes/routes")

const app=express();
app.use(express.json());

const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
// const url = "mongodb://127.0.0.1:27017/CBIT";
mongoose
  .connect(url)
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log(err));
app.use('/routes',router);
app.listen(9000,()=>{
    console.log('Server started');
})

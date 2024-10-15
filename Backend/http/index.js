import express from "express";

const app = express();

app.get("/", (req,res)=>{
    res.send("<h2> Hello World! </h2>");
});

app.listen(3000,()=>{
    console.log("server up and running");
});
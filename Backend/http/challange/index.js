import express from "express";

const app = express();
const port =3000;
app.get("/",(req,res)=>{
    res.send("Hi!");
});
app.get("/about",(req,res)=>{
    res.send("My nameis Jaliz");
});
app.get("/contact",(req,res)=>{
    res.send("contact: mahmudmridul2003@gmail.com");
});
app.listen(port,()=>{
    console.log("server up and running");
});
import express from "express";

const app = express();
const port =3000;

app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    
    let type = "a weekday";
    let adv = "its time to work hard" ;

    if(day === 2 || day===1){
        type = "the weekend";
        adv = "have some fun";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port,()=>{
    console.log('server is running on ${port}.');
});
//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyparser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var pass = "";
var password = "ILoveProgramming";
function passwordgen(req,res,next){
    pass = req.body["password"];
    next();
}

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(passwordgen);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
    if(pass===password){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
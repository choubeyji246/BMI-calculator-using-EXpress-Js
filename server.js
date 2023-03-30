const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
})

app.post("/",function(req,res){
    var weight=Number(req.body.n1);
    var height=Number(req.body.n2);

    res.send("Your Bmi value is "+ (weight/(height*height)) )
})



app.listen(3000,function(){
    console.log("Server started at port 3000")
})
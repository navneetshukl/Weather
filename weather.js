//e88177b20c024f7d86c120114221006
const express=require('express');
const request=require('request');
const bodyParser=require('body-parser');
 const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    //console.log(req.body.inpt);
    var city=req.body.inpt;
    var baseURL="http://api.weatherapi.com/v1/current.json?key=e88177b20c024f7d86c120114221006&q=";
    var URL=baseURL+city;
    request(URL,function(error,response,body){
        var data=JSON.parse(body);
       // console.log(data.location.name);
       res.write("<h1>The current temperature is "+ data.current.temp_c +" Degree Celsius .</h1>");
       res.write("<h1>The Region is "+ data.location.region +"  .</h1>");
       res.write("<h1>The Country is "+ data.location.country +" . </h1>");
       res.write("<h1>The Time-Zone is "+ data.location.tz_id +" .</h1>");
       res.write("<h1>The Local Time is "+ data.location.localtime +" . </h1>");
       res.write("<h1>The Temperature Last Updated at "+ data.current.last_updated +" . </h1>");


    });

});
app.listen(3000,function(){
    console.log("The server is running on the port 3000");
});

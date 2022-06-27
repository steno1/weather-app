const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");


})
app.post("/", function(req, res){
const yourName=req.body.cityName;
console.log(yourName);

const query=yourName;
    
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=8b1a851eacf77713c114a567879362aa";
    https.get(url, function(response){
console.log(response.statusCode);
response.on("data", function(data){
const myData=JSON.parse(data);
const myData2=myData.weather[0].description
const icon2=myData.weather[0].icon
const iconUrl=" http://openweathermap.org/img/wn/"+icon2+"@2x.png"
res.setHeader("Content-Type", "text/html");
res.write("the weather  in "+query+" is "+myData2+ "!");
res.write("<img src="+iconUrl+">")
res.send()
})
    })


})
  



app.listen(3000, function(){
    console.log("App listening to toochukwu port 3000");
})





















/*

app.get('/', function(req, res){
    const urls=  "https://jsonplaceholder.typicode.com/posts/1/comments"

    
      https.get(urls, function(response){

response.on("data", function(data){
    const myComment=JSON.parse(data)
    const myComment2=myComment.setup
    
console.log(myjokes1, myJokes2)
})
      })
res.send("hello")
  })
  */





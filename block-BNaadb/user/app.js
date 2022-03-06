//requires
var express = require("express");
var mongoose = require(`mongoose`);
var path = require(`path`);

var userRouter = require(`./routes/users`);
var indexRouter = require(`./routes/index`);
const { ppid } = require("process");

//connect to database
mongoose.connect("mongodb://localhost//user",(err)=>{
    console.log(err?err:"Connected to database");
});

//instance the app
var app = express();

//set up template engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//midddleware
app.use(express.json());
app.use(express.urlencoded({extendede:false}));

//static directory
app.use(express.static(path.join(__dirname,"public")));

//routing middleware
app.use("/",indexRouter);
app.use("/users",userRouter);

//error handler
app.use((req,res,next)=>{
    res.status(404).send("Page Not Found");
});

app.use((err,req,res,next)=>{
    res.send(err);
});

//listener
app.listen(3000,()=>{
 console.log("Server listening on port 3000");    
});
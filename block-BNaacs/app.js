//require
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

//connect to database
mongoose.connect("mongodb://localhost:27017/school", (err) => {
  console.log(err ? err : "Connected to Database");
});

//instance the app
var app = express();

//set up template engine
app.set("view engine", "ejs");
app.set("veiws",path.join("__dirname","views"));

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    res.locals.message="Hey Shazia";
    next();
})


//router
app.get(`/`,(req,res)=>{
    res.render(`index`)
})


//error handler
app.use((req, res, next) => {
  res.send("Page Not Found");
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
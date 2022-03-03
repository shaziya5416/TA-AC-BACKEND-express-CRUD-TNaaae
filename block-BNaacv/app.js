//require
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var userRouter = require("./routes/users");

//connect to database
mongoose.connect("mongodb://localhost:27017/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

//instance the app
var app = express();

//set up template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routing middleware
app.use("/students", userRouter);

//error handler
app.use((req, res, next) => {
  res.send("Page Not Found");
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
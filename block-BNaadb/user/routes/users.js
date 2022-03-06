//requires
var express = require("express");
var router = express.Router();
var User= require("../models/userSchema");

//user Routes

//creating routes
router.get("/new",(req,res)=>{
    res.render("userForm.ejs");
})
//saving data
router.post("/",(res,req,next)=>{
    User.create(req.body,(err,createUser)=>{
     if (err){
         return next(err);
     }
     res.redirect("/users");
    })
})

//fetch/read the user
router.get("/", (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) return next(err);
      res.render("users.ejs", { users: users });
    });
  });
  
//fetch/read only one user
router.get("/:id", (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
      if (err) return next(err);
      res.render("singleUser", { user });
    });
  });
//updating user form
router.get("/:id/edit", (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
      if (err) return next(err);
      res.render("editUser", { user: user });
    });
  });

//update user
router.post("/:id", (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
      if (err) return next(err);
      res.redirect("/users/" + id);
    });
  });

//delete user
router.delete("/:id", (req, res, next) => {});

module.exports = router;

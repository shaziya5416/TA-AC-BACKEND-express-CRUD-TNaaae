var express = require("express");
var router = express.Router();
var User = require("../models/user");

//user Routes
//Creating new user
router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

//Saving data
router.post("/", (req, res, next) => {
  User.create(req.body, (err, createduser) => {
    if (err) {
      return next(err);
    }
    res.redirect("/users");
  });
});

//fetch the user
router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users.ejs", { users: users });
  });
});

//fetch only one user
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

//updating user form
router.get("/:id/edit", (req, res) => {});

//update user
router.put("/:id", (req, res) => {});

//delete user
router.delete("/:id", (req, res) => {});

module.exports = router;
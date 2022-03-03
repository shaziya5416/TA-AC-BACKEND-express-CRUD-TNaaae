
var express = require("express");
var router = express.Router();

//User Routes
//Creating new User
router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

//Saving data
router.post("/", (req, res) => {
  res.send(req.body);
});

//fetch the User
router.get("/", (req, res) => {
  res.render("users.ejs");
});

//fetch only one User
router.get("/:id", (req, res) => {
  res.render("singleUser.ejs");
});

//update User
router.get("/:id/edit", (req, res) => {});

router.put("/:id", (req, res) => {});

//delete User
router.delete("/:id", (req, res) => {});

module.exports = router;
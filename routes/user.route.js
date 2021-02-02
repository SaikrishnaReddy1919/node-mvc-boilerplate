var express = require("express");
var router = express.Router();

var UserController = require("../controllers/user.controller");
const { isAdmin } = require("../middleware/user.middleware");

router.get("/users", isAdmin, UserController.getUsers);

module.exports = router;


// ? user related routes like:getting users, updating users, sending mails to users etc...
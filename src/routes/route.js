const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createAuthor", BookController.createAuthor )

router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)

router.post("/authorofBook", BookController.authorofBook)



module.exports = router;
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/UserController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook1", UserController.createBook1)
router.get("/getBookData1", UserController.getBookData1)
router.get("/getBooksInYear",UserController.getBooksInYear)
router.get("/getXINRBooks", UserController.getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)
router.get("/getParticularBooks ", UserController.getParticularBooks )



module.exports = router;
const userRoute = require("express").Router()
const UserController = require("../controllers/UserController.js")

userRoute.post("/signup", UserController.signup)
userRoute.post("/signin", UserController.signin)


module.exports = userRoute
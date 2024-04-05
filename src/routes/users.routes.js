const {Router} = require ("express")
const UserController = require("../controller/UserController")
const CheckUserExist = require("../middlewares/CheckUserExist")

const userRoutes = Router()

const userController = new UserController

userRoutes.post("/user", userController.createUser)
userRoutes.get("/user", userController.listUser)
userRoutes.get("/user/:user_id",CheckUserExist,userController.listUserById)
userRoutes.put("/user/:user_id", CheckUserExist,userController.updateUser)
userRoutes.patch("/user/:user_id",CheckUserExist,  userController.updateUserAdmin)
userRoutes.patch("/user/:user_id",CheckUserExist,userController.updateUserAdminFalse)
userRoutes.delete("/user/:user_id", CheckUserExist,userController.deleteUser) 

module.exports = userRoutes


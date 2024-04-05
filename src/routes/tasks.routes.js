const {Router} = require ("express")

const TaskController = require ("../controller/TaskController")
const CheckTaskExists = require("../middlewares/CheckTaskExist")
const CheckUserExist = require ("../middlewares/CheckUserExist")

const taskRoutes = Router ()


const taskController = new TaskController

taskRoutes.post("/tasks/:user_id",CheckUserExist,taskController.createTask)
taskRoutes.get("/tasks", taskController.listTask)
taskRoutes.get("/tasks/:id",CheckTaskExists,taskController.listTaskById)
taskRoutes.put("/tasks/:id",CheckTaskExists,taskController.updateTask)
taskRoutes.delete("/tasks/:id",CheckTaskExists,taskController.deleteTask)
 

 module.exports = taskRoutes

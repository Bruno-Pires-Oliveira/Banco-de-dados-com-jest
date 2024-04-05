const knex = require ("../../database/knex")

class TasksUpdateService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id,title,description,isCompleted}){
   const taskUpdated = await this.taskRepository.updateTasks({id,title,description,isCompleted})
   return taskUpdated
    }
}
module.exports = TasksUpdateService

class TasksCreateService
{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({title,description,isCompleted,user_id}){
        const taskCreated = await this.taskRepository.createTask({title,description,isCompleted,user_id})
        return taskCreated
    }
  
   }

module.exports = TasksCreateService
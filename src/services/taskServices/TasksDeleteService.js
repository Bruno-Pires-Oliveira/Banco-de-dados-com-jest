
class TasksDeleteService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id}){
    return await this.taskRepository.deleteTasks({id})
    
    }
}
module.exports = TasksDeleteService
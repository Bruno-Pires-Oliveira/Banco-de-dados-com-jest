const knex = require ("../../database/knex")

class UserListByIdServices{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id}){
   const task = await this.taskRepository.listUserById({id})
   return task
    }
}
module.exports = UserListByIdServices
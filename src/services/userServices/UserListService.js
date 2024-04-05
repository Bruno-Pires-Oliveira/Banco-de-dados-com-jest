const knex = require("../../database/knex");

class UserListService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute() {
    const users = await this.userRepository.listUser();
    return users;
  }
}
module.exports = UserListService;

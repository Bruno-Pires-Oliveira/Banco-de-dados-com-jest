const knex = require("../../database/knex");

class UserDeleteServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({ user_id }) {
    return await this.userRepository.deleteUser({ user_id });
  
  }
}
module.exports = UserDeleteServices;

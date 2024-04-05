const knex = require("../../database/knex");

class UserListByIdServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({ user_id }) {
    const user = await this.userRepository.listUserById({ user_id });
    return user;
  }
}
module.exports = UserListByIdServices;

class UserCreateServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({ name, email, password, user_id }) {
    const userCreated = await this.userRepository.createUser({
      name,
      email,
      password,
      user_id,
    });
    return userCreated;
  }
}

module.exports = UserCreateServices;

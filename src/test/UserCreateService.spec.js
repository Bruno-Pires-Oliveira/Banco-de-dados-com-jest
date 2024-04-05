const UserCreateServices = require("../services/userServices/UserCreateServices");
const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
describe("UserCreateService", () => {
  let userRepository = null;
  let userCreateServices = null;

  it("user should be created", async () => {
    const user = {
      name: "user test",
      email: "usertest@gmail.com",
      password: "123",
    };
    userRepository = new userRepositoryInMemory();
    userCreateServices = new UserCreateServices(userRepository);

    const userCreated = await userCreateServices.execute(user);

    expect(userCreated).toHaveProperty("user_id");
    expect(userCreated).toHaveProperty("name", userCreated.name);
  });
});

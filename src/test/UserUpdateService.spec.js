const UserCreateServices = require("../services/userServices/UserCreateServices");
const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
const UserUpdateServices = require("../services/userServices/UserUpdateServices");
describe("UserCreateService", () => {
  let userRepository = null;
  let userCreateServices = null;
  let userUpdateServices = null;

  it("user should be updated", async () => {
    const user = {
      name: "user test",
      email: "usertest@gmail.com",
      password: "123",
    };
    userRepository = new userRepositoryInMemory();
    userCreateServices = new UserCreateServices(userRepository);
    userUpdateServices = new UserUpdateServices(userRepository);
    const userCreated = await userCreateServices.execute(user);

    (userCreated.name = "User Update"),
      (userCreated.email = "update@email.com");

    const updateUser = await userUpdateServices.execute({ userCreated });

    expect(updateUser).toHaveProperty("email", "update@email.com");
  });
});

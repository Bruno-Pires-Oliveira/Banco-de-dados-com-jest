const UserCreateServices = require("../services/userServices/UserCreateServices");
const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
const UserDeleteServices = require("../services/userServices/UserDeleteServices");
const UserListService = require("../services/userServices/UserListService");
describe("TasksDeleteService", () => {
  let UserRepository = null;
  let userCreateService = null;
  let userDeleteService = null;
  let userListService = null;
  UserRepository = new userRepositoryInMemory();
  userCreateService = new UserCreateServices(UserRepository);
  userDeleteService = new UserDeleteServices(UserRepository);
  userListService = new UserListService(UserRepository);

  it("user should be deleted", async () => {
    const user = {
      name: "userTest",
      email: "userTest@gmail.com",
      password: "1234",
    };

    const userCreated = await userCreateService.execute(user);
    await userDeleteService.execute(user);
    const list = await userListService.execute();
    expect(list).not.toHaveProperty("name", "userTest");
    console.log(list);
  });
});

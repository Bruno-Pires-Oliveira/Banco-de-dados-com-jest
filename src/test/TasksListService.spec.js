const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
const taskRepositoryInMemory = require("../repositories/taskRepository/taskRepositoryInMemory");
const UserCreateServices = require("../services/userServices/UserCreateServices");
const TasksCreateService = require("../services/taskServices/TasksCreateServices");
const TasksListService = require("../services/taskServices/TasksListService");

describe("TaskListService", () => {
  let taskRepository = null;
  let taskCreateService = null;
  let userCreateService = null;
  let userRepository = null;
  let taskListService = null;

  beforeEach(() => {
    userRepository = new userRepositoryInMemory();
    userCreateService = new UserCreateServices(userRepository);

    taskRepository = new taskRepositoryInMemory();
    taskCreateService = new TasksCreateService(taskRepository);
    taskListService = new TasksListService(taskRepository);
  });

  it("should be able to list Tasks", async () => {
    const user = {
      name: "userTest",
      email: "userTest@gmail.com",
      password: "1234",
    };
    const userCreated = userCreateService.execute(user);

    const task1 = {
      title: "The test1",
      description: "Book test1, book test1",
      user_id: userCreated.user_id,
    };

    const task2 = {
      title: "The test2",
      description: "Book test2, book test2",
      user_id: userCreated.user_id,
    };

    await taskCreateService.execute(task1);
    await taskCreateService.execute(task2);
    const list = await taskListService.execute();
    expect(list).toEqual(expect.arrayContaining(list));
  });
});

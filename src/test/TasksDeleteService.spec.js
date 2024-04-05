const TasksCreateService = require("../services/taskServices/TasksCreateServices");
const taskRepositoryinMemory = require("../repositories/taskRepository/taskRepositoryInMemory");
const UserCreateServices = require("../services/userServices/UserCreateServices");
const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
const TasksDeleteService = require("../services/taskServices/TasksDeleteService");
const TasksListService = require("../services/taskServices/TasksListService");
describe("TasksDeleteService", () => {
  let TaskRepository = null;
  let taskCreateService = null;
  let userCreateService = null;
  let UserRepository = null;
  let tasksDeleteService = null;
  let tasksListService = null;

  TaskRepository = new taskRepositoryinMemory();
  taskCreateService = new TasksCreateService(TaskRepository);
  UserRepository = new userRepositoryInMemory();
  userCreateService = new UserCreateServices(UserRepository);
  tasksDeleteService = new TasksDeleteService(TaskRepository);
  tasksListService = new TasksListService(TaskRepository);

  it("task should be deleted", async () => {
    const user = {
      name: "userTest",
      email: "userTest@gmail.com",
      password: "1234",
    };

    const userCreated = await userCreateService.execute(user);

    const task = {
      title: "The test",
      description: "Book test, book test",
      user_id: userCreated.user_id,
    };

    const taskCreated = await taskCreateService.execute(task);
    await tasksDeleteService.execute(task);
    const list = await tasksListService.execute();
    expect(list).not.toHaveProperty("title", "The test");
    console.log(list);
  });
});

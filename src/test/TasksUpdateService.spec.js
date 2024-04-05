const TasksUpdateService = require("../services/taskServices/TasksUpdateService");
const taskRepositoryInMemory = require("../repositories/taskRepository/taskRepositoryInMemory");
const TasksCreateServices = require("../services/taskServices/TasksCreateServices");
const UserCreateServices = require("../services/userServices/UserCreateServices");
const userRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");

describe("TaskUpdateService", () => {
  let userRepository = null;
  let taskRepository = null;
  let userCreateServices = null;
  let tasksCreateServices = null;
  let tasksUpdateService = null;
  beforeEach(() => {
    userRepository = new userRepositoryInMemory();
    userCreateServices = new UserCreateServices(userRepository);

    taskRepository = new taskRepositoryInMemory();
    tasksCreateServices = new TasksCreateServices(taskRepository);
    tasksUpdateService = new TasksUpdateService(taskRepository);
  });

  it("task should be updated", async () => {
    const user = {
      name: "userTest",
      email: "userTest@gmail.com",
      password: "1234",
    };
    const userCreated = await userCreateServices.execute(user);
    console.log(userCreated);

    const task = {
      title: "The test 1",
      description: "test 1,  test 1",
      isCompleted: "false",
      user_id: userCreated.user_id,
    };
    const taskCreated = await tasksCreateServices.execute(task);
    taskCreated.title = "Tarefa Atualizada";
    taskCreated.description = "Descrição Atualizada";

    const taskUpdated = await tasksUpdateService.execute(taskCreated);

    expect(taskUpdated).toHaveProperty("title", "Tarefa Atualizada");
  });
});

const knex = require("../../database/knex");

class taskRepository {
  async createUser({ title, description, user_id }) {
    const isCompleted = false;

    const taskId = await knex("tasks").insert({
      title,
      description,
      isCompleted,
      user_id,
    });
    return { id: taskId };
  }
  async listTasks() {
    const tasks = await knex("tasks");
    return tasks;
  }
  async listTaskById() {
    const task = await knex("tasks").where({ id });
    return task;
  }
  async updateTasks({ title, description, isCompleted }) {
    const task = await knex("tasks").where({ id });
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.isCompleted = isCompleted ?? task.isCompleted;

    await knex("tasks")
      .where({ id })
      .update({
        title: task.title,
        description: task.description,
        isCompleted: task.isCompleted,
      });
    return user;
  }
  async deleteTasks({ id }) {
    const task = await knex("tasks").where({ id }).delete();
    return task;
  }
}

module.exports = taskRepository;

class taskRepositoryinMemory {
  tasks = [];
  async createTask({ title, description, user_id }) {
    const task = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      description,
      isCompleted: false,
      user_id,
    };
    this.tasks.push(task);
    return task;
  }
  async listTask() {
    return this.tasks;
  }
  async listTaskById({ id }) {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }
  async updateTasks({ title, description, isCompleted, id }) {
    const task = this.listTaskById({ id });
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.isCompleted = isCompleted ?? task.isCompleted;

    return task;
  }
  async deleteTasks({ id }) {
    const index = this.tasks.findIndex((task) => task.id === id);
    return this.tasks.splice(index, 1);
  }
}

module.exports = taskRepositoryinMemory;

class Task {
  constructor(id, title, completed) {
    // id is read-only and cannot be reconfigured or deleted
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
    this.title = title;
    this.completed = completed;
  }

  // Returns a NEW Task with the flipped completed value
  toggle() {
    return new Task(this.id, this.title, !this.completed);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Every method replaces this.tasks with a new array; the old one is never mutated
  setTasks(tasks) {
    this.tasks = [...tasks];
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  toggleTask(taskId) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? task.toggle() : task
    );
  }
}

const loadTasksBtn = document.getElementById('loadTasksBtn');
const taskList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

const taskManager = new TaskManager();

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle('error', isError);
}


function clearTaskList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function renderTasks() {
  clearTaskList();

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    if (task.completed) {
      taskDiv.classList.add('completed');
    }

    const titleSpan = document.createElement('span');
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle';
    toggleBtn.addEventListener('click', () => {
      taskManager.toggleTask(task.id);
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskManager.removeTask(task.id);
      renderTasks();
    });

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
  });
}

async function loadTasks() {
  setStatus('Loading tasks...');

  try {
    const rawTasks = await fetchTasks();

    // JSON round-trip (practice): stringify, then parse back
    const json = JSON.stringify(rawTasks);
    const parsed = JSON.parse(json);

    const tasks = parsed.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    taskManager.setTasks(tasks);
    renderTasks();
    setStatus('');
  } catch (error) {
    setStatus(`Error: failed to load tasks (${error.message})`, true);
  }
}

loadTasksBtn.addEventListener('click', loadTasks);
# Assignment 4 – Dynamic Task Dashboard

A simple task dashboard I built with vanilla JavaScript for the Web Programming course.
Tasks are loaded from a fake server, rendered to the page with DOM methods, and can be toggled or deleted.

## File organization

```
assignment4/
├── index.html       → page structure (heading, button, status message, task list)
├── styles.css       → minimal styling, line-through for completed tasks
├── taskManager.js   → Task and TaskManager classes (immutable updates)
├── api.js           → fetchTasks(): fake server with a 1500ms delay
├── main.js          → connects everything: events, async loading, rendering
└── README.md
```

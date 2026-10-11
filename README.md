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

## Challenges I faced
- **Immutability:** I couldn't use `push()` or `splice()` because they change the original array. I had to use spread, `filter()` and `map()` so every update creates a new array.
- **toggle() returning a new object:** Since `completed` can't be changed on the same object, I had to replace the old task with the new one using `map()`.
- **Read-only id:** It was my first time using `Object.defineProperty`. I learned what `writable` and `configurable` do.
- **Re-rendering:** Before rendering the list again I had to remove the old elements, otherwise tasks would be duplicated. I used a `removeChild` loop for this.

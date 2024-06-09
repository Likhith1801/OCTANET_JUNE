// Get the task form and list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener for the add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    // Get the task text from the input field
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText) {
        // Create a new task element
        const taskElement = document.createElement('li');
        taskElement.className = 'task';

        // Add the task text to the task element
        taskElement.textContent = taskText;

        // Add a delete button to the task element
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'task-delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });
        taskElement.appendChild(deleteBtn);

        // Add the task element to the task list
        taskList.appendChild(taskElement);

        // Clear the task input field
        taskInput.value = '';
    }
}
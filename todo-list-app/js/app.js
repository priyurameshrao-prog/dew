const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const themeToggleButton = document.getElementById("theme-toggle-btn");
const taskList = document.getElementById("task-list");

function setTheme(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("dark-mode", isDarkMode);
}

setTheme(localStorage.getItem("dark-mode") === "true");

themeToggleButton.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("dark-mode"));
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

const addTaskButton = document.getElementById("addTaskButton");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener("click", function() {
    taskForm.style.display = "block";
});
saveTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value;
    let newTask = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    newTask.appendChild(checkbox);
    newTask.appendChild(taskTextElement);
    taskList.appendChild(newTask);
    taskForm.style.display = "none";
    taskInput.value = "";
});
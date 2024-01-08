function addTask() {
  // Get the input value
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add a delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      listItem.remove();
    };

    listItem.appendChild(deleteButton);

    // Add the list item to the task list
    document.getElementById("taskList").appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }
}

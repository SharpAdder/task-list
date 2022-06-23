
//slect DOM elements
const submitButton = document.getElementById("btnSubmit"); //submit button
const tasks = document.getElementById("tasks"); //tastks element
const clearButton = document.getElementById("btnClear"); // clear button
const messageElement = document.getElementById("message"); //message for no task

// Event Listeners
submitButton.addEventListener("click", addTask); //adding a task
tasks.addEventListener("click", handleTaskClick); //handle finished tasks (line through)
clearButton.addEventListener("click", clearList); // clear task list

//Function declarations

//cleaerList removes all elements from list
function clearList() {
  const taskList = tasks.getElementsByClassName("list-group-item"); //select all elements from class list-group-item 


  //check to see of task lists has elements and removes them one by one
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage("You have no tasks");
}

//strike through finished tasks
function handleTaskClick(event) {
  
  const style = event.target.style; // targets the event and adds text decoration
  
  //checks to see if task has strike through. if yes, eill remove text decoration on click
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}


displayMessage("Good, you have no tasks today"); //message displayed on refresh/ page load

// add a new task in the list
function addTask() {
  /*
  takes user input
  checks to see if input is valid, if yes creates a list item with the task
  adds ti li class list-group-item
  clers input area for new task
  adds visibility hidden style to greeting or warning message, after a new task is added
  else displays warning
  */

  const newTask = document.getElementById("newTask"); //takes user input

  if (inputIsValid(newTask.value)) {
    tasks.innerHTML += '<li class="list-group-item">' + newTask.value + "</li>";
    newTask.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    
    displayMessage("Please enter a task");
  }
}

//warning for sumbitting no tasks
function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

// checks if task was entered
function inputIsValid(input) {
  if (input) {
    return true;
  } else {
    return false;
  }
}

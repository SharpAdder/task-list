// extragere elementele html
// selectez butonul de submit
const submitButton = document.getElementById("btnSubmit");

// iau elementul tastks
const tasks = document.getElementById("tasks");

//extrag butonul care sterge lista din DOM
const clearButton = document.getElementById("btnClear");

// adaug event listener pe butonul de submit
submitButton.addEventListener("click", addTask);

//pun event listener pe lista de taskuri ca sa pot sterge taskurile terminate
tasks.addEventListener("click", handleTaskClick);

//pun event listener pe butonul de stergere lista
clearButton.addEventListener("click", clearList);

//functia care sterge toate elementele din lista/ toate taskurile
function clearList() {
  //selectez toate elem din clasa list-group-item care se afla in divul cu id-ul tasks (divul e prins in const tasks)
  const taskList = tasks.getElementsByClassName("list-group-item");

  //cat timp lista de taskuri are elemente in ea
  //se va itera prin lista si se va scoate pe rand .removeChild cate un task
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage("You have no tasks");
}

//functia handleTaskClick taie taskurile terminate
function handleTaskClick(event) {
  //elementul HTML pe care dau click declanseaza evenimentul
  //targhetez evenimentul event.target si ii adaug stil css .style
  const style = event.target.style;
  //daca taskul nu este taiat/nu e decorat -> se va taia
  //daca e taiat --> pot sa debifez un task cu empty string ""
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

//extrag mesajul care se afiseaza daca nu s-a introdus task si s-a dat submit
const messageElement = document.getElementById("message");

// apel displayMessage -> no tasks today la incarcarea aplicatiei
displayMessage("Good, you have no tasks today");

// functie care adauga task nou il lista
function addTask() {
  // manipulari de DOM
  // iau inputul utilizatorului si il adaug intr-o lista
  const newTask = document.getElementById("newTask"); //am luat inputul
  // adaug inputul userului in lista de taskuri
  // verific daca inputul e valid daca da --> se adauga taskul
  // newTask.value = taskul introdus in camp

  if (inputIsValid(newTask.value)) {
    // clasa list-group-item e creata in js
    tasks.innerHTML += '<li class="list-group-item">' + newTask.value + "</li>";

    // sterg textul/taskul introdus in camp ca sa pot adauga unul nou
    newTask.value = "";
    //daca s-a afisat mesaj de atentionare si am adaugat task => ascund mesajul
    //daca am mesajul de nu ai taskuri azi si am bagat task => se ascinde greet-ul: nu ai itaskuri azi, si se vede doar taskul
    //de atentionare cu css style.visibility.hidden
    messageElement.style.visibility = "hidden";
  } else {
    //apelez functia care afiseaza atentionare
    displayMessage("Please enter a task");
  }
}

//functia afisaza atentionare daca s-a dat submit si nu s-a introdus task
function displayMessage(message) {
  messageElement.innerText = message;

  //adaug stil css visible la mesaj
  messageElement.style.visibility = "visible";
}

// functia inputIsValid verifica daca s-a introdus un task
function inputIsValid(input) {
  // daca s-a introdus task => true
  if (input) {
    return true;
  } else {
    return false;
  }
}

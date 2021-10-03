
const toDoForm = document.getElementById("toDo-form");
const toDoInput = toDoForm.querySelector("#toDo-form input");
const toDoList = document.getElementById("toDo-list");

const TODOSAVED_KEY = "toDoSaved";

let toDoSaved = [];

function handleSavedToDo() {
    localStorage.setItem(TODOSAVED_KEY, JSON.stringify(toDoSaved));
}


function handleDeleteBtn(event) {
    const li = event.target.parentElement;
    li.remove(); 
    toDoSaved = toDoSaved.filter((toDo) => toDo.id !== parseInt(li.id));
    handleSavedToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", handleDeleteBtn);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDoSaved.push(newToDoObj);
    paintToDo(newToDoObj);
    handleSavedToDo();
}


toDoForm.addEventListener("submit", handleToDoSubmit); 

const toDoStorageSaved = localStorage.getItem(TODOSAVED_KEY);

 if (toDoStorageSaved !== null) {
     const parsedtoDo = JSON.parse(toDoStorageSaved);
     toDoSaved = parsedtoDo;
     parsedtoDo.forEach(paintToDo);
 }


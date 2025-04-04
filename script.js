const inputBox = document.querySelector(".input-box");
const button = document.querySelector("button");
const listContainer = document.querySelector(".list-container");

function addTask(value) {
  if (inputBox.value === "") {
    alert("You need to write something!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
button.addEventListener("click", () => {
  addTask(inputBox.value);
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask(inputBox.value);
  }
});

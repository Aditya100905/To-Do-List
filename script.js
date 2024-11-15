const inputBox = document.getElementById("input-box");
let listcontainer = document.querySelector(".list-container");
const button = document.querySelector(".row button");

function addtask() {
  if (inputBox.value.trim() === "") {
    alert("Task can not be empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.append(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  datasaver();
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    datasaver();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    datasaver();
  }
});

function datasaver() {
  localStorage.setItem("Data", listcontainer.innerHTML);
}

function showtask() {
  listcontainer.innerHTML = localStorage.getItem("Data");
}

showtask();

document.querySelector(".clear").addEventListener("click", () => {
  listcontainer.innerHTML = "";
  datasaver();
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addtask();
  }
});


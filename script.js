let userInput = document.getElementById("userInput");
let tasks = document.getElementById("tasks");

function addTask() {
    if (userInput.value == "") {
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
        let newTask = document.createElement("li");
        newTask.innerHTML = userInput.value;
        tasks.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
    }
    userInput.value = "";
    saveData();
}

userInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addTask();
    }
});

tasks.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem("data", tasks.innerHTML);
}
function showTask() {
    tasks.innerHTML = localStorage.getItem("data");
}
showTask();
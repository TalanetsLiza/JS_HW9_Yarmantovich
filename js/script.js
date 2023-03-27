"use strict";

let todoContainers = [];

const addTodo = (name) => {
    const container = document.createElement("div");
    container.classList.add("todo");
    document.body.appendChild(container);
    todoContainers.push(container);

    const label = document.createElement("label");
    label.className = "todo__label";
    container.appendChild(label);

    const labelText = document.createElement("span");
    labelText.className = "todo__text";
    labelText.innerText = name;
    label.appendChild(labelText);

    
    const checkBox = document.createElement("input");
    checkBox.className = "todo__checkbox";
    checkBox.setAttribute("type", "checkbox");
    label.prepend(checkBox);

    const editButton = document.createElement("button");
    editButton.className = "todo__edit-icon";
    container.appendChild(editButton);

    editButton.addEventListener("click", () => {
        const newName = prompt(name);
        labelText.innerText = newName;
    });
};

const clearAll = () => {
    todoContainers.forEach((div) => {
        div.remove();
    });
    todoContainers = [];
};

const note = document.querySelector("input");
note.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        const value = event.target.value;
        addTodo(value);
        event.target.value = "";
    }
});

document.querySelector(".form__clear").addEventListener("click", clearAll);
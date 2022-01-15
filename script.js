"use strict"

const button = document.querySelector("#btn");
button.addEventListener("click", start);

function createDivs(num) {
    let number = (num * num) +1;
    const container = document.querySelector("#main");
    for(let i = 1; i < number; i++) {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "rgb-divs");
        container.appendChild(createDiv);
        container.setAttribute("style", `grid-template-columns: repeat(${num}, 1fr);`)
    }
};

function clearGrid() {
    const container = document.querySelector("#main");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function start() {
    clearGrid();
    createDivs(prompt("What grid size do you prefer?"));
};
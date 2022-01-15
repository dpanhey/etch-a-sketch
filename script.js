"use strict"

const container = document.querySelector("#main");
const button = document.querySelector("#btn");
button.addEventListener("click", start);
container.addEventListener("mouseover", changeColor);

function createDivs(num) {
    let number = (num * num) +1;
    for(let i = 1; i < number; i++) {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "rgb-divs");
        createDiv.setAttribute("id", `div${i}`);
        container.appendChild(createDiv);
        container.setAttribute("style", `grid-template-columns: repeat(${num}, 1fr);`)
    }
};

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function start() {
    clearGrid();
    createDivs(prompt("What grid size do you prefer?"));
};

function changeColor(e) {
    const div = document.getElementById(e.target.id);
    const rndRGB = function() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    div.setAttribute("style", `background-color: ${rndRGB()}`);
}
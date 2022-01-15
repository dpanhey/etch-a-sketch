"use strict"

function createDivs(num) {
    let number = (num * num) +1;
    const container = document.querySelector("#main");
    for(let i = 1; i < number; i++) {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "rgb-divs");
        container.appendChild(createDiv);
        container.setAttribute("style", `grid-template-columns: repeat(${num}, 1fr);`)
    }
}

createDivs(4);
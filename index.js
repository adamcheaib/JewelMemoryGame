"use strict"

const gameOptionsDoms = document.querySelectorAll("#gameContainer > div");
const classNames = ["emerald", "golden", "onyx", "ruby", "sapphire", "bronze"];

function addOption(element) {
    element.classList.add("gameOption");
    let i = 0;

    while (i != 1) {
        const currentClass = classNames[Math.floor(Math.random() * classNames.length)];
        if (document.querySelectorAll(`[value=${currentClass}]`).length !== 2) {
            element.setAttribute("value", currentClass);
            i++;
        } 
    }
}

gameOptionsDoms.forEach(addOption);

function addImages(event) {

    for (let i = 0; i < classNames.length; i++) {
        switch (event.target.getAttribute("value") === classNames[i]) {
            case true:
                event.target.style.backgroundImage = `url(./media/${classNames[i]}.png)`;
                break;        
        }
    }
}

// Control the "selected"-class has the length of two, then within the array, control if both have the same value.
function controlSelected(event) {
    event.target.classList.add("selected");
}
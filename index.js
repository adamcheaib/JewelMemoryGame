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

gameOptionsDoms.forEach(optionDOM => optionDOM.addEventListener("click", addImages));

// Control the "selected"-class has the length of two, then within the array, control if both have the same value.
function markSelected(event) {
    event.target.classList.add("selected");
    const allSelected = document.querySelectorAll(".selected");
    console.log(event.target.getAttribute("value"));
    

    // All styling should be conducted through CSS due to Javscript-styling overwriting CSS-styling. I.e Change everything to classes!
    if (allSelected.length == 2) {
        if (allSelected[0].getAttribute("value") === allSelected[1].getAttribute("value")) {
            console.log("Selected!");
            allSelected.forEach(selectedDOM => { selectedDOM.classList.remove("selected"); selectedDOM.classList.add("correct") });
        } else {
            allSelected.forEach(selectedDOM => {selectedDOM.style.border = "2px solid red"})
            gameOptionsDoms.forEach(optionsDOM => optionsDOM.style.pointerEvents = "none");
            setTimeout(() => {
                allSelected.forEach(selectedDOM => { selectedDOM.style.backgroundImage = ""; selectedDOM.classList.remove("selected"); selectedDOM.style.border = "1px solid black"; });                
                gameOptionsDoms.forEach(optionsDOM => optionsDOM.style.pointerEvents = "all");

            }, 1000)
        }
    }
}

gameOptionsDoms.forEach(optionDOM => optionDOM.addEventListener("click", markSelected));
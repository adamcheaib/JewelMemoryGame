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

function markSelected(event) {
    event.target.classList.add("selected");
    const allSelected = document.querySelectorAll(".selected");
    const allNoneSelected = document.getElementById("gameContainer").querySelectorAll("div:not(.selected)");
    
    if (allSelected.length == 2) {
        if (allSelected[0].getAttribute("value") === allSelected[1].getAttribute("value")) {
            allSelected.forEach(selectedDOM => { selectedDOM.classList.remove("selected"); selectedDOM.classList.add("correct"); selectedDOM.removeEventListener("click", markSelected) });
            if (document.querySelectorAll(".correct").length == 12) {
                setTimeout(() => alert("You won!"))
            };
        } else {
            allSelected.forEach(selectedDOM => selectedDOM.classList.add("wrong"));
            allNoneSelected.forEach(optionsDOM => optionsDOM.style.pointerEvents = "none");
            setTimeout(() => {
                allSelected.forEach(selectedDOM => { selectedDOM.style.backgroundImage = ""; selectedDOM.classList.remove("selected"); selectedDOM.classList.remove("wrong") });
                allNoneSelected.forEach(optionsDOM => optionsDOM.style.pointerEvents = "all");

            }, 1000);
        }
    }

}

gameOptionsDoms.forEach(optionDOM => optionDOM.addEventListener("click", markSelected));
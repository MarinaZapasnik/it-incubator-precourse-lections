//import { increaseCount } from "../../data/dataCounter.js";

export function Button(someTitle, someOnClickHandler) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = someTitle;
    buttonElement.addEventListener('click', someOnClickHandler)
    return buttonElement
}
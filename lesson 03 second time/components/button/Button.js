import { data, increaseCount } from "../../data/dataCounter.js";



export function Button(someTitle, someOnclickHeandler) {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = someTitle;
    buttonElement.addEventListener('click', someOnclickHeandler);
    return buttonElement;

}

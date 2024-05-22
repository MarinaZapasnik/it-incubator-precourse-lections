import { data } from "../../data/dataCounter.js";

export function Button() {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = data.buttonTitle;
    return buttonElement;

}

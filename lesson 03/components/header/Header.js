import { data } from "../../data/dataCounter.js"; 

export function Header(someTitle) {
    const titleElement = document.createElement('h2');
    titleElement.innerText = data.title;
    return titleElement
}
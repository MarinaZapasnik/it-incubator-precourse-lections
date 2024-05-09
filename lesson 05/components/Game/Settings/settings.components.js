import { start } from "../../../data.js";


export function Settings() {
    const element = document.createElement('div');

    const startButoon = document.createElement('button');
    startButoon.append('Start');

    startButoon.addEventListener('click', () => {
        start();
    })

    element.append(startButoon)

    return element
}
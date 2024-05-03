import { playAgain } from "../../data.js";

export function Win() {
    const element = document.createElement('div');

    element.append('You win')
 
 const playAgainButoon = document.createElement('button');
 playAgainButoon.append('Play Again');

 playAgainButoon.addEventListener('click', () => {
    playAgain();
 })

 element.append(playAgainButoon)

 return element
 }
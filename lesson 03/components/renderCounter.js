import { decreaseCount, increaseCount } from "../data/dataCounter.js";
import { Button } from "./button/Button.js";
//import { ButtonDec } from "./button/ButtonDec.js";
import { Header } from "./header/Header.js";
import { Value } from "./value/Value.js";

export function renderCounter() {
    //clear page content
    document.body.innerHTML = ''
    //Header
const header = Header()
//Value
const value = Value()
//Button
const buttonInc = Button('inc', increaseCount)
const buttonDec = Button('dec', decreaseCount)
//render
document.body.append(
    header,
    value,
    buttonInc,
    buttonDec
)
}
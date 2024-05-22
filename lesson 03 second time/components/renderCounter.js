import { Button } from "./button/Button.js";
import { Header } from "./header/Header.js";
import { Value } from "./value/Value.js";

export function renderCounter () {
    //clear page content
    document.body.innerHTML = '';

    //Header
    const header = Header();

    //Value
    const value = Value();

    //Button
    const button = Button();

    //render
    document.body.append(
        header,
        value,
        button
    );

}
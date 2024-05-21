import { Button } from "./button/Button.js";
import { Header } from "./header/Header.js";
import { Value } from "./value/Value.js";

export function renderCounter (someData) {

    //Header
    const header = Header(someData.title);

    //Value
    const value = Value(someData.count);

    //Button
    const button = Button(someData.buttonTitle);

    //render
    document.body.append(
        header,
        value,
        button
        );

}
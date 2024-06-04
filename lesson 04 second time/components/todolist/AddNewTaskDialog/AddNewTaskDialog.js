import { Button } from "../../common/Button/Button.js";

export function AddNewTaskDialog() {

    const container = document.createElement('dialog');
    container.open = true;

    const inputElement = document.createElement('input');
    const saveBtnElement = Button('save', () => {});
    const cancelBtnElement = Button('cancel', () => {});

    container.append (
        inputElement,
        saveBtnElement,
        cancelBtnElement
    )


    return container
}
import { Button } from "../../common/Button/Button.js";

export function Task (task) {

    const container = document.createElement('li');
    
    const deleteBtnElement = Button('❌', () => {});
    

    container.append(
        task.title,
        deleteBtnElement
        );


return container;

}
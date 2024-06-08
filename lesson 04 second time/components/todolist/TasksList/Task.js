import { deleteTask } from "../../../data/data.js";
import { Button } from "../../common/Button/Button.js";

export function Task (task) {

    const onClickDeleteTaskHendler = () => deleteTask(task.id);

    const container = document.createElement('li');
    
    const deleteBtnElement = Button('❌', onClickDeleteTaskHendler);
    

    container.append(
        task.title,
        deleteBtnElement
        );


return container;

}
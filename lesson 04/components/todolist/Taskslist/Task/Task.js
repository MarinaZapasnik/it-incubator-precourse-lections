import { Button } from "../../../common/Button/Button.js"
import { deleteTask } from "../../../../data/data.js"

export function Task(task) {
    const onClickDeleteTaskHeandler = () => deleteTask(task.id)


    const container = document.createElement('li');
    const deleteBtnElement = Button('x', onClickDeleteTaskHeandler);

    container.append(
        task.title,
        deleteBtnElement
    )

    return container
}
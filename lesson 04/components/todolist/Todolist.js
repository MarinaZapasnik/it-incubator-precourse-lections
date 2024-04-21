import { Button } from "../common/Button/Button.js"
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js"
import { Header } from "./Header/Header.js"
import { Taskslist } from "./Taskslist/Taskslist.js"

export function Todolist(todolistData) {
    const container = document.createElement('div')

    const headerElement = Header(todolistData.todolist.title)
    const tasksListElement = Taskslist(todolistData.todolist.tasks)
    const addBtnElement = Button('+', () => {})
    const addNewTaskDialogElement = AddNewTaskDialog()

    container.append(
        headerElement,
        tasksListElement,
        addBtnElement,
        addNewTaskDialogElement
    )
    return container
}
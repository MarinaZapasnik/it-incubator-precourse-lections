import { Button } from "../common/Button/Button.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TaskList.js";


export function Todolist (todolistData) {

    const container = document.createElement('div');

    const headerElement =  Header(todolistData.todolist.title);
    const tasksListElement = TasksList(todolistData.todolist.tasks);
    const addBtnElement = Button ('+ add', () => {});
    const addNewTaskDialogElement = AddNewTaskDialog();
    
    container.append(
        headerElement,
        tasksListElement,
        addBtnElement,
        addNewTaskDialogElement
    )




    return container;
}
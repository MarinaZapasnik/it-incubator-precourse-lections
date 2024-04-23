export const data = {
    todolist: {
        id: crypto.randomUUID(),
        title: 'Todolist',
        tasks: [
            {
                id: crypto.randomUUID(),
                title: 'Learn HTML'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn CSS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn JS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn React'
            },
        ],
        addNewTaskDialog: {
            isOpen: false
        }
    }
}

let notifySubscriber = function () { }

export function subscribe(subscriber) {
    notifySubscriber = subscriber //refresh UI
}

// CRUD tasks:
export function deleteTask(taskId) {
    data.todolist.tasks = data.todolist.tasks.filter(t => t.id !== taskId)
    notifySubscriber() //refresh UI
}

export function addTask(taskTitle) {
    const newTask = {
        id: crypto.randomUUID,
        title: taskTitle
    }
    data.todolist.tasks.push(newTask)// метод push добавляет новый элемент в уже существующий массив 
    //////data.todolist.tasks = [...data.todolist.tasks, newTask]//спред синтаксис '...' содаем новый массив и копируем в рнего все данные из старого плюс newTask
    notifySubscriber() //refresh UI
}

//UI:
export function openAddNewTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = true
    notifySubscriber() //refresh UI
}

export function closeAddNewTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = false
    notifySubscriber() //refresh UI
}
export const data = {
    todolist: {
        id: crypto.randomUUID(),
        title: 'Todolist:',
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

export function deleteTask (taskId) {
    data.todolist.tasks = data.todolist.tasks.filter(t => t.id !== taskId);
}


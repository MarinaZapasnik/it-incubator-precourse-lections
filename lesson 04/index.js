import { Todolist } from "./components/todolist/todolist.js";
import {data} from "./data/data.js";


const root = document.getElementById('root')
const todolistElement = Todolist(data)
root.append(todolistElement)
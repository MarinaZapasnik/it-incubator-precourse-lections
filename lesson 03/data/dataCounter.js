//import { renderCounter } from "../components/renderCounter.js";

export const data = {
    title: 'Counter',
    count: 0
}


// setInterval(function(){
//     data.count++
//     console.log(data.count);

//     renderCounter(data)
// }, 1000)
let changeDataCallBack = function () {
    alert('Пустышка')
}

export function setChangeDataCallBack(newCallBack) {
    changeDataCallBack = newCallBack
}

export function increaseCount() {
    data.count++
    changeDataCallBack()
    //renderCounter(data)
}

export function decreaseCount() {
    data.count--
    changeDataCallBack()
    //renderCounter(data)
}
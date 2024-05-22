import { renderCounter } from "../components/renderCounter.js";

export const data = {

    title: 'Counter',
    count: 0,
    buttonTitle: 'increment'
    
}


// setInterval(function() {
//     data.count++;
//     console.log(data.count);
//     // обновляем UI
//     renderCounter(data)
// }, 1000)


export function increaseCount() {
    data.count++;
    renderCounter(data)
}
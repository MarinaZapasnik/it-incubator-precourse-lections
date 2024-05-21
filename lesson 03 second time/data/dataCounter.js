export const data = {

    title: 'Counter',
    count: 0,
    buttonTitle: 'increment'
    
}


setInterval(function() {
    data.count++;
    console.log(data.count)
}, 1000)
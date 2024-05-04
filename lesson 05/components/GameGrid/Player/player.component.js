export function Player(playerNumber) {

if (![1,2].some(number => number === playerNumber)) {
    throw new Error ('Incorrect player number')
}

    const element = document.createElement('img')

    element.src = `assets/images/player${playerNumber}.png`;


    return element
}
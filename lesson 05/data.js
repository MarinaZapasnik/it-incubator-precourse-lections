export const GAME_STATES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose'
}

export const MOVING_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
}


const _data = {
    gameState: GAME_STATES.SETTINGS,
    settings: {
        gridSize: {
            x: 3,
            y: 3,
        },
        pointsToWin: 5,
        pointsToLose: 20,
        googleJumpInterval: 4000
    },
    catch: {
        player1:  0,
        player2: 0
    },
    miss: 0,
    time: new Date(),
    heroes: {
        google: {
            x: 0,
            y: 0
        },
        player1: {x: 1, y: 1},
        player2: {x: 2, y: 2}
    }
}

let observer = () => {}

function changeGoogleCoords() {
    
    let newX = _data.heroes.google.x;
    let newY = _data.heroes.google.y;


    do {
        newX = getRandomInt(_data.settings.gridSize.x - 1);
        newY = getRandomInt(_data.settings.gridSize.y - 1);

        var newCoordsMatchPlayer1Coords = newX === _data.heroes.player1.x && newY === _data.heroes.player1.y;
        var newCoordsMatchPlayer2Coords = newX === _data.heroes.player2.x && newY === _data.heroes.player2.y;
    
    } while (newCoordsMatchPlayer1Coords || newCoordsMatchPlayer2Coords) // true

    _data.heroes.google.x = newX;
    _data.heroes.google.y = newY;
}

/**
 * 
 * @param max любое целое положительное число, включая которое будет генерироваться значение от 0 до этого числа 
 * @returns 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

let jumpIntervalId;

function runGoogleJump() {
    jumpIntervalId = setInterval(() => {
        changeGoogleCoords();
        _data.miss++;
        if (_data.miss === _data.settings.pointsToLose) {
            stopGoogleJump();
            _data.gameState = GAME_STATES.LOSE;
        }
        observer();
    }, _data.settings.googleJumpInterval)
}

function stopGoogleJump() {
    clearInterval(jumpIntervalId); 
}

// setter / mutation / command
export function addEventListener(subscriber) {
    observer = subscriber
}

export function setGridSize(x, y) {
    if (x < 1) throw new Error('Incorrect X grid size settings');
    if (y < 1) throw new Error('Incorrect Y grid size settings');

    _data.settings.gridSize.x = x;
    _data.settings.gridSize.y = y;
}

export function start() {
    
    if (_data.gameState !== GAME_STATES.SETTINGS) {
       
        throw new Error('Game cannot be started from state:' + _data.gameState);
    }

    _data.gameState = GAME_STATES.IN_PROGRESS;
    runGoogleJump();
    observer();
}

export function playAgain() {
    _data.miss = 0;
    _data.catch = 0;
    _data.gameState = GAME_STATES.SETTINGS;
    observer()
}


function catchGoogle(playerNumber) {
    stopGoogleJump();

    _data.catch[`player${playerNumber}`]++;

    if (_data.catch[`player${playerNumber}`] === _data.settings.pointsToWin) {
        _data.gameState = GAME_STATES.WIN;
    } else {
        changeGoogleCoords();
        runGoogleJump();
    }

    observer();
}

function chekIsCoordsInValidRange(coords) {

    const xIsCorrect = coords.x >= 0 && coords.x < _data.settings.gridSize.x;
    const yIsCorrect = coords.y >= 0 && coords.y < _data.settings.gridSize.y;
    
    return xIsCorrect && yIsCorrect
}

function coordsMatchWithOtherPlayer(coords) {
    const player1IsInThisCell = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y;
    const player2IsInThisCell = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y;

    return player1IsInThisCell || player2IsInThisCell
}

function coordsMatchWithGoogle(coords) {
    const googleIsInThisCell = coords.x === _data.heroes.google.x && coords.y === _data.heroes.google.y;

    return googleIsInThisCell;
}

export function movePlayer(playerNumber, direction) {
    validatePlayerNumberOrThrow(playerNumber)
    
    
   const newCoords = {..._data.heroes[`player${playerNumber}`]};
   switch (direction) {
        case MOVING_DIRECTIONS.LEFT: {
            newCoords.x--;
            break;
        }
        case MOVING_DIRECTIONS.RIGHT: {
            newCoords.x++;
            break;
        }
        case MOVING_DIRECTIONS.UP: {
            newCoords.y--;
            break;
        }
        case MOVING_DIRECTIONS.DOWN: {
            newCoords.y++;
            break;
        }
   }

   const isValid = chekIsCoordsInValidRange(newCoords);
   if (!isValid) return;

   const isMatchWithOtherPlayer = coordsMatchWithOtherPlayer(newCoords);
   if (isMatchWithOtherPlayer) {
    catchGoogle(playerNumber)
   };

   _data.heroes[`player${playerNumber}`] = newCoords;


    observer();
}

//getter/selector/query

/**
 * 
 * @returns количество баллов, заработанных пользователем
 */
export function getCatchCount() {
    return _data.catch;
}

export function getMissCount() {
    return _data.miss;
}

export function getGoogleCoords() {
    return {
        ..._data.heroes.google
    };

}

export function getPlayer1Coords() {
    return {
        ..._data.heroes.player1
    };

}

export function getPlayer2Coords() {
    return {
        ..._data.heroes.player2
    };

}

export function getGridSizeSettings() {
    return {
        ..._data.settings.gridSize
    };
}

export function getGameState() {
    return _data.gameState
}

export function validatePlayerNumberOrThrow(playerNumber) {
    if (![1,2].some(number => number === playerNumber)) {
        throw new Error ('Incorrect player number')
    }
}
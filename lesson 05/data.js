export const GAME_STATES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose'
}

const _data = {
    gameState: GAME_STATES.SETTINGS,
    settings: {
        gridSize: {
            x: 4,
            y: 4,
        },
        pointsToWin: 5,
        pointsToLose: 5
    },
    catch: 0,
    miss: 0,
    time: new Date(),
    heroes: {
        google: {
            x: 0,
            y: 0
        },
        player1: {},
        player2: {}
    }
}


let observer = () => { }

function changeGoogleCoords() {
    // todo do while prevent generation the same coordinates
    _data.heroes.google.x = getRandomInt(_data.settings.gridSize.x - 1);
    _data.heroes.google.y = getRandomInt(_data.settings.gridSize.y - 1);

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
    }, 3000)
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
}

export function start() {
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



//getter/selector/query/adapter
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

export function catchGoogle() {
     stopGoogleJump();

     if (_data.catch === _data.settings.pointsToWin) {
        return;
     } 
    
    _data.catch++;

    if (_data.catch === _data.settings.pointsToWin) {
        _data.gameState =GAME_STATES.WIN;
    } else {
        changeGoogleCoords();

        runGoogleJump();
    }

    observer();
}

export function getGoogleCoords() {
    return {
        ..._data.heroes.google
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
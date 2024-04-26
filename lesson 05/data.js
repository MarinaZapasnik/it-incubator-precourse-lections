const _data = {
    settings: {
        gridSize: {
            x: 4,
            y: 4
        }
    },
    catch: 0,
    time: new Date(),
    heroes: {
        google: {},
        player1: {},
        player2: {}
    }
}

window._data = _data;

// setter / mutation / command
export function setGridSize(x, y) {
    if (x < 1) throw new Error('Incorrect X grid size settings');
    if (y < 1) throw new Error('Incorrect Y grid size settings');

    _data.settings.gridSize.x = x;
    _data.settings.gridSize.y = y;
}



// getter/selector/query/adapter

export function getCatchCount() {
    return _data.catch;
}

export function getGoogleCoords() {
    return {
        ..._data.heroes.google
    };
}

export function getGridSizeSettings() {
    return {
        ..._data.settings.gridSize
    }
}
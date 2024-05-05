import { GameGrid } from './components/Game/GameGrid/game-grid.component.js';
import { Lose } from './components/Game/Lose/lose.components.js';
import { ResultPanel } from './components/Game/ResultPanel/result-panel.component.js';
import { Settings } from './components/Game/Settings/settings.components.js';
import { Win } from './components/Game/Win/win.components.js';
import { addEventListener, start, getGameState, GAME_STATES } from './data.js';






export function rerender() {
    const rootElement = document.getElementById('root');

    rootElement.innerHTML = "";

    const gameState = getGameState();

    switch (gameState) {
        case GAME_STATES.IN_PROGRESS:
            rootElement.append(ResultPanel(), GameGrid());
            break;
        case GAME_STATES.SETTINGS:
            rootElement.append(Settings());
            break;
        case GAME_STATES.WIN:
            rootElement.append(Win());
            break;
        case GAME_STATES.LOSE:
            rootElement.append(Lose());
            break;
        default:
            throw new Error('Not supported state');
    }


}

rerender();

//start();

addEventListener(rerender);







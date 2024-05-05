import { GAME_STATES, MOVING_DIRECTIONS, getGameState, movePlayer } from "../../data.js";
import { GameGrid } from "./GameGrid/game-grid.component.js";
import { Lose } from "./Lose/lose.components.js";
import { ResultPanel } from "./ResultPanel/result-panel.component.js";
import { Settings } from "./Settings/settings.components.js";
import { Win } from "./Win/win.components.js";

window.addEventListener('keyup', (event) => {
    switch(event.code) {
        case 'ArrowLeft': {
            movePlayer(1, MOVING_DIRECTIONS.LEFT);
            break;
        }
        case 'ArrowRight': {
            movePlayer(1, MOVING_DIRECTIONS.RIGHT)
            break;
        }
        case 'ArrowUp': {
            movePlayer(1,MOVING_DIRECTIONS.UP)
            break;
        }
        case 'ArrowDown': {
            movePlayer(1,MOVING_DIRECTIONS.DOWN)
            break;
        }
    }
})

export function Game() {

    const element = document.createElement('div');

    const gameState = getGameState();

    switch (gameState) {
        case GAME_STATES.IN_PROGRESS:
            element.append(ResultPanel(), GameGrid());
            break;
        case GAME_STATES.SETTINGS:
            element.append(Settings());
            break;
        case GAME_STATES.WIN:
            element.append(Win());
            break;
        case GAME_STATES.LOSE:
            element.append(Lose());
            break;
        default:
            throw new Error('Not supported state');
    }
return element

}
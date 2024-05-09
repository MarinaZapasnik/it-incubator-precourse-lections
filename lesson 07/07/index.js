import { Game } from "./components/Game/game.component.js";
import { EVENTS, GAME_STATES, getGameState, subscribe, unsubscribeAll, } from "./data.js";

export function rerender(e) {
  if (e.name === EVENTS.STATUS_CHANGED) {
    console.log("RERENDER");
    const rootElement = document.getElementById("root");

    rootElement.innerHTML = "";

    const game = Game();

    if (getGameState() === GAME_STATES.SETTINGS) {
      unsubscribeAll();
      subscribe(rerender);
      subscribe(subscriber);
    }

    rootElement.append(game);
  }
}

const subscriber = (e) => {
  console.log(e)
};

rerender({ name: EVENTS.STATUS_CHANGED });

// const subject = document.querySelector('#clickme');

// subject.addEventListener("click", () => { console.log(1) });
// subject.addEventListener("click", () => { console.log(2) });







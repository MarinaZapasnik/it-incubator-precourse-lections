//render data:

import { renderPlayList } from "./renderPlayList.module.js";

//renderAllPlayLists(playLists)

export function renderAllPlayLists(allPlayLists) {

    for (let i = 0; i < allPlayLists.length; i++) {
        
        renderPlayList(allPlayLists[i]);

    }

}


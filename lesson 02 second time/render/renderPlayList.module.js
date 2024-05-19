import { renderPlayListHeader } from "./renderPlayListHeader.module.js";
import { renderPlayListTracks } from "./renderPlayListTracks.module.js";


export function renderPlayList(anyPlayList) {

    renderPlayListHeader(anyPlayList.playListInfo);
    renderPlayListTracks(anyPlayList.tracks);
}




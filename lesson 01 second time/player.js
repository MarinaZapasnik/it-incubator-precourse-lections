const playlist = {

    playlistInfo: {
        title: 'Hip-Hop hits',
        coverImg: './cover.avif'
    },

    tracks: [
        {
            trackId: '01',
            artistName: 'Eminem',
            trackTitle: 'Rap God',
            trackFileUrl: './eminem_-_rap_god_(muztune.me).mp3',
            trackCoverImgUrl: './eminem.jpg'
        },
        {
            trackId: '02',
            artistName: '50 cent',
            trackTitle: 'in Da Club',
            trackFileUrl: './50cent_-_in_da_club_(muztune.me).mp3',
            trackCoverImgUrl: './50cent.jpg'
        }
    ]

}

// const playlistTitleElement = document.createElement('h1');
// playlistTitleElement.innerText = playlist.playlistInfo.title;
// document.body.append(playlistTitleElement);

// const playlistCoverImgElement = document.createElement('img');
// playlistCoverImgElement.src = playlist.playlistInfo.coverImg;
// playlistCoverImgElement.style.height = '100px';
// playlistCoverImgElement.style.width = '100px';
// document.body.append(playlistCoverImgElement);

// const trackListElement = document.createElement('ul');
// for (let i = 0; i < playlist.tracks.length; i++) {


//     const trackElement = document.createElement('li');
//     const trackCoverElement = document.createElement('img');
//     trackCoverElement.src = playlist.tracks[i].trackCoverImgUrl;
//     trackCoverElement.style.width = '50px';
//     trackCoverElement.style.height = '50px';
//     const trackFileElement = document.createElement('audio');
//     trackFileElement.controls = true;
//     trackFileElement.src = playlist.tracks[i].trackFileUrl;
//     trackElement.append(
//         trackCoverElement,
//         playlist.tracks[i].artistName + ' ',
//         '"' + playlist.tracks[i].trackTitle + '" ',
//         trackFileElement
//     )
//     trackListElement.append(trackElement);
// }

// document.body.append(trackListElement)


function renderPlayList(anyPlayList) {
    renderPlayListHeader(anyPlayList.playlistInfo)
    renderTracksList(anyPlayList.tracks)
}
function renderPlayListHeader(anyPlayListInfo) {

    const playlistTitleElement = document.createElement('h1');
    playlistTitleElement.innerText = anyPlayListInfo.title;
    document.body.append(playlistTitleElement);

    const playlistCoverImgElement = document.createElement('img');
    playlistCoverImgElement.src = anyPlayListInfo.coverImg;
    playlistCoverImgElement.style.height = '100px';
    playlistCoverImgElement.style.width = '100px';
    document.body.append(playlistCoverImgElement);

}

function renderTracksList(anyTtracks) {
    
    const trackListElement = document.createElement('ul');
    for (let i = 0; i < anyTtracks.length; i++) {

        
       const trackElement = renderTrack(anyTtracks[i]);

        // const trackElement = document.createElement('li');
        // const trackCoverElement = document.createElement('img');
        // trackCoverElement.src = anyTtracks[i].trackCoverImgUrl;
        // trackCoverElement.style.width = '50px';
        // trackCoverElement.style.height = '50px';
        // const trackFileElement = document.createElement('audio');
        // trackFileElement.controls = true;
        // trackFileElement.src = anyTtracks[i].trackFileUrl;
        // trackElement.append(
        //     trackCoverElement,
        //     anyTtracks[i].artistName + ' ',
        //     '"' + anyTtracks[i].trackTitle + '" ',
        //     trackFileElement
        // )
        trackListElement.append(trackElement);
    }

    document.body.append(trackListElement);

}

function renderTrack(anyTrack) {

    const trackElement = document.createElement('li');
    const trackCoverElement = document.createElement('img');
    trackCoverElement.src = anyTrack.trackCoverImgUrl;
    trackCoverElement.style.width = '50px';
    trackCoverElement.style.height = '50px';
    const trackFileElement = document.createElement('audio');
    trackFileElement.controls = true;
    trackFileElement.src = anyTrack.trackFileUrl;
    trackElement.append(
        trackCoverElement,
        anyTrack.artistName + ': ',
        '"' + anyTrack.trackTitle + '" ',
        trackFileElement
    )
    return trackElement;
}

renderPlayList(playlist);





const playList = {
    playListInfo: {
        title: 'Hip-hop hits',
        coverImgUrl: './cover.avif'

    },
    tracks: [
        {
            trackId: '01',
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackFileUrl: './eminem_-_rap_god_(muztune.me).mp3',
            trackCoverImgUrl: './eminem.jpg'
        },
        {
            trackId: '02',
            trackTitle: 'In Da Club',
            artistName: '50cent',
            trackFileUrl: './50cent_-_in_da_club_(muztune.me).mp3',
            trackCoverImgUrl: './50cent.jpg'

        },
    ]
}


// const playListTitleElement = document.createElement('h1');
// playListTitleElement.innerText = playList.playListInfo.title;
// document.body.append(playListTitleElement);

// const playListCoverElement = document.createElement('img');
// playListCoverElement.src = playList.playListInfo.coverImgUrl;
// playListCoverElement.style.width = '150px';
// playListCoverElement.style.height = '150px';
// document.body.append(playListCoverElement);

// const trackListElement = document.createElement('ul');



// for (let i = 0; i < playList.tracks.length; i ++) {
//     const trackElement = document.createElement('li');

//     const trackCoverElement = document.createElement('img');
//     trackCoverElement.src = playList.tracks[i].trackCoverImgUrl;
//     trackCoverElement.style.width = '50px';
//     trackCoverElement.style.height = '50px';

//     trackElement.append(trackCoverElement);
//     trackElement.append(playList.tracks[i].artistName + ': ' + playList.tracks[i].trackTitle);
//     trackListElement.append(trackElement);


// }
// document.body.append(trackListElement);

function renderPlayList(anyPlayList){
    renderPlayListHeader(playList.playListInfo)
    renderTracksList(playList.tracks)
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement('h1');
    playListTitleElement.innerText = anyPlayListInfo.title;
    document.body.append(playListTitleElement);
    
    const playListCoverElement = document.createElement('img');
    playListCoverElement.src = anyPlayListInfo.coverImgUrl;
    playListCoverElement.style.width = '150px';
    playListCoverElement.style.height = '150px';
    document.body.append(playListCoverElement);
}
    
     


function renderTracksList(anyPlayListTracks) {
    const trackListElement = document.createElement('ul');
    
    for (let i = 0; i < anyPlayListTracks.length; i ++) {
        const trackElement = document.createElement('li');
    
        const trackCoverElement = document.createElement('img');
        trackCoverElement.src = anyPlayListTracks[i].trackCoverImgUrl;
        trackCoverElement.style.width = '50px';
        trackCoverElement.style.height = '50px';
    
        trackElement.append(trackCoverElement);
        trackElement.append(anyPlayListTracks[i].artistName + ': ' + anyPlayListTracks[i].trackTitle);
        trackListElement.append(trackElement);
    
    
    }
    document.body.append(trackListElement);
    
}

renderPlayList(playList)





















const playList = {
    
    playListInfo: {
        title: 'Hip-hop hits',
        coverImgUrl: './cover.avif',
        totalInfo: {
            totalTrackCount: 4,
            totalTrackDurationInSec: 733,
        }
    },
    tracks: [
        {
            trackId: '01',
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackCoverImgUrl: './eminem.jpg',
            trackFileUrl: './eminem_-_rap_god_(muztune.me).mp3',
        },
        {
            trackId: '02',
            trackTitle: 'In Da Club',
            artistName: '50cent',
            trackCoverImgUrl: './50cent.jpg',
            trackFileUrl: './50cent_-_in_da_club_(muztune.me).mp3',
        },
            ],
}

// const playListTitleElement = document.createElement('h1');
// playListTitleElement.innerText = playList.playListInfo.title;
// document.body.append(playListTitleElement);



function renderPlayList(anyPlayList) {

    renderPlayListHeader(anyPlayList.playListInfo)

    renderTracksList(anyPlayList.tracks)

}
function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement('h1');
    playListTitleElement.innerText = anyPlayListInfo.title;
    document.body.append(playListTitleElement);

    const playListCoverElement = document.createElement('img');
    playListCoverElement.style.width = '50px';
    playListCoverElement.style.height = '50px'
    playListCoverElement.src = anyPlayListInfo.coverImgUrl;
    document.body.append(playListCoverElement);
}

function renderTracksList(anyTracks) {
const trackListElement = document.createElement("ul");
    for (let i = 0; i < anyTracks.length; i++) {
       
   
    }
        document.body.append(trackListElement);
}

function createTrack (anyTrack) {
    
        const trackElement = document.createElement('li');
        const trackCoverElement = document.createElement('img');
        trackCoverElement.style.height = '50px';
        trackCoverElement.style.width = '50px'
        trackCoverElement.src = anyTrack.trackCoverImgUrl;
    
        trackElement.append(trackCoverElement);
        trackElement.append(anyTracsList.artistName + ": " + anyTracsList.trackTitle)
    
        trackListElement.append(trackElement);
    }

renderPlayList(playList)







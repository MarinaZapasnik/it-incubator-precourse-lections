const playList = {
    
    playListInfo: {
        title: 'Hip-hop hits',
        coverImgUrl: './cover.avif',
        
    },
    tracks: [
        {
            trackId: '01',
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackCoverImgUrl: "C:\Users\iZiPC.by\it-incubator precourse lections\lesson 01\eminem.jpg",
            trackFileUrl: './eminem_-_rap_god_(muztune.me).mp3',
        },
        {
            trackId: '02',
            trackTitle: 'In Da Club',
            artistName: '50cent',
            trackCoverImgUrl: "C:\Users\iZiPC.by\it-incubator precourse lections\lesson 01\50cent.jpg",
            trackFileUrl: './50cent_-_in_da_club_(muztune.me).mp3',
        }
            ],
}

const playListTitleElement = document.createElement('h1');
playListTitleElement.innerText = playList.playListInfo.title;
document.body.append(playListTitleElement);

const playListCoverElement = document.createElement('img');
playListCoverElement.src = playList.playListInfo.coverImgUrl;
playListCoverElement.style.width = '150px';
playListCoverElement.style.height = '150px';
document.body.append(playListCoverElement);

const trackListElement = document.createElement('ul');

for (let i = 0; playList.tracks.length; i++) {
    const trackElement = document.createElement('li');

    const trackCoverElement = document.createElement('img');
    trackCoverElement.src = playList.tracks[i].trackCoverImgUrl;
    
    trackElement.append(trackCoverElement);
    trackElement.append(playList.tracks[i].artistName + ': ' +  playList.tracks[i].trackTitle);
    trackListElement.append(trackElement);

   
}
document.body.append(trackListElement);




















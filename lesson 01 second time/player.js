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

const playlistTitleElement = document.createElement('h1');
playlistTitleElement.innerText = playlist.playlistInfo.title;
document.body.append(playlistTitleElement);

const playlistCoverImgElement = document.createElement('img');
playlistCoverImgElement.src = playlist.playlistInfo.coverImg;
playlistCoverImgElement.style.height = '100px';
playlistCoverImgElement.style.width = '100px';
document.body.append(playlistCoverImgElement);

const trackListElement = document.createElement('ul');
for (let i = 0; i < playlist.tracks.length; i++) {

    
    const trackElement = document.createElement('li');
    const trackCoverelement = document.createElement('img');
    trackCoverelement.src = playlist.tracks[i].trackCoverImgUrl;
    const trackFileElement = document.createElement('audio');
    trackFileElement.src = playlist.tracks[i].trackFileUrl
}




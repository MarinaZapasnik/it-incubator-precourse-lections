//data:
const playLists = [
    {
        playListId: "1",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "2",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "3",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
] 



//render data:
renderAllPlayLists(playLists)

function renderAllPlayLists(allPlayLists) {
    for (let i = 0; i < allPlayLists.length; i++) {
        renderPlayList(allPlayLists[i])
    }
}


function renderPlayList(anyPlayList) {
    renderPlayListHeader(anyPlayList.playListInfo)
    renderPlayListTracks(anyPlayList.tracks)
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListCoverElement = document.createElement('img')
    playListCoverElement.src = anyPlayListInfo.coverImageUrl
    playListCoverElement.style.width = '150px'
    document.body.append(playListCoverElement)
    
    const playListHeaderTitle = document.createElement('h2');
    playListHeaderTitle.append(anyPlayListInfo.title);
    document.body.append(playListHeaderTitle)
}

function renderPlayListTracks(anyTracks) {
    const tracksListElement = document.createElement('ul');
    for (let i = 0; i < anyTracks.length; i++) {
        const trackElement = renderTrack(anyTracks[i])
        tracksListElement.append(trackElement)
    }
    document.body.append(tracksListElement)
}

function renderTrack(anyTrack) {
    const trackElement = document.createElement('li')
    const coverElement = document.createElement('img')

    coverElement.style.width = '50px'
    coverElement.src = anyTrack.trackCoverImageUrl

    const audio = document.createElement('audio')
    audio.src = anyTrack.trackFileUrl
    audio.controls = true

    trackElement.append(
        coverElement,
        audio,
        anyTrack.artistName + ': ',
        anyTrack.trackTitle
    )

    return trackElement
}

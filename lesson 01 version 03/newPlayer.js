const data = {

    playlists : [
        {
            playListInfo: {
                id: '1-0',
                title: 'Hip-Hop Hits' ,
                coverImgUrl: './cover.avif' ,
                trackCount: 4
            },
            tracks: [
                {
                    trackId: '1',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackCoverImgUrl: './eminem.jpg',
                    trackFileImgUrl: './eminem_-_rap_god_(muztune.me).mp3',
                },
                {
                    trackId: '2',
                    artistName: '50 cent',
                    trackTitle: 'In Da Club',
                    isHot: true,
                    trackCoverImgUrl: './50cent.jpg',
                    trackFileImgUrl: './50cent_-_in_da_club_(muztune.me).mp3',
                },
                {
                    trackId: '2',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackCoverImgUrl: './eminem.jpg',
                    trackFileImgUrl: './eminem_-_rap_god_(muztune.me).mp3',
                },
                {
                    trackId: '3',
                    artistName: '50 cent',
                    trackTitle: 'In Da Club',
                    isHot: true,
                    trackCoverImgUrl: './50cent.jpg',
                    trackFileImgUrl: './50cent_-_in_da_club_(muztune.me).mp3',
                }
            ]

        },
        {
            playListInfo: {
                id: '1-1',
                title: 'Rap Hits 1990s' ,
                coverImgUrl: './cover.avif' ,
                trackCount: 4
            },
            tracks: [
                {
                    trackId: '5',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackCoverImgUrl: './eminem.jpg',
                    trackFileImgUrl: './eminem_-_rap_god_(muztune.me).mp3',
                },
                {
                    trackId: '6',
                    artistName: '50 cent',
                    trackTitle: 'In Da Club',
                    isHot: true,
                    trackCoverImgUrl: './50cent.jpg',
                    trackFileImgUrl: './50cent_-_in_da_club_(muztune.me).mp3',
                },
                {
                    trackId: '7',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackCoverImgUrl: './eminem.jpg',
                    trackFileImgUrl: './eminem_-_rap_god_(muztune.me).mp3',
                },
                {
                    trackId: '8',
                    artistName: '50 cent',
                    trackTitle: 'In Da Club',
                    isHot: true,
                    trackCoverImgUrl: './50cent.jpg',
                    trackFileImgUrl: './50cent_-_in_da_club_(muztune.me).mp3',
                }

            ]


        }


    ]

}



function App() {
    const container = document.createElement('div');
    container.classList.add('App');

    container.append(
        Header(),
        Main()
    )

    return container;
}

function Header() {

    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const img = document.createElement('img');
    img.src = './logo.png';
    img.style.height = '30px';

    const logo = document.createElement('div');
    logo.innerText = 'InPlayer';
    logo.classList.add('logo-name');
    
    headerContainer.append(
        img,
        logo
    );

    header.append(headerContainer);

    return header
}

function Main () {

    const container = document.createElement('main');

    container.append(

        AddPlayListPanel(),
        PlayLists()

    )

    return container

}

function AddPlayListPanel() {

    const container = document.createElement('div');
    container.classList.add('add-playlist-panel');

    const appHeader = document.createElement('h1');
    appHeader.innerHTML = 'My playlists';
    appHeader.classList.add('title');

    const addButton = document.createElement('button');
    addButton.innerText = 'Add Playlist';
    addButton.classList.add('buttton');

    container.append(
       appHeader,
       addButton 
    )

    return container;

}

function PlayLists () {

    const container = document.createElement('div');
    container.classList.add('playlists');

    for (let i = 0; data.playlists.length; i++) {

        container.append(Playlist(data.playlists[i]))
    }

    return container;


}

function Playlist (playlist) {

    

}

const root = document.getElementById('root');
root.append(
    App()
    
);

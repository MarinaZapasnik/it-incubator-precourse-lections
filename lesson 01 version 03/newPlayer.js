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

    const Header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const img = document.createElement('img');
    img.src = './cover.avif';
}

const root = document.getElementById('root');
root.append(
    App()
    
);

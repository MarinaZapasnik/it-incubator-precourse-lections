export function renderPlayListHeader(anyPlayListInfo) {
    const playListCoverElement = document.createElement('img')
    playListCoverElement.src = anyPlayListInfo.coverImageUrl
    playListCoverElement.style.width = '150px'
    document.body.append(playListCoverElement)
    
    const playListHeaderTitle = document.createElement('h2');
    playListHeaderTitle.append(anyPlayListInfo.title);
    document.body.append(playListHeaderTitle)
}
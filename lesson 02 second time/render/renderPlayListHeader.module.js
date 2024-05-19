export function renderPlayListHeader(anyPlayListInfo) {

    const playListHeaderTitleElement = document.createElement('h2');
    playListHeaderTitleElement.append(anyPlayListInfo.title);
    document.body.append(playListHeaderTitleElement);

    const playListHeaderCoverElement = document.createElement('img');
    playListHeaderCoverElement.src = anyPlayListInfo.coverImageUrl;
    playListHeaderCoverElement.style.height = '100px';
    document.body.append(playListHeaderCoverElement);



}
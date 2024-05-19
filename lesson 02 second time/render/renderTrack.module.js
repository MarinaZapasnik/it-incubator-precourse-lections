export function renderTrack(anyTrack) {

    const trackElement = document.createElement('li');
    trackElement.style.listStyle = 'none';

    const trackCoverImageUrlElement = document.createElement('img');
    trackCoverImageUrlElement.src = anyTrack.trackCoverImageUrl;
    trackCoverImageUrlElement.style.height = '100px';

    const trackFileUrlElement = document.createElement('audio');
    trackFileUrlElement.controls = true;
    trackFileUrlElement.src = anyTrack.trackFileUrl;

    const isHotElement = document.createElement('img');
    
    anyTrack.isHot? isHotElement.src = './fire_hot.jpg': isHotElement.src = '';
    isHotElement.style.height = '30px';
    
    trackElement.append(
        trackCoverImageUrlElement,
        anyTrack.artistName + ': ',
        '"' + anyTrack.trackTitle + '" ',
        trackFileUrlElement,
        isHotElement
        );

    return trackElement;

}


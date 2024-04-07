export function renderTrack(anyTrack) {
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
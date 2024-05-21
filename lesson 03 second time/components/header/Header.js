export function Header(someTitle) {

    const titleElement = document.createElement('h2');
    titleElement.innerText = someTitle;
    return titleElement;

}
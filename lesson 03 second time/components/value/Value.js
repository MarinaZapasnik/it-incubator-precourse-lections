export function Value(someValue) {

    const valueElement = document.createElement('div');
    valueElement.innerText = someValue;
    return valueElement;

}
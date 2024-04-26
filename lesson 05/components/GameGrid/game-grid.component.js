import { getGridSizeSettings, setGridSize } from "../../data.js";


export function GameGrid() {
    const gridElement = document.createElement("table");

    const gridSize = getGridSizeSettings();

    for (let y = 0; y < gridSize.y; y++) {
            const row = document.createElement('tr');

            for (let x = 0; x < gridSize.x; x++) {
                const cell = document.createElement('td');
                cell.append(`${x}, ${y}`);
                row.append(cell);
            }

            gridElement.append(row)   
    }
    

    return gridElement;
}
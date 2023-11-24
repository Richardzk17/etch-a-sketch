function createGrid(numGrid) {

    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${numGrid}, 1fr)`;

    for (let i = 0; i < numGrid * numGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        container.appendChild(gridItem);

        const item = document.querySelectorAll('.grid-item');
        item.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.background = 'black';
            });
        });

    }
}

createGrid(16);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let square = prompt('Enter # of squares per side');
    container.replaceChildren();
    createGrid(square);
});

function reset() {
    let numGrid = +prompt('Enter # of squares per side', 16);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(numGrid)
}

let resetButton = document.querySelector(".resetButton");
resetButton.addEventListener('click', reset);











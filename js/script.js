const containerEl = document.querySelector('.container');

for (let i = 0; i < 20; i++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container')

colorsGenerator();

function colorsGenerator() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColors();
        colorContainerEl.style.backgroundColor = '#' + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    })
}



function randomColors() {
    const chars = '0123456789abcdef';
    const colorCodeLength = 6;
    let colorCode = "";

    for (let j = 0; j < colorCodeLength; j++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        // Substring takes a string from chars. (Index starting position, ending position);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

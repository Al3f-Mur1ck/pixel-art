// declarando variaveis do html
const colorPalette = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');

//color palette
function palette() {
    const colors = ['black', 'red', 'blue', 'yellow'];
    for (let i = 0; i < colors.length; i++) {
        const divColors = document.createElement('div');
        divColors.className = 'color';
        // select black 1st
        if (colors[i] === 'black') {
            divColors.classList.add('selected');
        }
        // colorindo
        divColors.style.background = colors[i];
        colorPalette.appendChild(divColors);
    }
}
palette();

// montando Pixel Board
function pixelBoards() {

    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'pixel');
        pixelBoard.appendChild(div);
    }
}
pixelBoards();

// select colors

function selectedColors(event) {
    const selectColor = document.querySelector('.selected');
    selectColor.classList.remove('selected');
    event.target.classList.add('selected');
}

colorPalette.addEventListener('click', selectedColors);

// colorir pixel
function pixelColor(event) {
    const selected = document.querySelector('.selected').style.backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = selected;
}

pixelBoard.addEventListener('click', pixelColor);

// clear button
let divBtn = document.getElementById('botao');
let btn = document.createElement('button');
btn.type = 'button';
btn.innerText = 'Limpar';
btn.setAttribute('id', 'clear-board');
divBtn.appendChild(btn);


function clearBtn() {
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white';
    }
}

btn.addEventListener('click', clearBtn);
const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.reset');
let trigger = false;
const sizeSlider = document.querySelector('#size');


function setPixelListeners() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            if (trigger) {
                pixel.style.background = 'grey';
            }
        });
        pixel.addEventListener('mousedown', (event) => {
            pixel.style.background = 'grey';
        });
    });
}

function resetGrid () {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.background='white';
    })
}

function changeSizeGrid () {
    grid.innerHTML = '';
    const size = document.querySelector('#size').value;
    for (let idx_row = 0; idx_row < size; idx_row++) {
        const pixel_row = document.createElement('div');
        pixel_row.classList.add('pixel_row');
        grid.appendChild(pixel_row); 
        for (let idx_col = 0; idx_col < size; idx_col++) {
            const pixel_col = document.createElement('div');
            pixel_col.classList.add('pixel');
            pixel_row.appendChild(pixel_col); 
        }
    }
    setPixelListeners();
}

// initialize
changeSizeGrid();

// draw
document.addEventListener('mousedown', function(){
    trigger = true;
});
document.addEventListener('mouseup', function(){
    trigger = false;
});

// reset color
resetBtn.addEventListener('click', resetGrid);

// change size
sizeSlider.addEventListener('input',()=> {
    changeSizeGrid();
});



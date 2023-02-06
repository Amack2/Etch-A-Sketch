const mainContainer = document.querySelector('#gridContainer');
const colorBtn = document.querySelector('#colorBtn')
const resetBtn = document.querySelector('#resetBtn');


function promptGridSize() {
    y = prompt('Enter a number below 100');
    if (y <= 100) {
        x = y;
        let a = x * y;
        return a;
    } else {
        alert("Look, you're going to crash your computer. Make sure the number is below 100.")
        promptGridSize();
    }
}
let a = promptGridSize();

function removeSquares() {
    const parent = document.getElementById("gridContainer")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
};

function reset1() {
    removeSquares();
    a = promptGridSize();
    createSquares();
}


resetBtn.addEventListener('click', function (e) {
    console.log('click');
    reset1();



});

count = 1;
function createSquares() {
    for (let i = 0; i < a; i++) {
        count = count + 1;
        const square = document.createElement('div');
        square.classList.add('square');
        mainContainer.appendChild(square);
        mainContainer.style.gridTemplateColumns = "repeat(" + y + ", 1fr)";
        mainContainer.style.gridTemplateRows = "repeat(" + y + ", 1fr)";
        let mouseOvers = 0;
        square.addEventListener('mouseover', function (e) {
            if (colorBtn.innerHTML === "Colors on." && mouseOvers < 10) {
                square.classList.remove("originalHovering")
                square.classList.remove(`hovering${mouseOvers}`)
                mouseOvers = mouseOvers + 1;
                square.classList.add(`hovering${mouseOvers}`);
            } else {
                square.classList.remove(`hovering${mouseOvers}`)
                mouseOvers = 0;
                square.classList.add("originalHovering")
            }
        });
    };
};


//the mouse over event seems to be having some effect ont he colorbtntog event which togs it to colours.

createSquares();

colorBtn.addEventListener("click", function (e) {
    colorBtnTog();
});

function colorBtnTog() {
    // var tog = document.getElementById("colorBtn");
    if (colorBtn.innerHTML == "Colors off.") {
        colorBtn.innerHTML = "Colors on.";
    } else {
        colorBtn.innerHTML = "Colors off.";
    };
}




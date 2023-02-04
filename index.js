const mainContainer = document.querySelector('#gridContainer');
const resetBtn = document.querySelector('#resetBtn');
count = 1;


function promptGridSize() {
    y = prompt('Enter a number below 100');
    if (y <= 100) {
        x = y;
        let a = x * y;
        return a;
    } else {
        promptGridSize();
    }
}


let a = promptGridSize();

console.log(a);
//max is 35x28

function createSquares() {


    for (let i = 0; i < a; i++) {
        count = count + 1;
        const square = document.createElement('div');
        square.classList.add('square');
        mainContainer.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            square.classList.add('hovering');
        });

        mainContainer.style.gridTemplateColumns = "repeat(" + y + ", 1fr)";
        mainContainer.style.gridTemplateRows = "repeat(" + y + ", 1fr)";

    };

};
createSquares();

function removeSquares() {
    const parent = document.getElementById("gridContainer")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
};

resetBtn.addEventListener('click', function (e) {
    console.log('click');
    removeSquares();
    a = promptGridSize();
    createSquares();


});



//const squares = document.querySelectorAll('.square');
//squares.forEach(square)

//square.classList.add('hovering');
//setTimeout(function () {



//})

//}


//)











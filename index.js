const mainContainer = document.querySelector('#etchASketchMainContainer');
const resetBtn = document.querySelector('#resetBtn');
count = 1;


function promptGridSize() {
    y = prompt('what is y');
    x = prompt('what is x');
    let a = x * y;
    return a;
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
    };

};
createSquares();

function removeSquares() {
    const parent = document.getElementById("etchASketchMainContainer")
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











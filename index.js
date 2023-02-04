const mainContainer = document.querySelector('#gridContainer');
const colorBtn = document.querySelector('#colorBtn')
const resetBtn = document.querySelector('#resetBtn');
clicked = "no colours";
count = 1;


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

colorBtn.addEventListener("click", colorScript);

function colorScript() {
    console.log("click");
    clicked = "colours";


};


let a = promptGridSize();

console.log(a);
//max is 35x28

function createSquares() {


    for (let i = 0; i < a; i++) {
        count = count + 1;
        const square = document.createElement('div');
        square.classList.add('square');
        mainContainer.appendChild(square);
        if (clicked = "colours") {
            let mouseOvers = 0;
            square.addEventListener('mouseover', function (e) {
                if (mouseOvers < 10) {
                    square.classList.remove("originalHovering")
                    square.classList.remove(`hovering${mouseOvers}`)
                    mouseOvers = mouseOvers + 1;
                    square.classList.add(`hovering${mouseOvers}`);
                }
            });
        } else {
            square.addEventListener('mouseover', function (e) {
                square.classList.add("originalHovering")
            });
        }
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











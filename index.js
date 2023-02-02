const mainContainer = document.querySelector('#etchASketchMainContainer');



y = prompt('what is y');
x = prompt('what is x');
let a = x * y;
count = 1;



function createSquares() {
    for (let i = 0; i < a; i++) {
        console.log(count);
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




//const squares = document.querySelectorAll('.square');
//squares.forEach(square)

//square.classList.add('hovering');
//setTimeout(function () {



//})

//}


//)











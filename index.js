const mainContainer = document.querySelector('#etchASketchMainContainer');
/*
if (resp)
*/


y= prompt('what is y');
x = prompt('what is x');
let a = x*y;
count = 1;



function timesToLoop() {
   for ( let i = 0; i < a; i++){
   console.log(count);
    count = count +1; 
    const square = document.createElement('div');
    square.classList.add('square');
    mainContainer.appendChild(square); 
  };
     
};

timesToLoop();






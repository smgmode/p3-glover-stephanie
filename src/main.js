//Global variables
/*
//page 1
const redbox = getElementsByClassName('eyebox');
const picone = 1;
const orangebox = getElementsByClassName('nailbox');
const pictwo = 2;
const aquabox = getElementsByClassName('lipbox');
const picthree = 3;
const bluebox = getElementsByClassName('makebox');
const picfour = 4;
*/


//page 2
const onebox = document.getElementsByClassName('number1');
const one = 1;
const twobox = document.getElementsByClassName('number2');
const two = 2;
const threebox = document.getElementsByClassName('number3');
const three = 3;
const fourbox = document.getElementsByClassName('number4');
const four = 4;

/*
//page3
const redonebox = getElementsByClassName('number-1');
const rone = 1;
const orangetwobox = getElementsByClassName('number-2');
const otwo = 2;
const aquathreebox = getElementsByClassName('number-3');
const athree = 3;
const bluefourbox = getElementsByClassName('number-4');
const bfour = 4;
*/

/*
//functionality page 1
function loopThroughFirst() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < picone * 2; i++) {
    setTimeout(changeColor, i * 1000)
  }
};

function loopThroughSecond() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < pictwo * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughThird() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < picthree * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughFourth() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < picfour * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};
*/


//functionality Page 2
function loopThroughOne() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughTwo() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughThree() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughFour() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};



/*
//funcionality Page 3
function loopThroughFive() {
  const changeColorOne = () => this.classList.toggle('red');
  for (let i = 0; i < rone * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughSix() {
  const changeColorTwo = () => this.classList.toggle('red');
  for (let i = 0; i < otwo * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughSeven() {
  const changeColorThree = () => this.classList.toggle('red');
  for (let i = 0; i < athree * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function loopThroughEight() {
  const changeColorFour = () => this.classList.toggle('red');
  for (let i = 0; i < bfour * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};
*/
/*
//event listener page 1
redbox[0].addEventListener('click',loopThroughFirst);
orangebox[0].addEventListener('click',loopThroughSecond);
aquabox[0].addEventListener('click',loopThroughThird);
bluebox[0].addEventListener('click',loopThroughFourth);
*/


//event listener page 2
onebox[0].addEventListener('click',loopThroughOne);
twobox[0].addEventListener('click',loopThroughTwo);
threebox[0].addEventListener('click',loopThroughThree);
fourbox[0].addEventListener('click',loopThroughFour);

/*
//event listener page3
redonebox[0].addEventListener('click',loopThroughFive);
orangetwobox[0].addEventListener('click',loopThroughSix);
aquathreebox[0].addEventListener('click',loopThroughSeven);
bluefourbox[0].addEventListener('click',loopThroughEight);
*/

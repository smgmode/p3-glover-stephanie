//Global variables
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const pageone = document.getElementsByClassName('page1')[0];
const pagetwo = document.getElementsByClassName('page2')[0];
const pagethree = document.getElementsByClassName('page3')[0];
const pagefour = document.getElementsByClassName('page4-row')[0];
const button = document.getElementsByTagName('button')[0];



//page 1
const redbox = document.getElementsByClassName('eyebox');
const orangebox = document.getElementsByClassName('nailbox');
const aquabox = document.getElementsByClassName('lipbox');
const bluebox = document.getElementsByClassName('makebox');


//page 2
const onebox = document.getElementsByClassName('number1');
const twobox = document.getElementsByClassName('number2');
const threebox = document.getElementsByClassName('number3');
const fourbox = document.getElementsByClassName('number4');


//page3
const redonebox = document.getElementsByClassName('number-1');
const orangetwobox = document.getElementsByClassName('number-2');
const aquathreebox = document.getElementsByClassName('number-3');
const bluefourbox = document.getElementsByClassName('number-4');

//functionality page 1
function changeLayer () {
  pagetwo.classList.remove('hide');
  pageone.classList.add('hide');
}
function loopThroughFirst() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, one * 2000);
};

function loopThroughSecond() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, two * 2000);
};

function loopThroughThird() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, three * 2000);
};

function loopThroughFourth() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, four * 2000);
};


//functionality Page 2
function changeLayertwo () {
  pagethree.classList.remove('hide');
  pagetwo.classList.add('hide');
}
function loopThroughOne() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, one * 2000);
};


function loopThroughTwo() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, two * 2000);
};


function loopThroughThree() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, three * 2000);
};


function loopThroughFour() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, four * 2000);
};



//funcionality Page 3
function changeLayerThree () {
  pagefour.classList.remove('hide');
  pagethree.classList.add('hide');
}

function loopThroughFive() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, one * 2000);
};


function loopThroughSix() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, two * 2000);
};


function loopThroughSeven() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, three * 2000);
};


function loopThroughEight() {
  const changeColor = () => this.classList.toggle('red');
  for (let i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, four * 2000);
};

//page four functionality fortune generator
const ourRandomFortuneItem =document.createElement('p');
const fortuneItemWrapper = document.getElementById('generator-results');
fortuneItemWrapper.appendChild(ourRandomFortuneItem);

const placeholderText = document.createTextNode('');
ourRandomFortuneItem.appendChild(placeholderText);

const fortuneItems = ['Beauty is in the Eyes of the Beholder', 'Keeping it 100', 'Own your beauty', 'Go to Thee Beauty Bar', 'One Two Three Four Pick Up the Make Up Off the Floor', 'Love Yourself',
'Everything Has Beauty', 'Life Life and Enjoy It', 'Beauty of Expression is so Akin to the Voice of the Sea', 'I Always Say Kindness is the Greatest Beauty That You Can Have', 'The Absence of Flaw in Beauty is Itself a Flaw'];

const loopThroughNine = function() {
  fortuneItems.sort(function(a, b){return 0.5 - Math.random()});
  const ourRandomFortuneItemFiller = document.createTextNode(fortuneItems[0]);
  ourRandomFortuneItem.appendChild(ourRandomFortuneItemFiller);
  const ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomFortuneItem.classList.add('big-and-bold');
};

button.onclick = loopThroughNine;

//event listener page 1
redbox[0].addEventListener('click',loopThroughFirst);
orangebox[0].addEventListener('click',loopThroughSecond);
aquabox[0].addEventListener('click',loopThroughThird);
bluebox[0].addEventListener('click',loopThroughFourth);



//event listener page 2
onebox[0].addEventListener('click',loopThroughOne);
twobox[0].addEventListener('click',loopThroughTwo);
threebox[0].addEventListener('click',loopThroughThree);
fourbox[0].addEventListener('click',loopThroughFour);


//event listener page3
redonebox[0].addEventListener('click',loopThroughFive);
orangetwobox[0].addEventListener('click',loopThroughSix);
aquathreebox[0].addEventListener('click',loopThroughSeven);
bluefourbox[0].addEventListener('click', loopThroughEight);

'use strict';

//Global variables
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var pageone = document.getElementsByClassName('page1')[0];
var pagetwo = document.getElementsByClassName('page2')[0];
var pagethree = document.getElementsByClassName('page3')[0];
var pagefour = document.getElementsByClassName('page4-row')[0];
var button = document.getElementsByTagName('button')[0];

//page 1
var redbox = document.getElementsByClassName('eyebox');
var orangebox = document.getElementsByClassName('nailbox');
var aquabox = document.getElementsByClassName('lipbox');
var bluebox = document.getElementsByClassName('makebox');

//page 2
var onebox = document.getElementsByClassName('number1');
var twobox = document.getElementsByClassName('number2');
var threebox = document.getElementsByClassName('number3');
var fourbox = document.getElementsByClassName('number4');

//page3
var redonebox = document.getElementsByClassName('number-1');
var orangetwobox = document.getElementsByClassName('number-2');
var aquathreebox = document.getElementsByClassName('number-3');
var bluefourbox = document.getElementsByClassName('number-4');

//functionality page 1
function changeLayer() {
  pagetwo.classList.remove('hide');
  pageone.classList.add('hide');
}
function loopThroughFirst() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('red');
  };
  for (var i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, one * 2000);
};

function loopThroughSecond() {
  var _this2 = this;

  var changeColor = function changeColor() {
    return _this2.classList.toggle('red');
  };
  for (var i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, two * 2000);
};

function loopThroughThird() {
  var _this3 = this;

  var changeColor = function changeColor() {
    return _this3.classList.toggle('red');
  };
  for (var i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, three * 2000);
};

function loopThroughFourth() {
  var _this4 = this;

  var changeColor = function changeColor() {
    return _this4.classList.toggle('red');
  };
  for (var i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayer, four * 2000);
};

//functionality Page 2
function changeLayertwo() {
  pagethree.classList.remove('hide');
  pagetwo.classList.add('hide');
}
function loopThroughOne() {
  var _this5 = this;

  var changeColor = function changeColor() {
    return _this5.classList.toggle('red');
  };
  for (var i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, one * 2000);
};

function loopThroughTwo() {
  var _this6 = this;

  var changeColor = function changeColor() {
    return _this6.classList.toggle('red');
  };
  for (var i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, two * 2000);
};

function loopThroughThree() {
  var _this7 = this;

  var changeColor = function changeColor() {
    return _this7.classList.toggle('red');
  };
  for (var i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, three * 2000);
};

function loopThroughFour() {
  var _this8 = this;

  var changeColor = function changeColor() {
    return _this8.classList.toggle('red');
  };
  for (var i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayertwo, four * 2000);
};

//funcionality Page 3
function changeLayerThree() {
  pagefour.classList.remove('hide');
  pagethree.classList.add('hide');
}

function loopThroughFive() {
  var _this9 = this;

  var changeColor = function changeColor() {
    return _this9.classList.toggle('red');
  };
  for (var i = 0; i < one * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, one * 2000);
};

function loopThroughSix() {
  var _this10 = this;

  var changeColor = function changeColor() {
    return _this10.classList.toggle('red');
  };
  for (var i = 0; i < two * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, two * 2000);
};

function loopThroughSeven() {
  var _this11 = this;

  var changeColor = function changeColor() {
    return _this11.classList.toggle('red');
  };
  for (var i = 0; i < three * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, three * 2000);
};

function loopThroughEight() {
  var _this12 = this;

  var changeColor = function changeColor() {
    return _this12.classList.toggle('red');
  };
  for (var i = 0; i < four * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
  setTimeout(changeLayerThree, four * 2000);
};

//page four functionality fortune generator
var ourRandomFortuneItem = document.createElement('p');
var fortuneItemWrapper = document.getElementById('generator-results');
fortuneItemWrapper.appendChild(ourRandomFortuneItem);

var placeholderText = document.createTextNode('');
ourRandomFortuneItem.appendChild(placeholderText);

var fortuneItems = ['Beauty is in the Eyes of the Beholder', 'Keeping it 100', 'Own your beauty', 'Go to Thee Beauty Bar', 'One Two Three Four Pick Up the Make Up Off the Floor', 'Love Yourself', 'Everything Has Beauty', 'Life Life and Enjoy It', 'Beauty of Expression is so Akin to the Voice of the Sea', 'I Always Say Kindness is the Greatest Beauty That You Can Have', 'The Absence of Flaw in Beauty is Itself a Flaw'];

var loopThroughNine = function loopThroughNine() {
  fortuneItems.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  var ourRandomFortuneItemFiller = document.createTextNode(fortuneItems[0]);
  ourRandomFortuneItem.appendChild(ourRandomFortuneItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomFortuneItem.classList.add('big-and-bold');
};

button.onclick = loopThroughNine;

//event listener page 1
redbox[0].addEventListener('click', loopThroughFirst);
orangebox[0].addEventListener('click', loopThroughSecond);
aquabox[0].addEventListener('click', loopThroughThird);
bluebox[0].addEventListener('click', loopThroughFourth);

//event listener page 2
onebox[0].addEventListener('click', loopThroughOne);
twobox[0].addEventListener('click', loopThroughTwo);
threebox[0].addEventListener('click', loopThroughThree);
fourbox[0].addEventListener('click', loopThroughFour);

//event listener page3
redonebox[0].addEventListener('click', loopThroughFive);
orangetwobox[0].addEventListener('click', loopThroughSix);
aquathreebox[0].addEventListener('click', loopThroughSeven);
bluefourbox[0].addEventListener('click', loopThroughEight);
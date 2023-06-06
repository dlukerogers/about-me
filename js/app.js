'use strict';

// proof life
// console.log('hi');

let userName = prompt('What is your name?');

alert('Hi ' + userName + '.' + ' Welcome to my website!');

let doIHavePets = prompt('Do I have any pets? Yes or no?');

if(doIHavePets.toLowerCase() === 'yes' || doIHavePets.toLowerCase() === 'y') {
  //console.log('That is incorrect. I do not have any pets.');
  alert('That is incorrect. I do not have any pets.');
} else if (doIHavePets.toLowerCase() === 'no' || doIHavePets.toLowerCase() === 'n') {
  //console.log('Correct! I do not have any pets.');
  alert('Correct! I do not have any pets.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let didILiveInColorado = prompt('Did I live in Colorado? Yes or no?');

if(didILiveInColorado.toLowerCase() === 'yes' || didILiveInColorado.toLowerCase() === 'y') {
  //console.log('Correct! I did live in Colorado.');
  alert('Correct! I did live in Colorado.');
} else if (didILiveInColorado.toLowerCase() === 'no' || didILiveInColorado.toLowerCase() === 'n') {
  //console.log('That is incorrect. I did live in Colorado.');
  alert('That is incorrect. I did live in Colorado.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let doIWantToBeAstronaut = prompt('Do I want to be an astronaut someday? Yes or no?');

if(doIWantToBeAstronaut.toLowerCase() === 'yes' || doIWantToBeAstronaut.toLowerCase() === 'y') {
  //console.log('That is incorrect. I want to be a Team Leader at a big tech company.');
  alert('That is incorrect. I want to be a Team Leader at a big tech company.');
} else if (doIWantToBeAstronaut.toLowerCase() === 'no' || doIWantToBeAstronaut.toLowerCase() === 'n') {
  //console.log('Correct! I want to be a Team Leader at a big tech company.');
  alert('Correct! I want to be a Team Leader at a big tech company.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let didIGoToUW = prompt('Did I go to the University of Washington? Yes or no?');

if(didIGoToUW.toLowerCase() === 'yes' || didIGoToUW.toLowerCase() === 'y') {
  //console.log('That is incorrect. I went to Wheaton College.');
  alert('That is incorrect. I went to Wheaton College.');
} else if (didIGoToUW.toLowerCase() === 'no' || didIGoToUW.toLowerCase() === 'n') {
  //console.log('Correct! I went to Wheaton College.');
  alert('Correct! I went to Wheaton College.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let doILoveSports = prompt('Do I love sports? Yes or no?');

if(doILoveSports.toLowerCase() === 'yes' || doILoveSports.toLowerCase() === 'y') {
  //console.log('Correct! I do love sports.');
  alert('Correct! I do love sports.');
} else if (doILoveSports.toLowerCase() === 'no' || doILoveSports.toLowerCase() === 'n') {
  //console.log('That is incorrect. I do love sports.');
  alert('That is incorrect. I do love sports.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

alert('You may now enter my website, ' + userName + '.');

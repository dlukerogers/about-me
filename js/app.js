'use strict';

let score = 0;
let userName = prompt('What is your name?');

function petQuestion() {
  let doIHavePets = prompt('Do I have any pets? Yes or no?');
  if(doIHavePets.toLowerCase() === 'yes' || doIHavePets.toLowerCase() === 'y') {
    alert('That is incorrect. I do not have any pets.');
  } else if (doIHavePets.toLowerCase() === 'no' || doIHavePets.toLowerCase() === 'n') {
    alert('Correct! I do not have any pets.');
    score++;
  } else {
    alert('You need to answer with a yes or a no');
  }
}

function coloradoQuestion() {
  let didILiveInColorado = prompt('Did I live in Colorado? Yes or no?');
  if(didILiveInColorado.toLowerCase() === 'yes' || didILiveInColorado.toLowerCase() === 'y') {
    alert('Correct! I did live in Colorado.');
    score++;
  } else if (didILiveInColorado.toLowerCase() === 'no' || didILiveInColorado.toLowerCase() === 'n') {
    alert('That is incorrect. I did live in Colorado.');
  } else {
    alert('You need to answer with a yes or a no');
  }
}


function astronautQuestion() {
  let doIWantToBeAstronaut = prompt('Do I want to be an astronaut someday? Yes or no?');
  if(doIWantToBeAstronaut.toLowerCase() === 'yes' || doIWantToBeAstronaut.toLowerCase() === 'y') {
    alert('That is incorrect. I want to be a Team Leader at a big tech company.');
  } else if (doIWantToBeAstronaut.toLowerCase() === 'no' || doIWantToBeAstronaut.toLowerCase() === 'n') {
    alert('Correct! I want to be a Team Leader at a big tech company.');
    score++;
  } else {
    alert('You need to answer with a yes or a no');
  }
}


function uWQuestion() {
  let didIGoToUW = prompt('Did I go to the University of Washington? Yes or no?');
  if(didIGoToUW.toLowerCase() === 'yes' || didIGoToUW.toLowerCase() === 'y') {
    alert('That is incorrect. I went to Wheaton College.');
  } else if (didIGoToUW.toLowerCase() === 'no' || didIGoToUW.toLowerCase() === 'n') {
    alert('Correct! I went to Wheaton College.');
    score++;
  } else {
    alert('You need to answer with a yes or a no');
  }
}


function sportsQuestion() {
  let doILoveSports = prompt('Do I love sports? Yes or no?');
  if(doILoveSports.toLowerCase() === 'yes' || doILoveSports.toLowerCase() === 'y') {
    alert('Correct! I do love sports.');
    score++;
  } else if (doILoveSports.toLowerCase() === 'no' || doILoveSports.toLowerCase() === 'n') {
    alert('That is incorrect. I do love sports.');
  } else {
    alert('You need to answer with a yes or a no');
  }
}


function numberQuestion() {
  let guessNumberAttempts = 4;
  let userHasGuessedCorrectly = false;
  let guessNumber = 0;
  while (guessNumberAttempts && !userHasGuessedCorrectly) {
    guessNumberAttempts--;
    let message = 'Guess a number between 1 and 10';
    if (guessNumberAttempts < 3) {
      message = 'Try again. Guess a number between 1 and 10';
    }
    let guessNumber = parseInt(prompt(message));
    if(guessNumber > 2) {
      alert(`That number is too high. You have ${guessNumberAttempts} attempts remaining.`);
    } else if(guessNumber < 2) {
      alert(`That number is too low. You have ${guessNumberAttempts} attempts remaining.`);
    } else if(guessNumber === 2) {
      alert('Congratulations! You are correct!');
      score++;
      userHasGuessedCorrectly = true;
    } else if (isNaN (guessNumber)) {
      alert('Invalid answer!');
    }
  }
  console.log (guessNumber);
  if (guessNumberAttempts <= 0 && !userHasGuessedCorrectly) {
    alert('You have run out of attempts! The corrrect answer was 2.');
  }
}


function topTenQuestion() {
  let topTenShows = ['The Office', 'Game of Thrones', 'Parks and Rec', 'Severence', 'Lost', 'New Girl', 'Friends', 'The Umbrella Academy', 'Band of Brothers', 'Friday Night Lights'];
  let guessShowAttempts = 6;
  let userShowGuess;
  let isGuessCorrect = false;
  while (guessShowAttempts > 0 && !isGuessCorrect) {
    userShowGuess = prompt('What is one of my favorite shows?');
    for (let i = 0; i < topTenShows.length; i++) {
      if (userShowGuess.toLowerCase() === topTenShows[i].toLowerCase()) {
        isGuessCorrect = true;
        alert('Correct! That show is in my top ten!');
        score++;
        break;
      }
    }
    if (!isGuessCorrect) {
      guessShowAttempts--;
      alert(`Incorrect. That is not in my top ten. You have ${guessShowAttempts} attempts remaining.`);
    }
  }
}

alert('Hi ' + userName + '.' + ' Welcome to my website!');
petQuestion();
coloradoQuestion();
astronautQuestion();
uWQuestion();
sportsQuestion();
numberQuestion();
topTenQuestion();


alert(`You recieved a score of ${score} out of 7 possible points`);
alert('You may now enter my website, ' + userName + '.');

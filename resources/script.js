let computerPaperImg = document.getElementById('c_paper_img');
let computerRockImg = document.getElementById('c_rock_img');
let computerScissorsImg = document.getElementById('c_scissors_img');
let userPaperImg = document.getElementById('u_paper_img');
let userRockImg = document.getElementById('u_rock_img');
let userScissorsImg = document.getElementById('u_scissors_img');
let userBombImg = document.getElementById('u_bomb_img');
let winText = document.getElementById('win');
let loseText = document.getElementById('lose');
let tieText = document.getElementById('tie');
let bombText = document.getElementById('blown_up');
let counterNum = document.getElementById('counter_num');
let userValue = document.getElementById('choosing');


const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    alert("Oops try again! That one doesn't work here!");
  }
}

const getComputerChoice = () => {
  let num = Math.floor(Math.random()*3);
  switch (num) {
    case 0:
     return 'rock';
     break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    userBombImg.style.visibility = 'visible';
    bombText.style.visibility = 'visible';
    if (computerChoice === 'rock') {
        computerRockImg.style.visibility = 'visible';
    } else if (computerChoice === 'paper') {
        computerPaperImg.style.visibility = 'visible';
    } else if (computerChoice === 'scissors') {
        computerScissorsImg.style.visibility = 'visible';
    }
  }

  if (userChoice === 'rock') {
    userRockImg.style.visibility = 'visible';
    if (computerChoice === 'paper') {
      computerPaperImg.style.visibility = 'visible';
      loseText.style.visibility = 'visible';
    } else if (computerChoice === 'rock') {
        computerRockImg.style.visibility = 'visible';
        tieText.style.visibility = 'visible';
    } else if (computerChoice === 'scissors') {
        computerScissorsImg.style.visibility = 'visible';
        winText.style.visibility = 'visible';
    }
  }

  if (userChoice === 'paper') {
    userPaperImg.style.visibility = 'visible';
    if (computerChoice === 'scissors') {
      computerScissorsImg.style.visibility = 'visible';
      loseText.style.visibility = 'visible';
    } else if (computerChoice === 'paper') {
        computerPaperImg.style.visibility = 'visible';
        tieText.style.visibility = 'visible';
    } else if (computerChoice === 'rock') {
        computerRockImg.style.visibility = 'visible';
        winText.style.visibility = 'visible';
    }
  }

  if (userChoice === 'scissors') {
    userScissorsImg.style.visibility = 'visible';
    if (computerChoice === 'rock') {
      computerRockImg.style.visibility = 'visible';
      loseText.style.visibility = 'visible';
    } else if (computerChoice === 'scissors') {
        computerScissorsImg.style.visibility = 'visible';
        tieText.style.visibility = 'visible';
    } else if (computerChoice === 'paper') {
        computerPaperImg.style.visibility = 'visible';
        winText.style.visibility = 'visible';
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice(userValue.value);
  let computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

let button = document.getElementById('submit');
button.addEventListener('click', playGame);
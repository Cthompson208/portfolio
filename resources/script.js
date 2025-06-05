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
let c = 0


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
    userPaperImg.style.visibility = 'hidden';
    userRockImg.style.visibility = 'hidden';
    userScissorsImg.style.visibility = 'hidden';
    if (computerChoice === 'rock') {
        c++;
        computerRockImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        winTextstyle.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'visible';
    } else if (computerChoice === 'paper') {
        c++;
        computerPaperImg.style.visibility = 'visible';
        computerRockImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        winTextstyle.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'visible';
    } else if (computerChoice === 'scissors') {
        c++;
        computerScissorsImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerRockImg.style.visibility = 'hidden';
        winTextstyle.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'visible';
    }
  }

  if (userChoice === 'rock') {
    userRockImg.style.visibility = 'visible';
    userBombImg.style.visibility = 'hidden';
    userPaperImg.style.visibility = 'hidden';
    userScissorsImg.style.visibility = 'hidden';
    if (computerChoice === 'paper') {
      computerPaperImg.style.visibility = 'visible';
      computerRockImg.style.visibility = 'hidden';
      computerScissorsImg.style.visibility = 'hidden';
      loseText.style.visibility = 'visible';
      winText.style.visibility = 'hidden';
      tieText.style.visibility = 'hidden';
      bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'rock') {
        computerRockImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        tieText.style.visibility = 'visible';
        winText.style.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'scissors') {
        computerScissorsImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerRockImg.style.visibility = 'hidden';
        winText.style.visibility = 'visible';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
        c++;
    }
  }

  if (userChoice === 'paper') {
    userPaperImg.style.visibility = 'visible';
    userRockImg.style.visibility = 'hidden';
    userScissorsImg.style.visibility = 'hidden';
    userBombImg.style.visibility = 'hidden';
    if (computerChoice === 'scissors') {
      computerScissorsImg.style.visibility = 'visible';
      computerPaperImg.style.visibility = 'hidden';
      computerRockImg.style.visibility = 'hidden';
      loseText.style.visibility = 'visible';
      winText.style.visibility = 'hidden';
      tieText.style.visibility = 'hidden';
      bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'paper') {
        computerPaperImg.style.visibility = 'visible';
        computerRockImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        tieText.style.visibility = 'visible';
        winText.style.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'rock') {
        computerRockImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        winText.style.visibility = 'visible';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
        c++;
    }
  }

  if (userChoice === 'scissors') {
    userScissorsImg.style.visibility = 'visible';
    userBombImg.style.visibility = 'hidden';
    userPaperImg.style.visibility = 'hidden';
    userRockImg.style.visibility = 'hidden';
    if (computerChoice === 'rock') {
      computerRockImg.style.visibility = 'visible';
      computerPaperImg.style.visibility = 'hidden';
      computerScissorsImg.style.visibility = 'hidden';
      loseText.style.visibility = 'visible';
      winText.style.visibility = 'hidden';
      tieText.style.visibility = 'hidden';
      bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'scissors') {
        computerScissorsImg.style.visibility = 'visible';
        computerPaperImg.style.visibility = 'hidden';
        computerRockImg.style.visibility = 'hidden';
        tieText.style.visibility = 'visible';
        winText.style.visibility = 'hidden';
        loseText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
    } else if (computerChoice === 'paper') {
        computerPaperImg.style.visibility = 'visible';
        computerRockImg.style.visibility = 'hidden';
        computerScissorsImg.style.visibility = 'hidden';
        winText.style.visibility = 'visible';
        loseText.style.visibility = 'hidden';
        tieText.style.visibility = 'hidden';
        bombText.style.visibility = 'hidden';
        c++;
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice(userValue.value);
  let computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
  counterNum.innerHTML = c;
}

let button = document.getElementById('submit');
button.addEventListener('click', playGame);
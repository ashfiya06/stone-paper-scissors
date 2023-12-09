let scores = {
    user: 0,
    computer: 0,
    tie: 0
};

const winningScore = 3; // Change this value to set the winning score

let user_score = document.getElementById('user-score');
let computer_score = document.getElementById('computer-score');
let tie_score = document.getElementById('tie-score');

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function compChoice() {
    const options = ['stone', 'paper', 'scissors'];
    const randomComp = Math.floor(Math.random() * 3);
    return options[randomComp];
}

function updateScores() {
    user_score.textContent = scores.user;
    computer_score.textContent = scores.computer;
    tie_score.textContent = scores.tie;
}

function playGame(userChoice) {
    let compId = compChoice();

    if (compId === userChoice) {
        scores.tie++;
        console.log('tie');
    } else if (
        (userChoice === 'stone' && compId === 'paper') ||
        (userChoice === 'paper' && compId === 'scissors') ||
        (userChoice === 'scissors' && compId === 'stone')
    ) {
        scores.computer++;
        console.log('computer wins');
    } else {
        scores.user++;
        console.log('user wins');
    }

    updateScores();

    if (scores.user === winningScore || scores.computer === winningScore) {
        checkWinner(scores.user > scores.computer ? 'user' : 'computer');
    }
}

function checkWinner(winner) {
    // alert(`${winner} is winner`);
    scores = {
        user: 0,
        computer: 0,
        tie: 0
    };
    alert('winner is' + winner);



    // You can add more logic or UI updates for the winner here
}

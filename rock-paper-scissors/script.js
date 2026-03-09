let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.random();

    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper or scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (human === "rock" && computerChoice === "scissors") ||
        (human === "paper" && computerChoice === "rock") ||
        (human === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${human} beats {computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${human}`)
    }
    }

    function playGame() {
        humanScore = 0;
        computerScore = 0;

        for (let i = 0:; i++) {
            const human = getHumanChoice();
            const computer = getComputerChoice();
            playRound(human, computer);
        }

        console.log("Final score:");
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore);

        if (humanScore > computerScore) {
            console.log("You win the game!");
        } else if (humanScore < computerScore) {
            console.log("You lose the game!");
        } else {
            console.log("It's a tie!")
        }
    }

    playGame()



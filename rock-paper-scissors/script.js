let humanScore = 0;
let computerScore = 0;

const scoreboards = document.querySelector("#scoreboard");
const buttons = document.querySelectorAll("button");

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

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
        scoreboards.textContent =
        `It's a tie!\nHuman: ${humanScore}\nComputer: ${computerScore}`;
        checkForWinner();
        return;
    }

    if (
        (human === "rock" && computerChoice === "scissors") ||
        (human === "paper" && computerChoice === "rock") ||
        (human === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        scoreboards.textContent =
        `You win! ${human} beats ${computerChoice}\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    } else {
        computerScore++;
        scoreboards.textContent =
        `You lose! ${computerChoice} beats ${human}\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    }
    checkForWinner();
    }

    function checkForWinner() {
        if (humanScore === 5) {
            scoreboards.textContent = "🎉 You win the game! 🎉";
            disableButtons();
        }

        if (computerScore === 5) {
            scoreboards.textContent = "💀 Computer wins the game! 💀";
            disableButtons();
        }
    }

    function disableButtons() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(btn => btn.disabled = true)
    }


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.id;
        playRound(choice, getComputerChoice());
    })
})



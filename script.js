let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#080808";
}
const showWinner = (userwin) => {
    if (userwin) {
        {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win!");
            msg.innerText = "you win!";
            msg.style.backgroundColor = "green";
            if (userScore==5) {
                userScore=0;
                computerScore=0;
                msg.innerText="Congratulations you win";
                userScorePara.innerText = userScore;
                computerScorePara.innerText = computerScore;
            }

        }
    }
    else {
        computerScore++;
        console.log("you lose");
        computerScorePara.innerText = computerScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
        if (computerScore==5) {
            userScore=0;
            computerScore=0;
            msg.innerText="Game Over!";
            userScorePara.innerText = userScore;
            computerScorePara.innerText = computerScore;
        }
    }
}
const playGame = (userchoice) => {
    console.log("userchoice=", userchoice);
    const computerchoice = genCompChoice();
    console.log("computerchoice=", computerchoice);
    if (userchoice === computerchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "stone") {
            userwin = computerchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = computerchoice === "scissors" ? false : true;

        }
        else {
            userwin = computerchoice === "stone" ? false : true;
        }
        showWinner(userwin);
    }


}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playGame(userchoice);

    })
})
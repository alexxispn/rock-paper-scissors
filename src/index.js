const buttons = [...document.querySelectorAll(".buttons button")];
const OPTIONS = ["rock", "paper", "scissors"];
const result = document.querySelector(".result");

function getRandomOptions() {
  const index = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[index];
}

function start(button) {
  const playerOptions = button.classList.item(0);
  const cpuOptions = getRandomOptions();
  checkTheWinner({ playerOptions, cpuOptions });
}

function checkTheWinner(player, cpu) {
  let message = "";
  if (player === cpu) {
    message = "Tie";
  } else if ((player === "rock" && cpu === "scissors") || (player === "paper" && cpu === "rock") || (player === "scissors" && cpu === "paper")) {
    message = "Player Wins";
  } else {
    message = "CPU Wins";
  }
  console.log({ player, cpu });
  result.textContent = `${message} (Player: ${player} - ${cpu}`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => start(button));
});

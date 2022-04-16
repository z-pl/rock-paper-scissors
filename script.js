function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * computerOptions.length);

  return computerOptions[randomIndex];
}

console.log(computerPlay());

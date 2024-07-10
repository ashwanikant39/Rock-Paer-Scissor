// console.log("Hello");
let choices = document.querySelectorAll(".choice");
let userChoice = document.querySelector("#userChoice");
let compChoice = document.querySelector("#compChoice");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let drawScore = document.querySelector("#drawScore");
let win = document.querySelector("#win");
let restart=document.querySelector("button")

let userScoreCount = 0;
let compScoreCount = 0;
let drawScoreCount=0;
// let user

let drawGame = (str) => {
  win.innerHTML = "The Game is Tie" + str;
  win.style.backgroundColor = "rgb(173, 172, 172)";
  win.style.color = "black";
};
let userWin = (str) => {
  win.innerHTML = "'User' Win tha Game" + str;
  win.style.backgroundColor = "green";
  win.style.color = "white";
};
let comptWin = (str) => {
  win.innerHTML = "'Computer' Win tha Game" + str;
  win.style.backgroundColor = "red";
  win.style.color = "white";
};
let gameLogic = (userSelectChoice, comptSelectChoice) => {
  console.log("User choice: " + userSelectChoice);
  console.log("Computer choice: " + comptSelectChoice);

  if (userSelectChoice === comptSelectChoice) {
    drawGame("(Both choose the same option)");
    drawScoreCount++;
    drawScore.innerHTML=drawScoreCount;
  } else if (userSelectChoice === "rock" && comptSelectChoice === "paper") {
    comptWin("(The Paper cover tha Rock)");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (userSelectChoice === "rock" && comptSelectChoice === "scissor") {
    userWin("(The Rock break the scissor)");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  } else if (userSelectChoice === "paper" && comptSelectChoice === "rock") {
    userWin("(The Paper cover the Rock)");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  } else if (userSelectChoice === "paper" && comptSelectChoice === "scissor") {
    comptWin("(The Scissor cut the Paper)");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (userSelectChoice === "scissor" && comptSelectChoice === "rock") {
    comptWin("(The rock break the scissor)");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (userSelectChoice === "scissor" && comptSelectChoice === "paper") {
    userWin("(The scissor cut the paper)");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  }

  // console.log("hello")
};

let genRandChoice = () => {
  let genNum = Math.floor(Math.random() * 3);
  return genNum;
  // console.log(genNum);
};
// for computer choice
let computerChoice = (userSelectChoice) => {
  //   console.log("Your choice " + userSelectChoice);
  let choiceslist = ["rock", "paper", "scissor"];
  //   console.log(choiceslist);
  //   genRandChoice();
  let comptSelectChoice = choiceslist[genRandChoice()];
  compChoice.innerHTML = comptSelectChoice.toUpperCase();
  //   console.log("Computer choice " + comptSelectChoice);

  gameLogic(userSelectChoice, comptSelectChoice);
};

// Loop on every choice
choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    let userSelectChoice = choice.getAttribute("id");

    userChoice.innerHTML = userSelectChoice.toUpperCase();

    computerChoice(userSelectChoice);

    // console.log(yourChoiceid);
  });
});

restart.addEventListener("click",()=>{
    // document.write("hello");
    window.location.reload()
})
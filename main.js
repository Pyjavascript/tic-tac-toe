let PlayerO = true;
let btn = document.querySelectorAll(".btn");
let winner = document.querySelector(".win");
let playAgain = document.querySelector(".play-again");
let WinningPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
btn.forEach((button) => {
  button.addEventListener("click",() => {
    if(PlayerO){
      button.innerText = "O";
      PlayerO = false;
    }else{
      button.innerText = "X";
      PlayerO = true;
    }
    button.disabled = true;
    checkWinner();
  })
})

let checkWinner = () => {
  for(pattern of WinningPatterns){
    let pos1 = btn[pattern[0]].innerText
    let pos2 = btn[pattern[1]].innerText
    let pos3 = btn[pattern[2]].innerText

    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 == pos2 && pos2 == pos3){
        winnerText(pos1)
        disable();
      }
    }
  }
}
let disable = () => {
  for(b of btn){
    b.disabled = true;
  }
}
let winnerText = (name) => {
  winner.classList.remove("hide");
  playAgain.classList.remove("hide");
  winner.innerText = `${name} Won`
}
playAgain.addEventListener("click", () => {
  for(button of btn){
    button.innerText = "";
    winner.classList.add("hide");
    playAgain.classList.add("hide");
  }
})

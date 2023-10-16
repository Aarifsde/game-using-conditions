let init = confirm("Do you want to play game");
if(init){
  let choice = prompt("Please choose rock, paper or scissors")
  if(choice){
    let player = choice.trim().toLowerCase();
    if(player === "rock" || player === "paper" || player ==="scissors"){
      let arr = ["rock", "paper", "scissors"];
      let computer = arr[Math.floor(Math.random() * 3)]
      let res = player === computer ? `Player: ${player}\n Computer: ${computer}\n Its a Tie`: player === "rock" && computer === "paper" ? `Player: ${player}\n Computer: ${computer}\n computer wins` : player === "paper" && computer === "scissors" ? `Player: ${player}\n Computer: ${computer}\n computer wins` : player === "scissors" && computer === "rock" ? `Player: ${player}\n Computer: ${computer}\n computer wins` : `Player: ${player}\n Computer: ${computer}\n player wins`;
      alert(res);
      let playAgain = confirm("Do you want to play again ?");
      playAgain ? location.reload() : alert("ok come next time");
    }else{
      alert("please enter rock, paper, scissors");
    }
  } else {
    alert("ok you changed your mind, may be next time");
  }
} else {
  alert("ok bye");
}
 
const initGame =() =>{
    const startGame = confirm("shall we play a RPS Game");
    startGame ? playGame() : alert("May be later ");
};
const playGame = () => {
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decideNotToplay();
            break;
        }
        playerChoice = eavaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
        continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice,computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
        continue;
    }else{
        thanksForPlaying();
        break;
    }
}
};

const getPlayerChoice = () => {
    return prompt("please Enter the rock,paper,sciisors");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice===""){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
}
const invalidChoice = () =>{
    alert("you Did't enter rock,paper,scisors");
};
const decideNotToplay =()=>{
    alert ("you may decide not to play");
};
const eavaluatePlayerChoice = (playerChoice) =>{
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ){
        return playerChoice;
    }else{
        return false;
    }
};
const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray =["rock","paper","scissors"];
    return rpsArray[randomNumber];
};
const determineWinner =(player,computer) =>{
    const winner = 
    player === computer 
    ?"Tie Game!"
    :player === "rock" && computer ==="paper"
    ?`playerOne: ${player}\nComputer:${computer}\n computerWins!`
    :player === "paper" && computer ==="scissors"
    ?`playerOne: ${player}\nComputer:${computer}\n computerWins!`
    :player === "scissors" && computer ==="rock"
    ?`playerOne: ${player}\nComputer:${computer}\n computerWins!`
    :`playerOne: ${player}\nComputer:${computer}\n playerWins!`;
    
    return winner;   
};
const displayResult =(result)=>{
    alert(result);
}
const askToPlayAgain =() =>{
    return confirm("play Again");
};
const thanksForPlaying =() => {
    alert("ok,thanks for playing")
};

initGame();
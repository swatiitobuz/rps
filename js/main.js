const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) =>{
    option.addEventListener("click",function() {
    const playerInput = this.className;

    const optionsForComputer  = ["fa-solid fa-hand fa-5x","fa-solid fa-hand-back-fist fa-5x","fa-solid fa-hand-scissors fa-5x"]
    const computerInput = optionsForComputer[Math.floor(Math.random()*3)];

    compareInputs(playerInput,computerInput);
    updateScore();
    
})
})

function compareInputs(playerInput,compareInput){
    if
}
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(posssibleChoice => posssibleChoice.addEventListener('click',(e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()    
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3) +1 

    if (randomNumber ===1){
        computerChoice = 'scissor'

    }
    if(randomNumber ===2){
        computerChoice='paper'
    }
    if(randomNumber ===3){
        computerChoice = 'rock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result="draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result="Congratulations!!! You are winner"
    }
    if (computerChoice === 'scissor' && userChoice === 'rock'){
        result="Congratulations!!! You are winner"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result="Congratulations!!! You are winner"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result="Sorry better luck next time"
    }
    if (computerChoice === 'scissor' && userChoice== 'paper'){
        result="Sorry better luck next time"
    }
    if (computerChoice === 'paper' && userChoice== 'scissors'){
        result="Sorry better luck next time"
    }
    resultDisplay.innerHTML = result
}

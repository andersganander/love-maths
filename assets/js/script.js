// Wait for the DOM to finish loading before starting the game
// GEt the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click',function(){
            if (this.getAttribute('data-type')==='submit') {
                alert('You clicked Submit');
            } else {
                let gameType = this.getAttribute('data-type');
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game loop, called after the script is first loaded 
 * and after the user's answer has been processed
 * 
 */
function runGame(gameType){
    const num1 = Math.floor(Math.random()*25)+1;
    const num2 = Math.floor(Math.random()*25)+1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer(params) {
    
}

function calculateCorrectAnswer(params) {
    
}

function incremetScore(params) {
    
}

function incremetWrongAnswer(params) {
    
}

function displayAdditionQuestion(op1, op2) {
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}


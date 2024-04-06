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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){
    const num1 = Math.floor(Math.random()*25)+1;
    const num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer(params) {
    
}

function calculateCorrectAnswer(params) {
    
}

function incremetScore(params) {
    
}

function incremetWrongAnswer(params) {
    
}

function displayAdditionQuestion(params) {
    
}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}


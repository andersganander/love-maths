// Wait for the DOM to finish loading before starting the game
// GEt the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click',function(){
            if (this.getAttribute('data-type')==='submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    document.getElementById('answer-box').addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            checkAnswer();
        }
    } )
    runGame("addition");
})

/**
 * The main game loop, called after the script is first loaded 
 * and after the user's answer has been processed
 * 
 */
function runGame(gameType){

    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();

    const num1 = Math.floor(Math.random()*25)+1;
    const num2 = Math.floor(Math.random()*25)+1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if(gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if(gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if(gameType === 'divide'){
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in 
 * the returned calculateAnswer array
 * @param {*} params 
 */
function checkAnswer(params) {
    const userAnswer = parseInt(document.getElementById('answer-box').value);
    const calculatedAnswer = calculateCorrectAnswer();
    
    if (userAnswer === calculatedAnswer[0]){
        //alert("You've got it right");
        incrementScore();
    } else {
        //alert(`hmmm... You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();      
    }
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and the operator directly from the form,
 * and returns the correct answer.
 * @param {*} params 
 */
function calculateCorrectAnswer() {
    let op1 = parseInt(document.getElementById('operand1').innerText);
    let op2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [op1 + op2, "addition"];
    } else if (operator === 'x'){
        return [op1 * op2, "multiply"];
    } else if (operator == "-") {
        return [op1 - op2, "subtract"]; 
    } else if (operator == "/") {
        return [op1 / op2, "divide"]; 
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;

    }

}

/**
 * Gets the current score from DOM and increments it
 * @param {} params 
 */
function incrementScore(params) {
    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = score+=1;
    console.log(score);
}

/**
 * Gets the current number of incorrect answers from DOM and increments it
 * @param {*} params 
 */
function incrementWrongAnswer(params) {
    let incorrect = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = incorrect+=1;
    console.log(incorrect);
}

function displayAdditionQuestion(op1, op2) {
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion(op1, op2) {
    if (op1 < op2) {
        let tmp = op1;
        op1 = op2;
        op2 = tmp;
    }
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
    document.getElementById('operator').textContent = '-'; 
}

function displayMultiplyQuestion(op1, op2) {
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(op1, op2) {
    if (op1 < op2) {
        let tmp = op1;
        op1 = op2;
        op2 = tmp;
    }
    while (op1 % op2 !=0 ){
        op1++;
    }
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
    document.getElementById('operator').textContent = '/';
}

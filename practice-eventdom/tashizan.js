let button = document.querySelector('#calc');
button.addEventListener('click', calculate);

function calculate() {
    
    let leftInput = document.querySelector('#left');
    let rightInput = document.querySelector('#right');

    let leftValue = parseInt(leftInput.value);
    let rightValue = parseInt(rightInput.value);

    
    let result = leftValue + rightValue;

    
    let answerSpan = document.querySelector('#answer');
    answerSpan.textContent = result;
}

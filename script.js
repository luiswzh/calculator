const topDisplay = document.querySelector('.display .top');
const bottomDisplay = document.querySelector('.display .bottom');
const leftButtons = document.querySelectorAll('.buttons .left button');
const delButton = document.querySelector('#DEL');
const acButton = document.querySelector('#AC');
const operandButtons = document.querySelectorAll('.operand');
const calculateButton = document.querySelector('#calculate');

let firstOperand = 0;
let secondOperand = 0;
let operator = '';
const operatorDictionary = {
    'add':'+',
    'substract':'-',
    'divide':'÷',
    'multiply':'x',
}
const operatorFunctions = {
    add: function(firstNumber, secondNumber){
        return +firstNumber + +secondNumber;
    },
    
    substract: function(firstNumber, secondNumber){
        return +firstNumber - +secondNumber;
    },
    
    multiply: function(firstNumber, secondNumber){
        return +firstNumber * +secondNumber;
    },
    
    divide: function(firstNumber, secondNumber){
        if(+secondNumber == 0){
            return false;
        }
        return +firstNumber / +secondNumber;
    },
    '': function(firstNumber, secondNumber){
        return +secondNumber;
    }
};


function addToTopDisplay(text){
    //Prevents multiple dots
    if(topDisplay.textContent.includes('.') && text=='.'){
        return;
    }
    //Prevents displaying more text than possible
    if(topDisplay.textContent.length>16){
        alert('Display is full!');
        return;
    }
    topDisplay.textContent += text;
}

function onOperatorClick(inputOperator){
    if(topDisplay.textContent != '' && bottomDisplay.textContent != ''){
        calculate();
    }  
    firstOperand=+topDisplay.textContent;
    operator=inputOperator;
    bottomDisplay.textContent=topDisplay.textContent + ' ' + operatorDictionary[operator];
    topDisplay.textContent = '';
}

function calculate(){
    secondOperand=+topDisplay.textContent;
    let result = operatorFunctions[operator](firstOperand,secondOperand);
    if (result){
        topDisplay.textContent=Math.round(result*100)/100;
    } else {
        topDisplay.textContent='can\'t divide by zero';
    }
    

    operator='';
}

leftButtons.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        addToTopDisplay(event.currentTarget.textContent);
    });
});


operandButtons.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        onOperatorClick(event.currentTarget.id);
    });
});

calculateButton.addEventListener('click',()=>{
    calculate();
    bottomDisplay.textContent='';
});

delButton.addEventListener('click',()=>{
    topDisplay.textContent=topDisplay.textContent.slice(0, -1);
});

acButton.addEventListener('click', ()=>{
    topDisplay.textContent='';
    bottomDisplay.textContent='';
    firstOperand=0;
    secondOperand=0;
    operator='';
})

document.addEventListener('keydown',(event)=>{
    let keyPressed=event.key;
    if(!isNaN(keyPressed)){
        addToTopDisplay(keyPressed);
    }
    if(keyPressed=='+') {onOperatorClick('add')};
    if(keyPressed=='-') {onOperatorClick('substract')};
    if(keyPressed=='/') {onOperatorClick('divide')};
    if(keyPressed=='*' || keyPressed=='x') {onOperatorClick('multiply')};
    if(keyPressed=='Enter'){calculate();bottomDisplay.textContent=''}
    if(keyPressed=='Delete'){   topDisplay.textContent='';
                                bottomDisplay.textContent='';
                                firstOperand=0;
                                secondOperand=0;
                                operator=''};
    if(keyPressed=='Backspace'){topDisplay.textContent=topDisplay.textContent.slice(0, -1);};
})
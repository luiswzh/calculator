const topDisplay = document.querySelector('.display .top');
const bottomDisplay = document.querySelector('.display .bottom');
const leftButtons = document.querySelectorAll('.buttons .left button');


function add(firstNumber, secondNumber){
    return +firstNumber + +secondNumber;
}

function substract(firstNumber, secondNumber){
    return +firstNumber - +secondNumber;
}

function multiply(firstNumber, secondNumber){
    return +firstNumber * +secondNumber;
}

function divide(firstNumber, secondNumber){
    if(+secondNumber == 0){
        return "CANT DIVIDE BY 0"
    }
    return +firstNumber / +secondNumber;
}

function updateTopDisplay(text){
    topDisplay.textContent = text;
}

function updateBottomDisplay(text){
    bottomDisplay.textContent = text;
}

function addToTopDisplay(text){
    //Prevents multiple dots
    if(topDisplay.textContent.includes('.') && text.currentTarget.textContent=='.'){
        return;
    }
    //Prevents displaying more text than possible
    if(topDisplay.textContent.length>16){
        alert('Display is full!');
        return;
    }
    topDisplay.textContent += text.currentTarget.textContent;
}

leftButtons.forEach((item)=>{
    item.addEventListener('click',addToTopDisplay);
})

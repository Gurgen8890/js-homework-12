let simbols = ['-', '+', '/', '*', '%'];

let num1Bool = null;
let num2Bool = null;

let number1 = +prompt('Enter first number')
if(!Number.isNaN(number1)) {
    num1Bool = 'Number 1 type is Number'
}
while (num1Bool === null) {
        number1 = +prompt('Plese fill the number')
        if(!Number.isNaN(number1)) {
            num1Bool = 'Number 1 type is Number'
        }
    }


let operator = prompt('Operator' + simbols);

let simBool = false;
for(let i = 0; i < simbols.length; i++) {
    if (simbols[i] === operator) {
        simBool = true;
        break;
    }
}

while (!simBool) {
    operator = prompt('Please fill one of '+ simbols)
    for(let i = 0; i < simbols.length; i++) {
        if (simbols[i] === operator) {
            simBool = true;
            break;
        }
    }
}

let number2 = +prompt('Enter second number')
if(!Number.isNaN(number2)) {
    num2Bool = 'Number 2 type is Number'
}
while (num2Bool === null) {
        number2 = +prompt('Plese fill the number')
        if(!Number.isNaN(number2)) {
            num2Bool = 'Number 2 type is Number'
        }
    }

switch(operator) {
    case "+" :
        alert(`${number1} ${operator} ${number2} = ${number1 + number2}`)
        break;
    case "-" :
        alert (`${number1} ${operator} ${number2} = ${number1 - number2}`);
        break;
    case "/" :
        alert (`${number1} ${operator} ${number2} = ${number1 / number2}`);
        break;
    case "*" :
        alert (`${number1} ${operator} ${number2} = ${number1 * number2}`);
        break;
    case "%" :
        alert (`The percentage of ${number1} by ${number2} = ${number1 * number2 / 100}`); 
        break;
        default :
        alert ('wrong operator')
}
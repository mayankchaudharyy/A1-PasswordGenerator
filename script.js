const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    var textArea = document.createElement("textarea");
    textArea.value = resultEl.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
})

generateEl.addEventListener('click', () => {
    let lower = document.getElementById("lowercase").checked;
    let upper = document.getElementById("uppercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;
    let ans = generatePassword(lower, upper, number, symbol, lengthEl.value);
    resultEl.innerText = ans;
})

function generatePassword(lower, upper, number, symbol, length) {
    let arr = [];
    if(lower === true){
        arr.push('lower');
    }
    if(upper === true){
        arr.push('upper');
    }
    if(number === true){
        arr.push('number');
    }
    if(symbol === true){
        arr.push('symbol');
    }
    console.log(number);
    console.log(arr);
    var randomProperty = function (obj) {
        let len = arr.length;
        if(len >0){
            let arb = Math.floor(Math.random()*len);
            console.log(arr[arb]);
            console.log(obj[arr[arb]]);
            return obj[arr[arb]];
        }
    };
    let password = "";
    for(let i = 0; i< length; i++){
        if(arr.length > 0){
            let guess = randomProperty(randomFunc);
            password += guess();
        }else{
            return "Invalid Inuput";
        }
    }
    console.log(password);
    return password;
}


function getRandomLower() {
    let ran = 97 + Math.floor(Math.random()*26);
    return String.fromCharCode(ran);
}

function getRandomUpper() {
    let ran = 65 + Math.floor(Math.random()*26);
    return String.fromCharCode(ran);
}

function getRandomNumber() {
    let ran = Math.floor(Math.random()*10) + '';
    return ran;
}

function getRandomSymbol() {
    let str1 = "!@#$%^&*()";
    let ran = Math.floor(Math.random()*10);
    return str1.charAt(ran);
}
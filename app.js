// varibable of touch
let result = document.querySelector('.upper-value');
console.log(result);
let btn_number = document.querySelectorAll('.btn-number');
console.log(btn_number);
let btn_operator = document.querySelectorAll('.btn-operator')
let clear = document.getElementById('clear')
console.log(clear);
let backspace = document.getElementById('backspace')

let screenText = ""
let screenContent;
let num1 = ""
let num2 = ""
let resultFinal = 0;
let operation = ""


//variable of thme
let check1 = document.getElementById('checkbox-1')
let check2 = document.getElementById('checkbox-2')
let check3 = document.getElementById('checkbox-3')

let bodi = document.body
check2.addEventListener('click', ()=>{
    bodi.classList.remove('theme-1')
    bodi.classList.remove('theme-3')
    bodi.classList.add('theme-2')
})
check1.addEventListener('click', ()=>{
    bodi.classList.add('theme-1')
    bodi.classList.remove('theme-2')
    bodi.classList.remove('theme-3')
})
check3.addEventListener('click', ()=>{
    bodi.classList.remove('theme-1')
    bodi.classList.remove('theme-2')
    bodi.classList.add('theme-3')
})

// writting logic for number buttons...
btn_number.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        let buttonText = e.target.textContent;
        console.log(buttonText);
        if(!operation){
            console.log("sos");
            num1 += buttonText;
            result.textContent = num1;
            screenNum = num1;
        }else{
            console.log("sosss");
            num2 += e.target.textContent;
            result.textContent = num2;
            screenNum = num2;
        }
    })
})
//logica for addition, division, subtraction and multiplication

btn_operator.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        if(operation && num2){
            switch(operation) {
                case "+":
                    resultFinal = resultFinal
                    ? resultFinal + Number(num1) + Number(num2)
                    : Number(num1) + Number(num2)
                    num1 ="";
                    num2 ="";
                    result.textContent = resultFinal;
                    break;
                case "-":
                    resultFinal = resultFinal 
                    ?resultFinal - Number(num2)
                    :Number(num1) - Number(num2)
                    num1 = "";
                    num2 = ""
                    result.textContent = resultFinal
                    break;
                case "x":
                    resultFinal = resultFinal 
                    ? resultFinal * Number(num2)
                    : Number(num1) * Number(num2)
                    num1 = "";
                    num2 = ""
                    result.textContent = resultFinal
                    break;
                case "/":
                    resultFinal = resultFinal 
                    ? resultFinal / Number(num2)
                    : Number(num1) / Number(num2)
                    num1 = "";
                    num2 = ""
                    result.textContent = resultFinal
                    break;
                case "=":
                    if(operation === "+"){
                        resultFinal = resultFinal 
                        ? resultFinal + Number(num2)
                        : Number(num1) + Number(num2) 
                    }else if(operation === "-"){
                        resultFinal = resultFinal 
                        ? resultFinal - Number(num2)
                        : Number(num1) - Number(num2) 
                    }else if(operation === "/"){
                        resultFinal = resultFinal 
                        ? resultFinal / Number(num2)
                        : Number(num1) / Number(num2) 
                    }else if(operation === "x"){
                        resultFinal = resultFinal 
                        ? resultFinal * Number(num2)
                        : Number(num1) * Number(num2) 
                    }
                    num1 = "";
                    num2 = ""
                    result.textContent = resultFinal
                    break;
            }
        }
        operation = e.target.textContent
    })
})
//change value
clear.addEventListener('click', ()=>{
    num1 = ""
    num2 = ""
    screenText = ""
    operation = ""
    resultFinal = 0;
    result.textContent = 0;
})
backspace.addEventListener('click', () =>{
    result.value.toString().slice(0,-1);
})

// theme1 event
const body = document.getElementsByTagName('body')
body.className = 'theme-2'
const theme2 = document.querySelector('.theme-2')
check1.addEventListener('click', ()=>{

})

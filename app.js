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


// varibable of touch
let result = document.querySelector('.upper-value');
let btn_number = document.querySelectorAll('.btn-number');
let btn_operator = document.querySelectorAll('.btn-operator');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let comma = document.querySelector(".btn-comma");
let equal = document.querySelector("#equal");

let screenText = ""
let screenContent;
let num1 = ""
let num2 = ""
let resultFinal = 0;
let operation = ""
let operationCheck =""
let isInIfisInIfCount = 0;
let opdDive = ""
let num2Chek = ""
let checkedText2 = false;
let checkDot = false; 
// writting logic for number buttons...
btn_number.forEach((item) =>{
    item.addEventListener('click', (e) =>{
       
        //get the button element
        let buttonText = e.target.textContent;
        if(!operation){
           
            num1 += buttonText;
            result.textContent = num1;
            //temporary memory 1
            screenNum = num1;
        }else{
            
            num2 += e.target.textContent;
            result.textContent = num2;
             //temporary memory 2
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
                    console.log(resultFinal);
                    resultFinal = resultFinal
                    
                    ? resultFinal + Number(num2)
                    : Number(num1) + Number(num2)
                    num1 ="";
                    num2 ="";
                     result.textContent = resultFinal; 
                    console.log(isInIfisInIfCount ); 
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
                    checkedText2 = true;
                    num2Chek = num2;
                     opdDive = operation;
                    resultFinal = resultFinal 
                    ? resultFinal / Number(num2)
                    : Number(num1) / Number(num2)
                    num1 = "";
                    num2 = ""
                    result.textContent = resultFinal
                    break;
                case "=":
                console.log("yes");

                    if(operation === "+"){
                           
                
                        resultFinal = resultFinal 
                        ? resultFinal + Number(num2)
                        : Number(num1) + Number(num2) 
                    }else if(operation === "-"){
                        resultFinal = resultFinal 
                        ? resultFinal - Number(num2)
                        : Number(num1) - Number(num2) 
                    }else if(operation === "/"){
                        console.log("divise /");
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
        operation = e.target.textContent;
        console.log(operation);
       
    })

})

equal.addEventListener("click", (e) =>{
    if((num2Chek === "0" && opdDive === "/" && checkedText2) ){
        checkedText2 = false;
        console.log("soso");
        result.textContent = "Error";
        num1 = ""
        num2 = ""
        screenText = ""
        operation = ""
        resultFinal = 0;
    }

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
    checkDot = false;
   /*  if(num1 === "" && num2=="") {
        resultFinal = resultFinal.toString().slice(0,-1)
        result.textContent = result.textContent.slice(0,-1);
        if(resultFinal.toString().length > 0){
            resultFinal = parseInt(resultFinal) 
        }
        
        
        console.log("resultFinal "+ resultFinal);
    } else */ if(num1 !=="" && num2 === ""){
        
        num1 = num1.toString().slice(0,-1)
        result.textContent = result.textContent.slice(0,-1);
        /* num1 = parseInt(num1) */
        console.log("num1 " + num1);
    }else if(num2 !== ""){
        num2 = num2.toString().slice(0,-1)
        result.textContent = result.textContent.slice(0,-1);
        /* num2 = parseInt(num2) */
    }
    
})


comma.addEventListener("click", (e) =>{
   
    if(num1 === "" && !checkDot){
        checkDot = true;
        num1 = "0."
        result.textContent = num1
    }else 
    if(!operation && num1 !== "" && !num1.includes(".") && !checkDot ){
        checkDot = true;
       
        num1 = num1 + "."
        result.textContent=num1;
    }else if( num2 === ""  && operation){
        isInIfisInIfCount = 0;
        num2 = "0."
        result.textContent = num2;
    }else if(e.target.textContent === "." && num2 !== "" && !num2.includes(".")){
        num2 = num2 + "."
        result.textContent = num2;
    }
})




// theme1 event
const body = document.getElementsByTagName('body')
body.className = 'theme-2'
const theme2 = document.querySelector('.theme-2')
check1.addEventListener('click', ()=>{

})

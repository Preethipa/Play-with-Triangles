const inputs = document.querySelectorAll(".leng-input");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputTxt = document.querySelector("#output-txt");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const  sumOfSquares = calculateSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
    //console.log( SumOfSquares);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    //console.log(lengthOfHypotenuse);
    outputTxt.innerText = " The Length of Hypotenuse is " + lengthOfHypotenuse;
    
 
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);
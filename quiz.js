const quizForm = document.querySelectorAll(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputText = document.querySelector("#output-text");

const correctAnswers = [" 90°"," right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults);
    //for(let value of formResults.values()){
        //console.log(value);
    ////}
}

submitAnswerBtn.addEventListener('click',calculateScore)
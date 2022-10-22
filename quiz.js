const quizForm = document.querySelectorAll(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outpuText = document.querySelector("#output-text");

const correctAnswers = ["90°"," right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    var data = new FormData(quizForm);
    for(let value of data.values()){
       // console.log(value);
       if(value === correctAnswers){
            score = score + 1;
       }
       index =  index + 1;
    }
    console.log("ur score is "+ score);
}

submitAnswerBtn.addEventListener('click', calculateScore);
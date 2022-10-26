const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputText = document.querySelector("#output-text");

const correctAnswers = ["90°"," right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const fromResults = new FormData(quizForm);
    for(let value of formResuls.values()){
    //console.log(value);
        if(value === correctAnswers[index]){
            score = score + 1;
         }
        index = index + 1;
    }
    console.log( score);
     //outputText.innerText = "Your score is " + score;
}
submitAnswerBtn.addEventListener('click', calculateScore);

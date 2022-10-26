const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputText = document.querySelector("#output-text");

const correctAnswers = ["90°","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const data = new FormData(quizForm);
    for(let value of data.values()){
    
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    //console.log( score);
    outputText.innerText = "Your Score is " + score;
}
submitAnswerBtn.addEventListener('click', calculateScore);

const contStart=document.querySelector(".containerStart");
const contQuiz = document.querySelector(".containerQuiz");
const contScore = document.querySelector(".containerScore");
const contLast= document.querySelector(".containerLast");
const startBtn = document.querySelector(".btnStart");
const questionTxt =document.querySelector(".questionText");
const answertxt = document.querySelector(".answerText");
const initials = document.querySelector("#init");
const submitBtn = document.querySelector(".submitBtn");
const showOutput = document.querySelector("#showOutput");
const goBack = document.querySelector("#goBack");
const clearScore = document.querySelector("#clearScore");
let highScore=document.querySelector("#highScore");

let timer= 75;
highScore=0;
let randomQuestion;
let curQuestionIndex;

//on start button quiz begin
startBtn.addEventListener("click", ()=>{
    contStart.classList.add("hide"); //hide start page
    contQuiz.classList.remove("hide"); //unhide quiz page
    randomQuestion=questions.sort(()=>Math.random()*questions.length); //shuffle quesitons
    curQuestionIndex=0;
    questionFunc(randomQuestion[curQuestionIndex]);
});

function questionFunc(question){
    questionTxt.innerHTML=question.question;
    question.answers.forEach(answer=> {
        const button=document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click", answerFunc)
        answertxt.appendChild(button)
    })
}

function answerFunc(){
    
}

function setCorrect(element, correct){
    clearCorrect(element)
    if (correct){
        element.classList.add("correct")
    }else(
        element.classList.add("wrong")
    )
}

function clearCorrect(element){
    element.classList.remove("correct");
    element.classList.remove("wrong")
}


const questions = [
    {
        question: "question 1",
        answers:[
            {answer: "1", correct: false},
            {answer: "2", correct: true},
            {answer: "3", correct: false},
            {answer: "4", correct: false},
        ]
    },
    {
        question: "question 2",
        answers:[
            {answer: "1", correct: false},
            {answer: "2", correct: false},
            {answer: "3", correct: false},
            {answer: "4", correct: true},
        ]
    },
    {
        question: "question 3",
        answers:[
            {answer: "1", correct: true},
            {answer: "2", correct: false},
            {answer: "3", correct: false},
            {answer: "4", correct: false},
        ]
    },
    {
        question: "question 4",
        answers:[
            {answer: "1", correct: false},
            {answer: "2", correct: false},
            {answer: "3", correct: true},
            {answer: "4", correct: false},
        ]
    },
    {
        question: "question 5",
        answers:[
            {answer: "1", correct: false},
            {answer: "2", correct: false},
            {answer: "3", correct: false},
            {answer: "4", correct: true},
        ]
    },
]
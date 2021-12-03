import {phases} from "./phases";

let points = 0;
let phase = 0;
let askTitle = document.querySelector('.ask-title');
let answerArea = document.querySelector('.answer-area');
let progressBar = document.querySelector('.progress-bar');

let currentPhase = phases[phase];

let allAnswers = []; // To store the answers

export default function start() {
    currentPhase = phases[phase];
    progressBar.style.width = `${Math.floor((phase/phases.length) * 100)}%`

    if (currentPhase !== undefined) {
        askTitle.innerHTML = currentPhase.title;
        answerArea.innerHTML = ''; //Clean the answerArea

        let item = '';
        for (let i of currentPhase.answers) {
            item += `<div class="answer--box">${i}</div>`;
        }
        answerArea.innerHTML = item;

        document.querySelectorAll('.answer--box').forEach(item => {
            item.addEventListener('click', verify)
        })
    } else {
        getResult();
    };
}

function verify(e) {
    let correct = e.target.innerHTML;
    allAnswers.push(currentPhase.title + ' = ' + correct);

    if(correct === currentPhase.correctAnswer) points++;
    
    phase++;
    start();
}

function getResult() {
    let percentage = Math.floor((points/phases.length) * 100);

    askTitle.innerHTML = '';
    answerArea.innerHTML = '';
    answerArea.innerHTML += `<h1 class="result">You got it right ${percentage} % !</h1><br/>`;
    answerArea.innerHTML += `<button class="btt-result">Try Again !</button>`;
}

document.addEventListener('click', e => {
    let el = e.target;
    if(el.classList.contains('btt-result')) reset();
})

function reset() {
    points = 0;
    phase = 0;
    allAnswers = [];

    start();
}
// JoaoZanardo

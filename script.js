const quizDB = [
    {
        question: "Q1. Which of the following is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web network",
        c: "Web browser",
        d: "Web matrix",
        ans: "ans3"
    },
    {
        question: "Q2. Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans: "ans2"
    },
    {
        question: "Q3. In which part of the HTML metadata is contained?",
        a: "Head tag",
        b: "Title tag",
        c: "Html tag",
        d: "Body tag",
        ans: "ans1"
    },
    {
        question: "Q4. Which of the following is not the element associated with the HTML table layout?",
        a: "Alignment",
        b: "Color",
        c: "Size",
        d: "Spanning",
        ans: "ans2"
    },
    {
        question: "Q5. Which element is used for or styling HTML5 layout?",
        a: "CSS",
        b: "jQuery",
        c: "JavaScript",
        d: "PHP",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');



const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;

    option2.innerHTML = questionList.b;

    option3.innerHTML = questionList.c;

    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElm) => {
        if(curAnsElm.checked){
            answer = curAnsElm.id;
        }
    });
    

    return answer;
  
};

const deselectAll = () => {
    answers.forEach((curAnsElm) => curAnsElm.checked = false);
}

submit.addEventListener ('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> Your Score ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
    
});
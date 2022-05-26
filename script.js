const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    //hides after clicking
    startButton.classList.add('hide')
    //randomize questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    //displays options
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    //resets everything related to form,questions,body back to default state
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    //button for each question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {

}

const questions = [
    {
        question: 'whats is -?',
        answers: [
            { text: 'right', correct: true},
            { text: 'wrong', correct: false}
        ]
    }
]


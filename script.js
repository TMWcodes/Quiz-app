const startButton = document.getElementById('start-btn')
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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'whats is -',
        answers: [
            { text: 'right', correct: true},
            { text: 'wrong', correct: false}
        ]
    }
]


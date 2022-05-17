const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    //hides after clicking
    startButton.classList.add('hide')
    //displays options
    questionContainerElement.classList.remove('hide')
}




const result = document.querySelector('.result')

const choicesText = document.querySelector('.choices')

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber -> Camel Case
GAME_OPTIONS -> Snake Case
*/
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const translateChoice = (choice) => {
    if (choice === GAME_OPTIONS.ROCK) return '👊 Pedra'
    if (choice === GAME_OPTIONS.PAPER) return '✋ Papel'
    if (choice === GAME_OPTIONS.SCISSORS) return '✌ Tesoura'

}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3) //Math.floor => arrendonda para baixo.

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + " " + 'Machine:' + machine)

    choicesText.innerHTML =
    `Você escolheu: <b>${translateChoice(human)}</b><br>
    Máquina escolheu: <b>${translateChoice(machine)}</b>`


    if (human === machine) {
        result.innerHTML = "Deu empate. 😶"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "VOCÊ ganhou! 🎉"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "VOCÊ perdeu para a máquina! 😞"
    }

}





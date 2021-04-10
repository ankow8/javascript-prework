let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

let argComputerMove = randomNumber;
let argPlayerMove = playerInput;

function displayResult(argComputerMove, argPlayerMove){
  console.log('wywołano displayResult');
  console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
  if(argComputerMove - argPlayerMove == -1){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove - argPlayerMove == 2){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else
    printMessage('Tym razem przegrywasz :(');
}

printMessage(displayResult(argComputerMove, argPlayerMove));

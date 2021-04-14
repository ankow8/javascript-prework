function playGame(playerInput){

  clearMessages();

  const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1)),
        playerMove = getMoveName(playerInput);

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
  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove){
    console.log('Argumenty: ' + argComputerMove + ', ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else
      printMessage('Tym razem przegrywasz :(');
  }

  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove + '.');
  printMessage(displayResult(computerMove, playerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

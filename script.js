let gameStatus = document.querySelector('.game-status');
let gameActive = true;
let currentPlayer = 'X';
let gameState = ['','','','','','','','',''];

let gameWinner = () => `${currentPlayer} HAS WON!`;
let gameDrawn = () => `GAME DRAWN`;
let gamePlayerTurn = () => `THIS IS ${currentPlayer}'S TURN`;

function handleCellSelected(){

}
function handleWinnerDecider(){

}
function handlePlayerTurn(){

}
function handleCellplayed(){

}
function handleRestartGame(){

}

document.querySelectorAll('.cell').forEach(cell =>addEventListener('click',handleCellSelected));
document.querySelector('.restart').addEventListener('click',handleRestartGame);

function handleCellSelected(clickedCellEvent){

    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    if(clickedCell.innerHTML !== '' || !gameActive)return

    handleCellplayed(clickedCell, clickedCellIndex);
    handleWinnerDecider();

}

function handleCellplayed(clickedCell, clickedCellIndex){
    console.log('hi')
    clickedCell.innerHTML = currentPlayer;
    gameState[clickedCellIndex] = currentPlayer;
}


const winningCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

 function handleWinnerDecider() {
    let roundWon = false;
    for(let i = 0; i < 8; i++){
        const winCondition = winningCondition[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if(a === '' || b ==='' || c ===''){continue;}

        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }

   if(roundWon){
    gameStatus.innerHTML = gameWinner();
    gameActive = false;
    return;
   }
   let roundDraw = !gameState.includes("");
   if (roundDraw) {
       gameStatus.innerHTML = gameDrawn();
       gameActive = false;
       return;
   }
    
    handlePlayerTurn();


}

function handleRestartGame(){
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['','','','','','','','',''];
    gameStatus.innerHTML = gamePlayerTurn() ;
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML='');

}

function handlePlayerTurn(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    gameStatus.innerHTML = gamePlayerTurn();
}

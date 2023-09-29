
const prompt = require('prompt-sync')({ sigint: true });
const assert = require('assert');

let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
}


markBoard = (position, mark) => {
    let pos = parseInt(position)
    if(board[pos] === ' '){
        board[pos] = mark
    }
 return board
}

printBoard = () => {
    console.log(board[1] + " | " + board[2] + " | " + board[3])
    console.log("----------")
    console.log(board[4] + " | " + board[5] + " | " + board[6])
    console.log("----------")
    console.log(board[7] + " | " + board[8] + " | " + board[9])
}

validateMove = (position) => {
   let pos = parseInt(position);
   if (pos >= 1 && pos <= 9 && board[pos] === ' ') {
     return true;
   }
   return false;
 }

//let x = 'x'//just now error cuz didnt declare
//let u = markBoard(7, x)
//printBoard(u)

//console.log(u)//generally a fx will return 'undefined' if no return value

let winCombinations = [
    //horizontal
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    //vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    //diagonal
    [1, 5, 9],
    [7, 5, 3],
]

checkWin = (player) => {
    for(let element of winCombinations){
        const [a, b, c] = element
        if(board[a] === player && board[b] === player && board[c] === player){
            return true;
        }  
    }
    return false// if put return false in loop, it will iterate only once if it doesnt match)
}

checkFull = () => {
    for(let i in board) {
        if (board[i]== ' '){
            return false
        }       
    }
    return true
}

let player = 'X';
let game = false; // Initialize game to true to enter the loop

while (game == false) {
  console.clear();
  console.log("Let's play Tic-Tac-Toe!!\n")
  console.log("-----------")
  console.log("   START")
  console.log("-----------\n")
  printBoard()

  let position = prompt(`\n\nDear Player ${player}, please enter your input...(1-9):`)
  
  if (validateMove(position)) {
    markBoard(position, player)
    if (checkWin(player)) {
      console.clear()
      printBoard()
      console.log(`Congrats, Player ${player} wins!`)
      const restart = prompt("\nDo you want to restart game? :  Y/N")
      if(restart.toLowerCase() === "y"){
        
          board = {
            1: ' ',
            2: ' ',
            3: ' ',
            4: ' ',
            5: ' ',
            6: ' ',
            7: ' ',
            8: ' ',
            9: ' ',
          };

          game = false
      }
      } else if (checkFull()) {
      console.clear()
      printBoard()
      console.log("\nIt's a tie!\n")
      game = true
    } else {
      player = player === 'X' ? 'O' : 'X'
    }
  } else {
    console.log("\nInvalid move!")
  }
}

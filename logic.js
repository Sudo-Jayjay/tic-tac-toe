var gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
var gameActive = true;
var winningConditions = [[[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]], // Rows
                         [[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], // Columns
                         [[0,0],[1,1],[2,2]], [[0,2],[1,1],[2,0]]];                  // Diagonals   
const val_X = "X";
const val_O = "O";
const EMPTY = null;
var turn_counter = true;

var cellValue = document.querySelectorAll(".cell");
cellValue[0].onclick = setCellValue;
console.log(cellValue[0].onclick);

function setCellValue() {
    if(turn_counter){
        cellValue[0].innerHTML = val_X;
        turn_counter = false;
    }
    else{
        cellValue[0].innerHTML = val_O;
        turn_counter = true;
    }
}
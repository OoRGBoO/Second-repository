// Step1 – the seed app:
// 1. Create a 4x4 gBoard Matrix containing Objects. Place 2 mines 
// manually when each cell’s isShown set to true. 
// 2. Present the mines using renderBoard() function.
const MINES = '💥';
const NORMAL = '😃';
const SAD_DEAD = '😵';
const WINNER = '😎';
const FLAG = '🚩';


var cellClass;
var gBoard;
var gGame;
var cell = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
}
gLevel = {
    SIZE: 4,
    MINES: 2
};

gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame() { 
    gBoard = buildBoard()
    renderBoard(gBoard)
    printMat(gBoard, `board-container`)
    setMinesNegsCount()
}

function buildBoard() {
    var board = []
    for (var i = 0; i < gLevel.SIZE; i++) {  
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            var cell = {
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: false
            }
            board[i][j] = cell;
        }
        
    }
    board[2][2].isMine = true;
    board[1][1].isMine = true;
    return board
}

//Render the board as a <table> to the page.. but how do i present the mines?

function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = 'cell-cell' + i + '-' + j;
            if (buildBoard(board)) {
                board 
            }
            strHTML += `<td id="${cell}" class="cell"
            onclick="cellClicked(this,${i},${j})"
            oncontextmenu="cellMarked(event,this)">${MINES}</td>`;  //strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
        
        }
        strHTML += '</tr>';
    }
    var elContainer = document.querySelector('.board');
    elContainer.innerHTML = strHTML;
}

// function setMinesNegsCount(board) {
//     //COUNT MINES AROUND EACH CELL
//     var minesCount = 0;
//     for(var )
//     cell += MINES;
//     MINES = {
//         location: {
//             i: 3,
//             j: 5
//         },
//     }
// }

function cellClicked(elCell, i, j) {
    ///
}

function cellMarked(elCell) {
    ///
}

function checkGameOver() {
    ///
}

function expandShown(board, elCell, i, j) {
    ///
}








function getEmptyCells() {
    var empty = []
    for (var i = 1; i < gBoard.length - 1; i++) {
        for (var j = 1; j < gBoard[0].length - 1; j++) {
            var currCell = gBoard[i][j]
            if (!currCell.gameElement)
            empty.push({ i, j })
        }
    }
    return empty
}
function countNegs(cellI, cellJ, mat) {
    var negsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j] === MINES ) negsCount++;
        }
    }
    return negsCount;
}

function blowUpNegs(cell, board) {
    for (var i = cell - 1; i <= cell + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cell - 1; j <= cell + 1; j++) {
            if (i === cell && j === cell) continue;
            if (j < 0 || j >= board[i].length) continue;
            if (board[i][j] === LIFE) {
                // Update the model:
                board[i][j] = '';
                // Update the dom:
                renderCell(i, j, '')

            }
        }
    }
}

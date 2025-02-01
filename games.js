Here's a simple HTML, CSS, and JavaScript code for a basic puzzle game where you need to arrange shuffled pieces of an image in the correct order.

Features:

A 3x3 sliding puzzle

Random shuffling at the start

Click to move tiles



---

Code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sliding Puzzle Game</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .container {
            width: 306px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            border: 2px solid #000;
        }
        .tile {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: lightgray;
        }
        .empty {
            background: white;
        }
    </style>
</head>
<body>

    <h1>Sliding Puzzle Game</h1>
    <div class="container" id="puzzle-board"></div>
    <br>
    <button onclick="shuffle()">Shuffle</button>
    
    <script>
        let size = 3; // 3x3 grid
        let board = [];
        let emptyTile = { row: 2, col: 2 };

        function init() {
            let puzzleBoard = document.getElementById("puzzle-board");
            puzzleBoard.innerHTML = "";
            let count = 1;

            for (let i = 0; i < size; i++) {
                board[i] = [];
                for (let j = 0; j < size; j++) {
                    let tile = document.createElement("div");
                    tile.className = "tile";
                    if (count < size * size) {
                        tile.innerText = count;
                        board[i][j] = count;
                    } else {
                        tile.classList.add("empty");
                        board[i][j] = null;
                        emptyTile = { row: i, col: j };
                    }
                    tile.onclick = () => moveTile(i, j);
                    puzzleBoard.appendChild(tile);
                    count++;
                }
            }
            render();
        }

        function render() {
            let tiles = document.querySelectorAll(".tile");
            let index = 0;
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    tiles[index].innerText = board[i][j] ? board[i][j] : "";
                    tiles[index].classList.toggle("empty", !board[i][j]);
                    index++;
                }
            }
        }

        function moveTile(row, col) {
            let diffRow = Math.abs(row - emptyTile.row);
            let diffCol = Math.abs(col - emptyTile.col);
            
            if ((diffRow === 1 && diffCol === 0) || (diffRow === 0 && diffCol === 1)) {
                board[emptyTile.row][emptyTile.col] = board[row][col];
                board[row][col] = null;
                emptyTile = { row, col };
                render();
            }
        }

        function shuffle() {
            for (let i = 0; i < 100; i++) {
                let possibleMoves = [
                    { row: emptyTile.row - 1, col: emptyTile.col },
                    { row: emptyTile.row + 1, col: emptyTile.col },
                    { row: emptyTile.row, col: emptyTile.col - 1 },
                    { row: emptyTile.row, col: emptyTile.col + 1 }
                ].filter(pos => pos.row >= 0 && pos.row < size && pos.col >= 0 && pos.col < size);

                let move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
                moveTile(move.row, move.col);
            }
        }

        init();
    </script>

</body>
</html>


---

How to Play:

1. Click on tiles adjacent to the empty space to move them.


2. Arrange the numbers in order from 1 to 8 with the empty space at the bottom right.


3. Click "Shuffle" to randomize the tiles and start over.



Would you like to add any images or a different puzzle size?


  

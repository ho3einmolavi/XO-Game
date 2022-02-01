export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(i) {
        if (!this.isPlaying()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;

        if (!this.isWin()) {
            this.nextTurn();
        }
    }

    isWin() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const line of lines) {
            const [a, b, c] = line;

            if (this.board[a] && this.board[b] && this.board[c]) {
                if (this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
                    console.log(`${this.board[a]} wins!`);
                    return line;
                }
                console.log("game is going on...");
            }

            return null;

        }
    }

    isPlaying() {
        return !this.isWin() && this.board.includes(null);
    }

}
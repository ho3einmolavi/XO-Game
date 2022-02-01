export default class View {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="game">
                <div class="game-board">
                    Your turn: <span class="turn">X</span>
                </div>
                <div class="game-status">
                    Play on!
                </div>
                <button class="restart">Restart</button>
            </div>
            <div class="game-board">
                <div class="square" data-index=0>0</div>
                <div class="square" data-index=1>1</div>
                <div class="square" data-index=2>2</div>
                <div class="square" data-index=3>3</div>
                <div class="square" data-index=4>4</div>
                <div class="square" data-index=5>5</div>
                <div class="square" data-index=6>6</div>
                <div class="square" data-index=7>7</div>
                <div class="square" data-index=8>8</div>
            </div>
        `;

        console.log(this.root)
    }
}
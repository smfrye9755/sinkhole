import { Game } from './game.js';

const canvas = document.getElementById('gameScreen') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


if (ctx) {
    const game = new Game(ctx, canvas.width, canvas.height);

    function mainGame() {
        game.update();
        game.render();
        requestAnimationFrame(mainGame);
    }

    document.addEventListener("keydown", game.handleKeyDown);

    mainGame();
} else {
    console.error("Game Canvas not found.");
}
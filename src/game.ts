class Target {
    public targetX: number;
    public targetY: number;
    public size: number;

    constructor(targetX : number, targetY: number, size: number) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.size = size;
    }

}


export class Game {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private playerX: number;
    private playerY: number;

    private targets: Target[] = [];
    
    private randomTarget(): Target {
        return new Target(Math.floor(Math.random() * this.width), 
                          Math.floor(Math.random() * this.height), 
                          Math.floor(Math.random() * 15));
    }

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.playerX = this.width / 2;
        this.playerY = this.height / 2;
        this.targets = [this.randomTarget(), this.randomTarget(), this.randomTarget(), 
                        this.randomTarget(), this.randomTarget()];
        console.log('position:',this.playerX, this.playerY)
    }

    public handleKeyDown(event: KeyboardEvent): void {
        switch (event.key){
            case 'ArrowUp':
                this.playerY += 5;
                console.log('Moving player:', this.playerX, this.playerY)
                break;
            case 'ArrowDown':
                this.playerY -= 5;
                console.log('Moving player', this.playerX, this.playerY)
                break;
            case 'ArrowRight':
                this.playerX += 5;
                console.log('Moving player', this.playerX, this.playerY)
                break;
            case 'ArrowLeft':
                this.playerX == 5;
                console.log('Moving player', this.playerX, this.playerY)
                break;
        }
        
    }


        
    

    public update(): void {
        /*for (const target of this.targets){
            if 
        }*/

    }

    public render(): void {
        this.ctx.clearRect(0,0, this.width, this.height);
        this.ctx.fillStyle = 'blue';
        this.ctx.arc(this.playerX, this.playerY, 20, 0, Math.PI * 2, false);
        this.ctx.fill();
    }

}

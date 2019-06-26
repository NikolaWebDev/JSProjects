export function detectCollision(ball, gameObject){
    let bottomOfBall = this.position.y + this.size;
    let topOfBalls = this.position.y;
    
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfObject = this.game.paddle.position.x;
    let rightSideOfObject = 
    this.game.paddle.position.x + this.game.paddle.width;
    let bottomOfTheOBject = gameObject.position.y + gameObject.height;

    if(
        bottomOfBall >= topOfPaddle &&
        this.position.x >= leftSideOfPaddle &&
        this.position.x + this.size <= rightSideOfPaddle
    ){
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size;
    }
}


function initCanvas(){
    let ctx = document.getElementById("gm_canvas").getContext("2d");
    let backgroundImage = new Image();
    let naveImage = new Image();
    let enemies_pic1 = new Image();
    let enemies_pic2 = new Image();

    /* route sprites game */
    backgroundImage.src = "";
    naveImage.src = "";
    enemies_pic1.src = "./img/enemigo1.png";
    enemies_pic2.src = "";

    /* Dimensions of window game */
    let cW = ctx.canvas.width;
    let cH = ctx.canvas.height;

    let enemiesTemplates = function(options){
        return{
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
                image: options.image || enemies_pic1
        }
    }

    let enemies = [
        new enemiesTemplates({id: "enemies3", x: 150, y: 50, w: 80, h: 30})
    ];

    let renderEnemies = function(enemyList){
        for(let i = 0; i < enemyList.length; i++){
            let enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
        }
    }

    function Launcher(){
        this.y = 500,
        this.x = cW *.5 -25,
        this.w = 100,
        this.h = 100,
        this.direction,
            this.bg = "white",
            this.misiles = [];

        this.render = function(){
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 10, 10);
            ctx.drawImage(naveImage, this.x, this,y, 100, 90);
        }
    }

    let launcher = new Launcher();

    function animated(){
        ctx.clearRect( 0, 0, cW, cH);
       /* launcher.render();*/
        renderEnemies(enemies);
    }

    let animatedInterval = setInterval(animated, 6);

}

window.addEventListener('load', function(event){
    initCanvas();
});
//自调用函数---游戏对象
(function () {
    var score=0;
    var end=0;
    var that = null;//该变量的目的就是为了保存游戏Game的实例对象
    var stop=1;
    
    //游戏的构造函数
    function Game(map,time) {
        this.food = new Food();//食物对象
        this.snake = new Snake();//小蛇对象
        this.map = map;//地图
        this.time=time;
        this.score=0;
        this.end=0;
        that = this;//保存当前的实例对象到that变量中
    }

    //初始化游戏-----可以设置小蛇和食物显示出来
    Game.prototype.init = function () {
        //初始化游戏
        //食物初始化
        this.food.init(this.map);
        //小蛇初始化
        this.snake.init(this.map);
        //调用自动移动小蛇的方法
        this.runSnake(this.food, this.map,this.time);
        //调用按键的方法
        this.bindKey();
    };
    
    //添加原型方法---设置小蛇可以自动的跑起来
    Game.prototype.runSnake = function (food, map,time) {
        //自动的去移动
        var timeId = setInterval(function () {
            //此时的this是window
            //移动小蛇
            this.snake.move(food, map);
            //初始化小蛇
            this.snake.init(map);
            //横坐标的最大值
            var maxX = map.offsetWidth / this.snake.width;
            //纵坐标的最大值
            var maxY = map.offsetHeight / this.snake.height;
            //小蛇的头的坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            //横坐标撞墙，停止游戏
            if (headX < 0 || headX >= maxX) {
                //撞墙了,停止定时器
                clearInterval(timeId);
                this.end=1;
            }
            //纵坐标撞墙，停止游戏
            if (headY < 0 || headY >= maxY) {
                //撞墙了,停止定时器
                clearInterval(timeId);
                this.end=1;
            }
            //撞到自己了,停止游戏
            for (var i=4; i<this.snake.body.length; i++) {
                if (this.snake.body[0].x == this.snake.body[i].x && this.snake.body[0].y == this.snake.body[i].y) {
                    clearInterval(timeId);
                    this.end=1;
                    break;  
                }
            }
            //停止游戏
            document.getElementById("stop").onclick=function(){
                clearInterval(timeId);
                this.end=1;
            }

            //计算分数
            this.score=this.snake.body.length-3;
            //更改界面分数
            document.getElementById("score").innerHTML="score: "+this.score;
            //更改弹框中的分数
            document.getElementById("word3").innerHTML="游戏结束，<br/>您的分数为："+this.score;
            //更改历史最高分数和分数
            document.getElementById("word1").innerHTML="历史最高分数："+toprecord+"<br/>你的分数："+this.score;
            //判断如果结束就显示分数框
            if(this.end){
            clearInterval(timeId);
            document.getElementById("infrom-end").style.display="block";
            }
        }.bind(that),time);
    };

    //添加原型方法---设置用户按键,改变小蛇移动的方向
    Game.prototype.bindKey=function () {
        //定义变量存储上次按键的方向（向右）
        var nowKey=39;
                
        //获取用户的按键,改变小蛇的方向
        document.addEventListener("keydown",function (e) {
            //这里的this为触发keydown的事件的对象---document,

            //获取按键的值
            switch (e.keyCode){
                case 37:
                        //判断是否是原来方向的反方向
                        if(nowKey!=39){
                            this.snake.direction="left";
                            this.snake.body[0].url="url(images/head.png) -0px -35px no-repeat";
                            nowKey=37;
                        }
                        break;
                case 38:
                        //判断是否是原来方向的反方向
                        if(nowKey!=40){
                            this.snake.direction="top";
                            this.snake.body[0].url="url(images/head.png) -35px -35px no-repeat";
                            nowKey=38;
                        }
                        break;
                case 39:
                       //判断是否是原来方向的反方向
                       if(nowKey!=37){
                            this.snake.direction="right";
                            this.snake.body[0].url="url(images/head.png) -0px -0px no-repeat";
                            nowKey=39;
                        }
                        break;
                case 40:
                       //判断是否是原来方向的反方向
                       if(nowKey!=38){
                            this.snake.direction="bottom";
                            this.snake.body[0].url="url(images/head.png) -35px -0px no-repeat";
                            nowKey=40;
                        }
                        break;
            }
        }.bind(that),false);

    };

    //把Game暴露给window,外部就可以访问Game对象了
    window.Game = Game;
}());


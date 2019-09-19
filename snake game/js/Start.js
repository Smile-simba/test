//点击重新开始按钮重新启动游戏
document.getElementById("play").onclick=function(){
   document.getElementById("stop").onclick();
   startGame();   //重新启动游戏
}

//点击按钮最高分数显示
document.getElementById("record").onclick=function(){
    document.getElementById("inform-record").style.display="block";   //提示框显示
}
//点击按钮最高分数隐藏
document.getElementById("btn1").onclick=function(){
    document.getElementById("inform-record").style.display="none";   //提示框消失
}


//点击按钮游戏玩法显示
document.getElementById("intro").onclick=function(){
    document.getElementById("inform-intro").style.display="block";   //提示框显示
}
//点击按钮游戏玩法隐藏
document.getElementById("btn2").onclick=function(){
    document.getElementById("inform-intro").style.display="none";   //提示框消失
}


//点击按钮难易度显示
document.getElementById("difficulty").onclick=function(){
    document.getElementById("difficult").style.display="block";   //提示框困难显示
    document.getElementById("easy").style.display="block";   //提示框容易显示
}
//点击按钮困难隐藏
document.getElementById("difficult").onclick=function(){
    time=150;
    document.getElementById("easy").style.display="none";   //提示框容易消失
    document.getElementById("difficult").style.display="none";   //提示困难框消失
}
//点击按钮容易隐藏
document.getElementById("easy").onclick=function(){
    time=300;
    document.getElementById("easy").style.display="none";   //提示框容易消失
    document.getElementById("difficult").style.display="none";   //提示困难框消失
}


//点击按钮分数框隐藏
document.getElementById("btn3").onclick=function(){
    document.getElementById("infrom-end").style.display="none";   //提示框消失
}
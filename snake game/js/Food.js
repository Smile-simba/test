//自调用函数----食物
(function () {
    var elements = [];//用来保存每个小方块食物的
    //食物构造函数
    function Food() {
        //横纵坐标
        this.x = 0;
        this.y = 0;
        //宽和高
        this.width = 35;
        this.height = 35;
        //背景图片
        this.backgroundImage="url(images/food.png)";
    }

    //为原型添加初始化的方法——在页面上显示这个食物
    Food.prototype.init = function (map) {
        //先删除小食物
        remove();

        //创建div
        var div = document.createElement("div");
        //把div加到map中
        map.appendChild(div);
        //设置div的样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundImage = this.backgroundImage;
        //脱离文档流
        div.style.position = "absolute";
        //随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //把div加入到数组elements中
        elements.push(div);
    };

    //私有的函数---删除食物
    function remove() {
        //elements数组中有这个食物
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个子元素的父级元素,然后删除这个子元素
            ele.parentNode.removeChild(ele);
            //再次把elements中的这个子元素也要删除
            elements.splice(i, 1);
        }
    }

    //把Food暴露给Window,外部可以使用
    window.Food = Food;
}());

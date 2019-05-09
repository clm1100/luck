var num = new PrizeBum();
var speed = 30;
// 插值差一颗全局变量
var prizeNum = -1;

function roll(){
    var index = num.getdata();
    $("ul li").eq(index).addClass("active").siblings().removeClass("active");
    if(num.getcircle()>5){
        speed+=num.getcircle()*2;
    }
    var timer = setTimeout(roll,speed);
    if(prizeNum==index&&num.getcircle()>=10){
        clearTimeout(timer);
        // 初始化方便第二次继续抽奖;
        lock = true;
        speed = 30;
        num.initcircle();
    }
}

var lock = true;
$("button").click(function(){
    if(!lock) return
    lock = false;
    roll();
    prizeNum = 3;
})

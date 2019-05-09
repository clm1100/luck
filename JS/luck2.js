var num = new PrizeBum();
var speed = 30;

function roll(cb){
    var index = num.getdata();
    $("ul li").eq(index).addClass("active").siblings().removeClass("active");
    if(num.getcircle()>5){
        speed+=num.getcircle()*2;
    }
    var timer = setTimeout(roll.bind(null,cb),speed);
    cb&&cb(index,timer);
}

$("button").click(function(){
    roll(function(index,timer){
        if(index==3&&num.getcircle()>=10){
            clearTimeout(timer);
        }
    });
})

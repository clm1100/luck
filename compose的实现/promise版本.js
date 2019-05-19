function compose(arr){
    return function app(context,next){
        return next(0);
        function next(i){
            const fn = arr[i++];
            if(!fn) return ;
            fn(next)
        }
    }
}

var add10 = (x,next)=>x+10;
var add20 = (x,next)=>x+20;
var add30 = (x,next)=>x+30;

var arr = [add10,add20,add30]

function a(){
    return next(0);
    function next(i){
        var fn = arr[i++];
        if(!fn) return;
        fn(x,next)
    }
}
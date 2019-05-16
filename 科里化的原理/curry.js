
function curry(fn){
    var len = fn.length;
    var arr = [];
    return function f(){
        arr = [...arr,...arguments];
        if(arr.length>=len){
            return fn(...arr);
        }else{
            return f;
        }
    }
}

function add(a,b,c){
    return a+b+c
}

var newadd = curry(add);
// console.log(newadd(1,2)(9))
// console.log(newadd(1)(2)(9))
console.log(newadd(1,2,9))


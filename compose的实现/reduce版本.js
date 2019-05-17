// es5语法
// function compose(arr){
//     return  arr.reduce(function(a,b){
//         return function(arg){
//             return  a(b(arg))
//         }
//     })
// }
// es6语法
let compose= arr=>arr.reduce((a,b)=>(arg)=>a(b(arg)))

function add10(x){
    return x+10
}
function add20(x){
    return x+20
}
function add30(x){
    return x+30
}

var newfn = compose([add10,add20,add30]);
console.log(newfn(90));
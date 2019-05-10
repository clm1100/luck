var p = null
var lock = true;
function P(t){
    console.log(999)
    p= new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
            if(lock){
           P(t);

            }
        },t)
    })
}
 $("button").click(function(){
    P(300);
    // p.then(function(){
    //     console.log(123);
    //     lock = false;
    // })
 })
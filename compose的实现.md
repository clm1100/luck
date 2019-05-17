#### redux的compose是利用reduce
express 定义中间件时必须传递一个next参数,内部原理通过迭代递归实现调用,调用过程就是一个函数嵌套;
```
function fn1(){
    console.log(1);
    fn2()
    console.log(2)
}
function fn2(){
    console.log(3)
}
fn1();
```
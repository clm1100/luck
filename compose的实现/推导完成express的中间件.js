
// 

// 中间件的书写形式必须按照express的书写形式;
// 核心原理
/**
 * 1、闭包保存 中间件数组的索引
 * 2、中间件必须有next参数
 * 3、context共享机制,中间件共享一个context 
 * 4、中间件函数内部调用next
 * 5、中间件处理函数定义next的执行过程
 *  */

var add10 = (context, next) => { context.a += 10; next() }
var add20 = (context, next) => { context.a += 20; next() }
var add30 = (context, next) => { context.a += 30; next() }

var obj = { a: 200 }


function express() {
    var arr = []
    function app(x) {
        var index = 0
        return next();
        function next() {
            var fn = arr[index++];
            if (!fn) return;
            fn(x, next)
        }
    }
    app.use = function () {
        let newarr = [...arguments];
        arr = arr.concat(newarr)
    }
    return app;
}
var app = express()

app.use(add10, add20, add30);
app(obj);
console.log(obj);
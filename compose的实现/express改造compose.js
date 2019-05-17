function express(){
    var funcs = [];
    var app = function(req,res){
        var i = 0;
        function next(){
            var task = funcs[i++];
            if(!task) return 
            task(next)
        }
        next()
    }
    app.use = function(task){
        funcs.push(task)
    }
    return app
}

function add10(x){
    console.log(123)
    x()
}
function add20(x){
    console.log(20)
    x()
}
function add30(x){
    console.log(30)
    x()
}

var app = express();
app.use(add10)
app.use(add20)
app.use(add30)

app();

#### bind的实现
+ 1、首先这是一个函数的方法;
+ 2、调用这个方法的函数返回一个待执行的函数
根据以上两点得出代码如下:
```
Function.prototype.mybind = function(){
    var _this = this
    return function(){
        return _this.apply()
    }
}
```
+ 3、这个方法需要多个参数，第一个参数尤其重要，其余参数可以转化为一个数组。
代码进一步完善如下：
```
Function.prototype.mybind = function(){
    var [obj,...rest] = [...arguments];
    var _this = this
    return function(){
        return _this.apply(obj)
    }
}
```
+ 4、将两次传入的参数进行拼接后在执行:
```
Function.prototype.mybind = function(){
    var [obj,...rest] = [...arguments];
    var _this = this
    return function(){
        return _this.apply(obj,[...rest,...arguments])
    }
}
```
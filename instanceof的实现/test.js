// 构造函数
function Student(){
    this.name= name;
    this.age = age;
    this.socre = score
}
// 构造函数的原型
Student.prototype.say = function(){
    console.log(this.name)
}
// 实例对象
var stu = new Student("zs",18,99)
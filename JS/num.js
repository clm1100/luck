class PrizeBum{
    constructor(){
        this.arr = [
            0,1,2,3,7,11,15,14,13,12,8,4
        ]
        this.index = 0;
        this.max = this.arr.length;
        this.circle = 0;
    }
    getdata(){
        var res = this.arr[this.index];
        this.index++;
        if(this.index>this.max-1){
            this.index=0;
            this.circle++;
        }
        return res;
    }
    getcircle(){
        return this.circle
    }
    initcircle(){
        this.circle=0;
    }
}
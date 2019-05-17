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
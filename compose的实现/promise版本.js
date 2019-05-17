function compose(arr){
    return function(context,next){
        let index = -1;
        return dispatch(0);
        function dispatch(i){
            index = i;
            const fn = arr[i]||next;
        }
    }
}
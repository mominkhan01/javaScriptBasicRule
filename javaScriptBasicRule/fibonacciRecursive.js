function fibonacci(n){
    var fibo = [0, 1];
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var result = fibonacci(10);
console.log(result);
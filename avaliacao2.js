function isPerfectSquare(x)
{
    let s = parseInt(Math.sqrt(x))
    return (s * s == x)
}
 
function isFibonacci(n)
{
 if (isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4)){
        return `O número ${n} pertence a sequência Fibonacci.`
    } else {return `O número ${n} não pertence a sequência Fibonacci.`}

}
console.log(isFibonacci(25))
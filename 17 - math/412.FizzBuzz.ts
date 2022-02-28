/* A: Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
 */

//? 給定一個整數 n，返回一個長度 n 的 array。index 可以被 3 整除該值 Fizz，可以被 5 整除該值 Buzz，可同時被兩數整除，該值 FizzBuzz。

var fizzBuzz = function (n: number): string[] {
    const answer: string[] = []

    while (n-- > 0) {
        answer[n] = String(n + 1)
        if ((n + 1) % 5 === 0) answer[n] = 'Buzz'
        if ((n + 1) % 3 === 0) answer[n] = 'Fizz'
        if ((n + 1) % 15 === 0) answer[n] = 'FizzBuzz'
    }

    return answer
}

console.log(fizzBuzz(15))

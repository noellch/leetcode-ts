/* A: Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
 */

//? 給定一個整數 n，返回一個長度 n 的 array。index 可以被 3 整除該值 Fizz，可以被 5 整除該值 Buzz，可同時被兩數整除，該值 FizzBuzz。

var fizzBuzz = function (n) {
    const answer = []

    for (let i = 0; i < n; i++) {
        answer[i] = `${i + 1}`
        if ((i + 1) % 3 === 0) answer[i] = 'Fizz'
        if ((i + 1) % 5 === 0) answer[i] = 'Buzz'
        if ((i + 1) % 15 === 0) answer[i] = 'FizzBuzz'
    }

    return answer
}

console.log(fizzBuzz(15))

//* 簡單到懷疑是不是有陷阱...

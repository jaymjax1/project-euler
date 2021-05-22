// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


const squareOfSum = (num) => {
    let numbers = []
    for (i = 1; i <= num; i++) {
        numbers.push(i);
    }
    let sum = numbers.reduce((acc,curr) => {
        return acc + curr
    },0)
    return sum*sum
}

const sumOfSquare = (num) => {
    let numbers = []
    for (i = 1; i<=num; i++) {
        numbers.push(i*i)
    }
    let sum = numbers.reduce((acc,curr) => {
        return acc + curr
    },0)
    return sum
}

console.log(squareOfSum(100) - sumOfSquare(100))
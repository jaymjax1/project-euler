// Question:
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Fibonacci:
// Founder - Leonardo Fibonacci
// Odd - Odd - Even Pattern F_{n} = F_{n-1} + F_{n-2}
// Phi = 1.618...

const iterative = (limit) => {
    let temp = 0;
    let prev = 0;
    let curr = 1;
    let sum = 0;

    while (curr < limit) {
        temp = prev ; //0 1
        prev = curr; // 1 1
        curr = temp + prev  // 1 2
        if (prev % 2 === 0) {
            sum += prev
        }
    }
    return sum

}

// What you believe: I believe that my function will return a sum if it's input is divisible by 2
// What is a step easier: A step easier would be 1 less number (n-1)
// Base case: if n = 0 or n = 1 then return 02
 

console.time('iterative')
iterative(4000000)
console.timeEnd('iterative')
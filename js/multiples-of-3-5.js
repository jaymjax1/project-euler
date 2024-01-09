// Question:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Iterative:
// Strategy: Loop from 0 to 1000, if number can be divided, plus/equals it to a variable. Then return
// Run-Time: O(n)

const iterative = (max, one, two) => {
    let total = 0;
    for (i = 0; i<1000; i++) {
        if (i%one === 0 || i%two === 0) {
            total += i
        }
    }
    return total;
}

// Recursive:
// Base Case: max = 0 then return 0 
// One Step Simpler: One digit smaller
// Run-Time: O

const recursive = (max, one, two) => {
    if (max === 0) {
        return 0
    }

    if (max%one === 0 || max%two === 0) {
        return max + recursive(max-1, one, two)
    }
    return recursive(max-1,one,two )
}

// Dynamic Programming:
// Strategy: Memoize

var table = {}
const dynamic = (max, one, two) => {
    if (table[max]) {
        return table[max];
    }

    if (max === 0) {
        return 0
    }

    if (max%one === 0 || max%two === 0) {
        table[max] = max + dynamic(max-1, one, two)
        return max + dynamic(max-1, one, two)
    }

    return table[max] = dynamic(max-1,one,two )
}

console.time('iterative')
    iterative(1000,3,5)
    iterative(1000,3,5)
    iterative(1000,3,5)
    iterative(1000,3,5)
console.timeEnd('iterative')

console.time('recursive')
    recursive(999,3,5)
    recursive(999,3,5)
    recursive(999,3,5)
    recursive(999,3,5)
console.timeEnd('recursive')

console.time('dynamic')
    dynamic(999,3,5)
    dynamic(999,3,5)
    dynamic(999,3,5)
    dynamic(999,3,5)
console.timeEnd('dynamic')



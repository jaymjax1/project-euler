var utils = require('./utils/utils.js')

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

/** Strategy:
 * You don't have to iterate to the top to get all factors, you can calculate them with
 * just the square root of the number if composite, or half the number if otherwise if finding prime factors!
 */

/** Edge Case:
 * Factors of 2 = 1 * 2, but exclude 1 
 */

/** Run Time: 30 seconds */
const getFactors = (num) => {
    const factors = []
    for (let i = 1; i<=num; i++) {
        if (num%i === 0) {
            factors.push(i)
            factors.push(num/i)
        }
    }
    return [...new Set(factors)];
}

const isPrime = (num) => {
    return getFactors(num).length === 2
}

const get10001Prime = () => {
    const primes = []
    for (let i = 2; i<= Number.MAX_VALUE; i++) {
        if (isPrime(i) === true) {
            primes.push(i)
            if (primes[10000]) {
                return primes[10000]
            }
        }
    }
    return 'nope'
}

utils.timer(get10001Prime)
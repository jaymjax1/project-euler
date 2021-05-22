// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Prime Factors Properties:
// Prime Number - A number that is only divisible by  1 and itself (e.g 7 can only be divided by 1 and 7)
// Factor - A number that can be divided into another number. (e.g 1,2,4 can be divided into 4)
// Prime Factor - A number that can be divided into another number and is only divisible by itself
// Any number larger than half of your number is not a factor (e.g )
// A composite number's largest prime factory is less than the square root of itself

import { logger } from './utils';
const primes = []


/** Function to test if a number is prime */
const isPrime = (num) => {
    for (i=2; i<num; i++) {
        if (num%i === 0) {
            return false
        }
    }
    return num !== 1 && num !== 0
}

/** Function to test if a number is prime by only going up to the square root*/
const isPrimeOpt = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num !== 1 && num !== 0;
}

/** Function to test if a number is prime using tabulation */
const isPrimeOptDynamic = num => {
    if (primes[num]) {
        return primes[num]
    }
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            primes[num] = false
            return false;
        }
    }
    primes[num] = num !== 1 && num !== 0;
    return num !== 1 && num !== 0;
}

/** Function to grab all prime numbers up to a certain number */
const getPrimes = (num) => {
    for (i = 1; i < num/2; i++) {
        if (isPrimeOpt(i) === true) {
            primes.push(i)
        }
    }
}

/** Function to grab all factors */
const getPotentialFactors = (num) => {
    const factors = [];
    for (i=1; i<=Math.sqrt(num); i++) {
        logger(i)
        if (num%i === 0 ) {
            factors.push(i)
            factors.push(num/i)
        }
    }
    return factors

}

/** Function to test if a number if prime by testing the length of array of factors */
const isPrimeFunctional = (num) => {
    return getPotentialFactors(num).length === 2
}

// console.time('isPrime')
// isPrime(10000)
// console.timeEnd('isPrime')

// console.time('isPrimeOpt')
// isPrimeOpt(10000)
// console.timeEnd('isPrimeOpt')

// console.time('isPrimeOptDynamic')
// isPrimeOptDynamic(729564720173)
// console.timeEnd('isPrimeOptDynamic')

console.time('Largest Prime Factor')
console.log('Getting potential factors...')
const allFactors = getPotentialFactors(600851475143);
console.log('Getting unique factors...');
const uniqueFactors = [...new Set(allFactors)]
console.log('Getting largest factors');
const largestFactor = uniqueFactors.reduce((acc,factor) => {
    if (isPrimeFunctional(factor) && factor > acc) {
        acc = factor
        return acc
    }
    return acc
},0)
console.log(largestFactor)
console.timeEnd('Largest Prime Factor')

/** Summation of Primes
 * Find the sum of all the primes below two million
 */

 const utils = require('./utils/utils');

 const getPrimes = (number) => {
     const primes = []
     for(i=1;i<=number;i++){
        if (utils.isPrime(i)) {
            primes.push(i)
        }
     }
     return primes
 }

 const addPrimes = (primes) => {
     return primes.reduce((acc,curr) => {
         return acc + curr
     })
 }

 console.log(addPrimes(getPrimes(100)))



/** Question
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

 /** Strategy
  * This does not require programming at all. Compute the prime factorization of each number from 1 to 20, and multiply the greatest power of each prime together:
  */

/** Brute Force:
 * Start with 40 and loop up to indefinite.
 * For each number, loop over that with a decrement from 20 and mod the outer loop with the inner loop
 * IF it gets to 1 then that's the answer
 */

const test = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

const isDivisibleByAll = (num,test) => {
    return test.reduce((acc,curr) => {
        if (num%curr === 0) {
            return acc
        }
        return acc+1
    },0)
}


const veryBrute = (test) => {
    for (i = 1; i <=Number.MAX_VALUE; i++) {
        if (isDivisibleByAll(i,test) === 0) {
            return i;
        } 
    }   
}


// console.log(isDivisibleByAll(2520,test))
console.log(veryBrute(test))

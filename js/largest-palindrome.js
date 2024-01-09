/** Problem
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/** Brute strategy:
 * Have an outer and inner loop. Decrement and get product. test if it's a palindrome. If so, pop on a stack, then return the max number
 */

/** Programming Tips:
 * Change number toString to get array like indices. String.length is without parens because its a property, not a method
 * substring(x,y) is inclusive for x but exclusive for y (i.e will start at the number BEFORE)
 * return Math.max(...palindromes); Max of an array
 * Array length Aand substring is different. 
 */

const palindromesBrute = []
const palindromesTabulation = {}

const largestPalindromeBrute = () => {
    for (i = 999; i > 0; i--) {
        for (j = 999; j>0; j--) {
            if (isPalindrome1(i*j)) {
                palindromesBrute.push(i*j)
            }
        }
    }
    return Math.max(...palindromesBrute);
}

const largestPalindromeTabulation = () => {
    for (i = 999; i > 0; i--) {
        for (j = 999; j>0; j--) {
            if (!palindromesTabulation[i*j]) {
                if (isPalindrome2(i*j)) {
                    palindromesTabulation[i*j] = i*j;
                }
            }
        }
    }
    return Math.max(...Object.values(palindromesTabulation))
}

/* FASTEST after three loops*/
const isPalindrome1 = (num) => {
    const n = num.toString();
    if (n.length === 1 ) {
        return true
    }
    if (n[0] === n[1] && n.length === 2) {
        return true
    }
    if (n[0] === n[n.length-1]) {
        return isPalindrome1(n.substring(1,n.length-1))
    }
    return false
}

const isPalindrome2 = (num) => {
    const n = num.toString();
    const fh = n.substring(0, n.length/2)
    const sh = n.substring(n.length/2, n.length).split("").reverse().join();
    if(fh === sh) {
        return true 
    }
    return false
}

// console.time('brute w palindrome1')
// largestPalindromeBrute1()
// console.timeEnd('brute w palindrome1')

// console.time('efficient')
// largestPalindromeTabulation()
// console.timeEnd('efficient')

// console.time('palindrome1')
// for (i = 0; i < 3; i++) {
//     isPalindrome1(1001010101010)
// }
// console.timeEnd('palindrome1')

// console.time('palindrome2')
// for (i = 0; i < 3; i++) {
//     isPalindrome2(1001010101010)
// }
// console.timeEnd('palindrome2')

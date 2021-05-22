/** There exists one pythagorean triplet such that a + b + c = 1000 and a^2 + b^2 = c^2 
 * 
*/

/** Strategies
 * e.g 3^2 + 4^2 = 9 + 16 = 25 = 5^2
 * 3 + 4 + 5 = 12
 * x + y + z = 1000
 * x/10 + y/10 + z/10 = 10
 */


 // Brute Force
 const findThreeNumbers = () => {
    const numbers = []
    for (i = 1; i <= 1000; i++) {
        for (j = 1; j<=1000; j++) {
            for (k = 1; k<= 1000; k++) {
                if (i+j+k === 1000) {
                    numbers.push([i,j,k])
                }
            }
        }
    }
    return numbers
 }

  /**
   * More Efficient:
   * a,b and c will be less than half of 1000 each
   */
  const findThreeNumbers2 = () => {
    const numbers = []
    for (i = 1; i <= 1000/2; i++) {
        for (j = 1; j<=1000/2; j++) {
            for (k = 1; k<= 1000/2; k++) {
                if (i+j+k === 1000) {
                    numbers.push([i,j,k])
                }
            }
        }
    }
    return numbers
 }


 const isTriplet = (set) => {
    return (set[0]*set[0]) + (set[1]*set[1]) === (set[2]*set[2]) ? true : false
 }

 const findTriplet = (numbers) => {
    return numbers.filter((num) => {
        return isTriplet(num)
    })
 }

 const findProduct = (set) => {
    return set[0].reduce((acc,curr) => {
        return acc * curr
    })
 }


console.time('Get Special Triplet')
console.log(findProduct(findTriplet(findThreeNumbers())));
console.timeEnd('Get Special Triplet')

console.time('Get Special Triplet 2')
console.log(findProduct(findTriplet(findThreeNumbers2())));
console.timeEnd('Get Special Triplet 2')

/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(pairs.length === 0) return [];
        
        const result = [[...pairs]]
        for(let i = 1; i < pairs.length; i++) {
            const keyPair = pairs[i];
            let j = i - 1

            while(j >= 0 && pairs[j].key > keyPair.key) {
                pairs[j + 1] = pairs[j];
                j--;
            }
            
            pairs[j + 1] = keyPair;
            result.push([...pairs]);
        }
        return result;
    }
}

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
    swap(pairs, i, j) {
        const tmp = pairs[i];
        pairs[i] = pairs[j];
        pairs[j] = tmp;
    }
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(pairs.length === 0) return [];
        
        const result = [[...pairs]]
        for(let i = 1; i < pairs.length; i++) {
            let j = i - 1
            let tmp = i
            while(j >= 0) {
                if(pairs[tmp].key < pairs[j].key) {
                    this.swap(pairs, tmp, j);
                }
                j--;
                tmp--;
            }
            result.push([...pairs]);
        }
        return result;
    }
}

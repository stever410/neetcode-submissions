class MinHeap {
    heap: any[];

    constructor() {
        this.heap = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number) {
        // while(val < this.heap[Math.floor(i/2)])
        this.heap.push(val);
        let index = this.heap.length - 1;
        while (index > 1 && this.heap[index] < this.heap[this.parent(index)]) {
            const parentIndex = this.parent(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length <= 1) return -1; // only dummy exists
        if (this.heap.length === 2) {
            // only one real element
            return this.heap.pop();
        }

        const root = this.heap[1];
        // Move last element to root and shrink
        this.heap[1] = this.heap.pop() as number;

        let index = 1;
        while (this.leftChild(index) < this.heap.length) {
            let smallestChild = this.leftChild(index);
            if (this.rightChild(index) < this.heap.length && this.heap[this.rightChild(index)] < this.heap[smallestChild]) {
                smallestChild = this.rightChild(index);
            }
            if (this.heap[index] <= this.heap[smallestChild]) break;
            this.swap(index, smallestChild);
            index = smallestChild;
        }
        return root;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.heap.length === 1) {
            return -1;
        }
        return this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums: number[]) {
        this.heap = [0, ...nums];
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 1; i--) {
            let index = i;
            while (this.leftChild(index) < this.heap.length) {
                let smallestChild = this.leftChild(index);
                if (this.rightChild(index) < this.heap.length && this.heap[this.rightChild(index)] < this.heap[smallestChild]) {
                    smallestChild = this.rightChild(index);
                }
                if (this.heap[index] <= this.heap[smallestChild]) break;
                this.swap(index, smallestChild);
                index = smallestChild;
            }
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    parent = (i: number) => Math.floor(i / 2);
    leftChild = (i: number) => 2 * i;
    rightChild = (i: number) => 2 * i + 1;
}
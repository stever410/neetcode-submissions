class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0) return -1;
        let currentNode = this.head;
        let i = 0;
        while(currentNode) {
            if(i === index) {
                return currentNode.val;
            }
            ++i;
            currentNode = currentNode.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val, this.head);
        this.head = newNode;
        if(this.tail === null) this.tail = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if(this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || this.head === null) return false;
        if(index === 0) {
            this.head = this.head.next;
            if(this.head === null) this.tail = null;
            return true;
        }

        let prevNode = this.head;
        let i = 0;
        while(prevNode.next && i < index - 1) {
            ++i;
            prevNode = prevNode.next;
        }

        if(!prevNode.next) return false;

        const toRemoveNode = prevNode.next;
        prevNode.next = toRemoveNode.next;
        if(toRemoveNode === this.tail) this.tail = prevNode;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let currentNode = this.head;
        const result = [];
        while(currentNode) {
            result.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return result;
    }
}

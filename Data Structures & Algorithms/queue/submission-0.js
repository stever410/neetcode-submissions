class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()) return -1;
        const tailNode = this.tail;
        this.tail = this.tail.prev;
        if(this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return tailNode.value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.isEmpty()) return -1;
        const headNode = this.head;
        this.head = this.head.next;
        if(this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        return headNode.value;
    }
}

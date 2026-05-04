class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        const node = new TreeNode(key, val);
        if (!this.root) {
            this.root = node;
            return;
        }
        this.insertNode(this.root, node);
    }

    insertNode(root, node) {
        if (!root) return node;
        if (node.key > root.key) {
            root.right = this.insertNode(root.right, node);
        } else if (node.key < root.key) {
            root.left = this.insertNode(root.left, node);
        } else {
            root.value = node.value;
        }
        return root;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if (!this.root) return -1;

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.key > key) {
                currentNode = currentNode.left;
            } else if (currentNode.key < key) {
                currentNode = currentNode.right;
            } else {
                return currentNode.value;
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if (!this.root) return -1;

        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    /**
     * @returns {number}
     */
    getMax() {
        if (!this.root) return -1;

        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    _removeNode(node, key) {
        if (!node) return null;

        if (key < node.key) {
            node.left = this._removeNode(node.left, key);
            return node;
        }
        if (key > node.key) {
            node.right = this._removeNode(node.right, key);
            return node;
        }

        if (!node.left && !node.right) {
            return null;
        }
        if (!node.left) {
            return node.right;
        }
        if (!node.right) {
            return node.left;
        }
        // Two child nodes
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;
        node.key = minRight.key;
        node.value = minRight.value;
        node.right = this._removeNode(node.right, minRight.key);
        return node;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const result = [];
        const stack = [];
        let currentNode = this.root;

        while (currentNode || stack.length > 0) {
            while(currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            currentNode = stack.pop();
            result.push(currentNode.key);
            currentNode = currentNode.right;
        }
        return result;
    }
}
class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.table = Array.from({ length: capacity }, () => []);
        this.size = 0;
    }

    hash(key) {
        return Math.abs(key) % this.table.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        for (let i = 0; i < this.table[this.hash(key)].length; i++) {
            if (key === this.table[this.hash(key)][i][0]) {
                this.table[this.hash(key)][i][1] = value;
                return;
            }
        }

        console.log("Inserting", key, value);
        this.size++;

        if (this.getSize() / this.getCapacity() >= 0.5) {
            console.log(`Resizing at ${this.getSize()}, cap ${this.getCapacity()}`);
            this.resize();
            this.size++;
        }

        const index = this.hash(key);
        this.table[index].push([key, value]);
    }

    /**
     * @param {number} key
     * @returns {number} keys[i] is an integer
     */
    get(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (key === this.table[index][i][0]) {
                return this.table[index][i][1];
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (key === this.table[index][i][0]) {
                this.table[index].splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.table.length;
    }

    /**
     * @return {void}
     */
    resize() {
        const tmpTable = this.table;
        this.table = Array.from({ length: this.table.length * 2 }, () => []);
        this.size = 0;

        for (let i = 0; i < tmpTable.length; i++) {
            for (let j = 0; j < tmpTable[i].length; j++) {
                this.insert(tmpTable[i][j][0], tmpTable[i][j][1]);
            }
        }
    }
}

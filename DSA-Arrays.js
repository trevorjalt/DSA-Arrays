const Mem = require('./memory')
// assign memory instance (copy instance allows us to use the blueprint memory class and our array class)
const memory = new Mem()

// Initializing and Pushing
    // Array starts with length of 0
        // Array starts with _capacity = 0
    // Pointer to 0 blocks of memory

    // Increase amount of memory to push new element using _resize method
        // If length > capacity, resize according to SIZE_RATIO
    // Set the value of the final block to contain the new value by setting this.ptr + length equal to the value

    // Allocate new, larger chunk of memory
    // Copy any existing values from the old to the new chunk
    // Free the old chunk

    // To retrieve, simply add the index to the start position.

    // To pop a value from the end of the array, leave an extra space which will be filled at next push

    // To insert, shift all the values after the new value back 1 position, then put the new value in its correct place

    // To remove, similar to insert, except copy values backward to fill the space where you removed the value

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this. ptr = memory.allocate(this.length)
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length+1) * Array.SIZE_RATIO)
        }

        memory.set(this.ptr + this.length, value)
        this.length++
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)

        if (this.ptr === null) {
            throw new Error('Out of memory')
        }

        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index)
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error')
        }

        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }

        if (this.length >= this._capactiy) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }

        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
}
Array.SIZE_RATIO = 3

function main () {
    
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array()

    // Add an item to the array
    arr.push(3)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)

    arr.pop()
    arr.pop()
    arr.pop()

    console.log(arr)

    console.log(arr.get(0))

    arr.pop()
    arr.pop()
    arr.pop()
    arr.push('tauhida')
    console.log(arr.get(0))

    console.log(arr)
}

main()
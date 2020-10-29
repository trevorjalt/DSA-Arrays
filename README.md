# Working with Arrays

## 2) Explore the push() method
Using the Array class you just created above, add an item to the array. Use the following function:

````
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
````

### What is the length capcity and memory address of your array?

Length: 1
Capcity: 3
Memory Address: 0

Add the following in the main function and then print the array:

````
arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);
````

### What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

Length: 6
Capacity: 12
Memory Address: 3

The capacity increased by (+n * 3)
The memory address moved to the start of the resize.

## 3) Explore the pop() method
Add the following in the main function and then print the array:

````
arr.pop();
arr.pop();
arr.pop();
````

### What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

Length: 3
Capacity: 12
Memory Address: 3

The array wasn't resized, but rather removed the values and left extra space to be filled at the next push

## 4) Understanding more about how arrays work

### Print the 1st item in the array arr.

````
A: 

console.log(arr.get(0)) // 3
````

### Empty the array and add just 1 item: arr.push("tauhida");

````
A:
...
arr.pop()
arr.pop()
arr.pop()
arr.push('tauhida')
````

### Print this 1 item that you just added. What is the result? Can you explain your result?

````
A: 

console.log(arr.get(0)) // NaN, only accepts integers
````

### What is the purpose of the _resize() function in your Array class?

The _resize() function helps reset the capacity in a way that helps optimize performance by allocating storage for future use.

## 5) URLify a string

A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be:

* Input: tauhida parveen

* Output: tauhida%20parveen

* Input: www.thinkful.com /tauh ida parv een

* Output: www.thinkful.com%20/tauh%20ida%20parv%20een

````
function urlify(str) {
    const arr = str.split('')

    const urlStr = arr.map(char => char === ' ' ? '%20' : char)

    return urlStr.join('')
}
````

## 6) Filtering an array

Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

````
function filterArr(arr) {
    let filteredArr = []

    arr.map(element => element >= 5 ? filteredArr.push(element) : '')
    
    return filteredArr
}
````

## 7) Max Sum in the array

You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

* Input: [4, 6, -3, 5, -2, 1]
* Output: 12

````
function maxSum(arr) {
    let sum = 0;
    let maxSum = 0;

    // nested loops, iterate over array length twice to determine largest sum in the sequence. 
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    
    return maxSum;
}
````

## 8) Merge arrays

Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

* Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
* Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

````
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}


OR


function mergeArrays(arr1, arr2) {
    const newArr = arr1

    arr2.forEach((num) => {
        let i = 0;

        while (i < newArr.length) {
            if (num <= newArr[i]) {
                newArr.splice(i, 0, num);
                break;
            }
            i++;
        }
    });

    return newArr;
}
````

## 9) Remove characters

Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

* Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
* Output: 'Bttl f th Vwls: Hw vs. Grzny'

````
function removeCharacters(str, chars) {
    let newStr = '' 
    let charArr = []

    for (let i = 0; i < chars.length; i++) {
        charArr.push(chars[i])
    }

    for (let j = 0; j < str.length; j++) {
        if (!charArr.includes(str[j].toLowerCase())) {
            newStr += str[j]
        }
    }

    return newStr
}
````
 
## 10) Products

Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

* Input:[1, 3, 9, 4]
* Output:[108, 36, 12, 27]

````
function products(arr) {
    let productArr = []

    function multiply(array) {
        let num = 1

        for (let i = 0; i < array.length; i++) {
            num = num * array[i]   
        }
        return num
    }

    for (let i = 0; i < arr.length; i++) {
        let product = [...arr]
        product.splice(i, 1)
        productArr.push(multiply(product))
    }

    return productArr
}
````

## 11) 2D array

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

* Input:

````
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
````

* Output:

````
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
````

````
function zeroArray(matrix) {
    let row = false
    let col = false

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const value = matrix[i][j]
            if (value === 0) {
                if (i === 0) row = true
                if (j === 0) col = true
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    if(row) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }

    if(col) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }

    return matrix
}
````

## 12) String rotation

Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

* Input: amazon, azonma

* Output: False

* Input: amazon, azonam

* Output: true

````
function stringRotation(str1, str2) {
    if (!str1 || !str2) {
        return false
    }

    if (str1.length != str2.length) {
        return false
    }

    return (str1 + str1).includes(str2)
}
````
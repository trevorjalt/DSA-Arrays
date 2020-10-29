function urlify(str) {
    const arr = str.split('')

    const urlStr = arr.map(char => char === ' ' ? '%20' : char)

    return urlStr.join('')
}

console.log(urlify('www.thinkful.com /tauh ida parv een'))



function filterArr(arr) {
    const filteredArr = []

    arr.map(element => element >= 5 ? filteredArr.push(element) : '')
    
    return filteredArr
}

const filterTest = [5, 3, 5, 7, 8, 2, 1, 4, 10]
console.log(filterArr(filterTest))



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

const sumTest = [4, 6, -3, 5, -2, 1] // 12
const sumTest2 = [3, 2, -3, 5, -1, 5] // 11
const sumTest3 = [-2, 1, 4, 6, -3, 5] // 13
console.log(maxSum(sumTest))



function mergeArrays(arr1, arr2) {
    // return [...arr1, ...arr2].sort((a, b) => a - b)

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

let arrTest1 = [1, 3, 6, 8, 11]
let arrTest2 = [2, 3, 5, 8, 9, 10]
console.log(mergeArrays(arrTest1, arrTest2))



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

let strTest = 'Battle of the Vowels: Hawaii vs. Grozny'
let charTest = 'aeiou'
console.log(removeCharacters(strTest, charTest))



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

let prodTest = [1, 3, 9, 4]
console.log(products(prodTest))



function zeroArray(matrix) {
    let row = false
    let col = false

    // iterate over matrix and identify if matrix[i][j] is already 0
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

    // iterate over matrix again; update elements using row and col
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    // if row needs to be set to zero
    if(row) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }

    // if column needs to be set to zero
    if(col) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }

    return matrix
}


let twoDTest = 
    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];
console.log(zeroArray(twoDTest))



function stringRotation(str1, str2) {
    // validate that parameter input are strings
    if (!str1 || !str2) {
        return false
    }

    // validate parameters have equal length
    if (str1.length != str2.length) {
        return false
    }

    // return str1, check if it includes str2 as rotation
    // console.log(str1 + str1)
    // console.log(str2)
    return (str1 + str1).includes(str2)

}

const str1 = 'amazon'
const str2 = 'azonma'
const str3 = 'amazon'
const str4 = 'azonam'

console.log(stringRotation(str1, str2))
console.log(stringRotation(str3, str4))


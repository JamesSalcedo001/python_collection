import chalk from "chalk"

// 1: define function that takes in a single integer, and if it is even, return True, else return false



function isEven(number) {
    return number % 2 === 0
}

const isEvenArrow = number => number % 2 === 0 

console.log(chalk.underline.blue.bold("2 is even? -->"), chalk.red(isEven(2)))
console.log(chalk.underline.blue.bold("5 is even? -->"), chalk.red(isEven(5)))
console.log(chalk.green.bold("\n***\n"))




// 2: define function that takes in a list, and returns the sum of all the numbers


function sumOfList(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

const sumOfListArrow = numbers => numbers.reduce((acc, curr) => acc + curr, 0)


console.log(chalk.underline.blue.bold("sum of list: [1, 2, 3, 4, 5] -->"), chalk.red(sumOfList([1, 2, 3, 4, 5])))
console.log(chalk.green.bold("\n***\n"))





// 3: define function that takes in a list of integers, and returns the count of even integers in the list



function countEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0).length;
}

const countEvenNumbersArrow = numbers => numbers.filter(number => number % 2 === 0).length;


console.log(chalk.underline.blue.bold("How many even? [1, 2, 3, 4, 5] -->"), chalk.red(countEvenNumbers([1, 2, 3, 4, 5])))
console.log(chalk.green.bold("\n***\n"))



// 4: define a function that takes in a string, reverses it, and returns the reversed string



function reverseString(s) {
    return s.split("").reverse().join("");
}

const reverseStringArrow = s => s.split("").reverse().join("")

console.log(chalk.underline.underline.blue.bold("Reversed String - 'Hello' -->"), chalk.red(reverseString("Hello")))
console.log(chalk.green.bold("\n***\n"))





// 5: define a function that takes in a list of integers and returns the maximum



function findMax(numbers) {
    return Math.max(...numbers)
}

const findMaxArrow = numbers => Math.max(...numbers)

console.log(chalk.underline.blue.bold("Max number in array [1, 2, 3, 4, 5] -->"), chalk.red(findMax([1, 2, 3, 4, 5])))
console.log(chalk.green.bold("\n***\n"))






// 6: define a function that takes in an integer and returns True or False checking whether it is a Prime Number



function isPrime(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const isPrimeArrow = number => {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}


console.log(chalk.underline.underline.blue.bold("11 is prime? -->"), chalk.red(isPrime(11)))
console.log(chalk.underline.underline.blue.bold("4 is prime? -->"), chalk.red(isPrime(4)))


console.log(chalk.green.bold("\n***\n"))



// 7: define a function that finds the longest word in a sentence


function longestWord(sentence) {
    const words = sentence.split(" ");
    let maxWord = words[0]
    for (let word of words) {
        if (word.length > maxWord.length) {
            maxWord = word;
        }
    }
    return maxWord;
}


const longestWordArrow = sentence => {
    const words = sentence.split(" ");
    return words.reduce((maxWord, word) => word.length > maxWord.length ? word : maxWord, words[0]);
}

const sentence = "cool cats are cool but I am the coolest"
console.log(chalk.underline.underline.blue.bold("what's the longest word in the sentence? -->"), chalk.red(longestWord(sentence)))



console.log(chalk.green.bold("\n***\n"))



// 8: define a function that takes a list of numbers and returns a new list containing only the square of the even numbers from the original list


function squareOfEven(numbers) {
    return numbers.filter(x => x % 2 === 0).map(x => x * x);
}


const squareOfEvenArrow = numbers => numbers.filter(x => x % 2 === 0).map(x => x * x)




console.log(chalk.underline.underline.blue.bold("return the squares of only the even numbers of this list [1, 2, 3, 4, 5]: -->"), chalk.red(squareOfEven([1, 2, 3, 4, 5])))



console.log(chalk.green.bold("\n***\n"))



// 9: define a function that calculates the factorial of a number



function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}



const factorialArrow = n => {
    if (n === 0) return 1;
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1)
}



console.log(chalk.underline.underline.blue.bold("what is the factorial of 4? -->"), chalk.red(factorial(4)))



console.log(chalk.green.bold("\n***\n"))



// 10: define a function that takes in two objects and merges them. However, for keys that exist in both objects, only add the key-value pair to the resulting object if the value associated with the key is greater in the second object


function mergeObjects(obj1, obj2) {
    const mergedObj = {...obj1}
    for (const [key, value] of Object.entries(obj2)) {
        if (!obj1.hasOwnProperty(key) || value > obj1[key]) {
            mergedObj[key] = value
        }
    }
    return mergedObj;
}



const mergedObjectsArrow = (obj1, obj2) => {
    return {...obj1, ...Object.fromEntries(Object.entries(obj2).filter(([key, value]) => !obj1.hasOwnProperty(key) || value > obj1obj1[key]))}
}


const obj1 = {"a": 1, "b": 2, "c": 3}
const obj2 = {"b": 3, "c": 2, "d": 4}

console.log(chalk.underline.underline.blue.bold(`two merged objects -->`), (mergeObjects(obj1, obj2)))



console.log(chalk.green.bold("\n***\n"))



// Template start


// Challenge Number: Challenge description


// function functionName(parameters) {
//     code here
// }


// const arrowFunctionName = parameters => {
//     code here
// }


// console.log(chalk.underline.blue.bold("Test Description -->", chalk.red(functionName)(testInput)))
// console.log(chalk.green.bold("\n***\n"))

// Template end
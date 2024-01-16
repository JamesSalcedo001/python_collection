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



//////////



// 4: define a function that takes in a string, reverses it, and returns the reversed string




function reverseString(s) {
    return s.split("").reverse().join("");
}

const reverseStringArrow = s => s.split("").reverse().join("")

console.log(chalk.underline.underline.blue.bold("Reversed String - 'Hello' -->"), chalk.red(reverseString("Hello")))
console.log(chalk.green.bold("\n***\n"))


//////////



// 5: define a function that takes in a list of integers and returns the maximum


function findMax(numbers) {
    return Math.max(...numbers)
}

const findMaxArrow = numbers => Math.max(...numbers)

console.log(chalk.underline.blue.bold("Max number in array [1, 2, 3, 4, 5] -->"), chalk.red(findMax([1, 2, 3, 4, 5])))
console.log(chalk.green.bold("\n***\n"))



//////////



// 6: define a function that 



//////////



// 7: define a function that 



//////////



// 8: define a function that 



//////////



// 9: define a function that 



//////////



// 10: define a function that 
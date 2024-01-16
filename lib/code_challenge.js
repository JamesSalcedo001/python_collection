// 1: define function that takes in a single integer, and if it is even, return True, else return false




function isEven(number) {
    return number % 2 === 0
}

const isEvenArrow = number => number % 2 === 0 

console.log("2 is even?", isEven(2))
console.log("5 is even?", isEven(5))




// 2: define function that takes in a list, and returns the sum of all the numbers




function sumOfList(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

const sumOfListArrow = numbers => numbers.reduce((acc, curr) => acc + curr, 0)


console.log("sum of list: ", sumOfList([1, 2, 3, 4, 5]))




// 3: 
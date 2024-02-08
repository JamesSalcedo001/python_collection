// String methods 


// ***


// charAt(index_number) ==> returns character at specified index in a string



let text1 = "Hello World!"
console.log("character at index 2 --> ", text1.charAt(2))



console.log('\n***\n')
// concat(string2) ==> joins two or more strings, returns new string, non-destructive



let string1 = "Hello"
let string2 = " World!"

console.log("hello + world joined together ==> ", string1.concat(string2))



console.log('\n***\n')
// includes(string) ==> case sensitive, returns true or false if string contains substring



let text2 = "Hello World"
console.log("Hello World contains 'World'? ==> ", text2.includes("World"))
console.log("Hello World contains 'world'? ==> ", text2.includes("world"))



console.log('\n***\n')

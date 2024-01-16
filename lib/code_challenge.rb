require "colorize"

## 1: define function that takes in a single integer, and if it is even, return True, else return false




def is_even(number)
    number % 2 == 0
end

puts "2 is even? -->".blue.bold.underline + " #{is_even(2)}".red
puts "5 is even? -->".blue.bold.underline + " #{is_even(5)}".red




puts "\n#######\n".green




## 2: define function that takes in a list, and returns the sum of all the numbers



def sum_of_list(numbers)
    numbers.sum
end


puts "sum of list: -->".blue.bold.underline + " #{sum_of_list([1, 2, 3, 4, 5])}".red




puts "\n#######\n".green




## 3: define function that takes in a list of integers, and returns the count of even integers in the list



def count_even_numbers(numbers)
    numbers.count { |number| number.even? }
end

puts "How many even numbers? --->".blue.bold.underline + " #{count_even_numbers([1, 2, 3, 4, 5])}".red

puts "\n#######\n".green



## 4: define a function that takes in a string, reverses it, and returns the reversed string




def reverse_string(s)
    s.reverse
end

puts "Reverse the string -->".blue.bold.underline + " #{reverse_string("hello")}".red


puts "\n#######\n".green



## 5: define a function that takes in a list of integers and returns the maximum



def find_max(numbers)
    numbers.max
end

puts "Find the max number in array -->".blue.bold.underline + " #{find_max([1, 2, 3, 4, 5])}".red



puts "\n#######\n".green



## 6: define a function that 



########################



## 7: define a function that 



########################



## 8: define a function that 



########################



## 9: define a function that 



########################



## 10: define a function that 
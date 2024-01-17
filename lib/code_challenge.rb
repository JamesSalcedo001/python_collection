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




## 6: define a function that takes in an integer and returns True or False checking whether it is a Prime Number

def is_prime(number)
    return false if number <= 1
    (2..Math.sqrt(number)).each do |i|
        return false if number % i == 0
    end
    true
end


puts "11 is prime? -->".blue.bold.underline + " #{is_prime(11)}"
puts "4 is prime? -->".blue.bold.underline + " #{is_prime(4)}"


puts "\n#######\n".green



## 7: define a function that finds the longest word in a sentence


def longest_word(sentence)
    sentence.split.max_by(&:length)
end

sentence = "cool cats are cool but I am the coolest"
puts "what's the longest word in the sentence? -->".blue.bold.underline + " #{ longest_word(sentence)}"



puts "\n#######\n".green



## 8: define a function that takes a list of numbers and returns a new list containing only the square of the even numbers from the original list


def square_of_even(numbers)
    numbers.select { |x| x.even? }.map { |x| x**2 }
end

puts "return the squares of only the even numbers of this list [1, 2, 3, 4, 5]: -->".blue.bold.underline + " #{square_of_even([1, 2, 3, 4, 5])}"



puts "\n#######\n".green



## 9: define a function that calculates the factorial of a number


def factorial(n)
    return 1 if n == 0
    (1..n).inject(:*)
end

puts "what is the factorial of 4? -->".blue.bold.underline + " #{factorial(4)}"



puts "\n#######\n".green



## 10: define a function that takes in two hashes and merges them. However, for keys that exist in both hashes, only add the key-value pair to the resulting hash if the value associated with the key is greater in the second hash



def merge_hashes(hash1, hash2)
    hash2.each do |key, value|
        hash1[key] = value if !hash1.key?(key) || value > hash1[key]
    end
    hash1
end

hash1 = {"a" => 1, "b" => 2, "c" => 3}
hash2 = {"b" => 3, "c" => 2, "d" => 4}

puts "two hashes merged -->".blue.bold.underline + " #{merge_hashes(hash1, hash2)}"



puts "\n#######\n".green

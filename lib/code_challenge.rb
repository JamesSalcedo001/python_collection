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

def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False
    return True


print("11 is prime? -->", is_prime(11))
print("4 is prime? -->", is_prime(4))


print("\n#######\n")



## 7: define a function that finds the longest word in a sentence


def longest_word(sentence):
    words = sentence.split()
    max_word = words[0]
    for word in words:
        if len(word) > len(max_word):
            max_word = word
    return max_word

sentence = "cool cats are cool but I am the coolest"
print("what's the longest word in the sentence? -->", longest_word(sentence))



print("\n#######\n")



## 8: define a function that takes a list of numbers and returns a new list containing only the square of the even numbers from the original list


def square_of_even(numbers):
    return [x**2 for x in numbers if x % 2 == 0]

print("return the squares of only the even numbers of this list [1, 2, 3, 4, 5]: -->", square_of_even([1, 2, 3, 4, 5]))



print("\n#######\n")



## 9: define a function that calculates the factorial of a number


def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print("what is the factorial of 4? -->", factorial(4))



print("\n#######\n")



## 10: define a function that takes in two dictionaries and merges them. However, for keys that exist in both dictionaries, only add the key-value pair to the resulting dictionary if the value associated with the key is greater in the second dictionary



def merge_dictionaries(dict1, dict2):
    merged_dict = dict1.copy()
    for key, value in dict2.items():
        if key not in dict1 or value > dict1[key]:
            merged_dict[key] = value
    return merged_dict

dict1 = {"a": 1, "b": 2, "c": 3}
dict2 = {"b": 3, "c": 2, "d": 4}

print(merge_dictionaries(dict1, dict2))



print("\n#######\n")
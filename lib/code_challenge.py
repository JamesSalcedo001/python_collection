## 1: define function that takes in a single integer, and if it is even, return True, else return false


def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False
    

print("2 is even? -->", (is_even(2)))
print("5 is even? -->", (is_even(5)))




print("\n###########\n")




## 2: define function that takes in a list, and returns the sum of all the numbers



def sum_of_list(numbers):
    total = 0

    for num in numbers:
        total += num
    return total


print("sum of list: [1, 2, 3, 4, 5] -->", sum_of_list([1, 2, 3, 4, 5]))




print("\n###########\n")



## 3: define function that takes in a list of integers, and returns the count of even integers in the list



def count_even_numbers(numbers):
    count = 0
    for number in numbers:
        if is_even(number):
            count += 1
    return count

print("how many even numbers? [1, 2, 3, 4, 5] -->", (count_even_numbers([1, 2, 3, 4, 5])))



print("\n###########\n")



## 4: define a function that takes in a string, reverses it, and returns the reversed string




def reverse_string(s):
    reversed_string = ""

    for char in s:
        reversed_string = char + reversed_string
    return reversed_string

print("reverse the string 'hello' -->", (reverse_string("hello")))



print("\n###########\n")



## 5: define a function that takes in a list of integers and returns the maximum



def find_max(numbers):
    max_number = numbers[0]

    for number in numbers:
        if number > max_number:
            max_number = number
    return max_number

print("find the maximum number in array [1, 2, 3, 4, 5] -->", find_max([1, 2, 3, 4, 5]))



print("\n#######\n")



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
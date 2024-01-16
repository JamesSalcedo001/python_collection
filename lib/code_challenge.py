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



## 6: define a function that 



# print("\n#######\n")



## 7: define a function that 



# print("\n#######\n")



## 8: define a function that 



# print("\n#######\n")



## 9: define a function that 



# print("\n#######\n")



## 10: define a function that 
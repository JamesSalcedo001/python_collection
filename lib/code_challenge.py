## 1: define function that takes in a single integer, and if it is even, return True, else return false




def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False
    

# print("2 is even?", is_even(2))
# print("5 is even?", is_even(5))




########################




## 2: define function that takes in a list, and returns the sum of all the numbers



def sum_of_list(numbers):
    total = 0

    for num in numbers:
        total += num
    return total


# print("sum of list: ", sum_of_list([1, 2, 3, 4, 5]))




########################



## 3: define function that takes in a list of integers, and returns the count of even integers in the list



def count_even_numbers(numbers):
    count = 0
    for number in numbers:
        if is_even(number):
            couhnt += 1
    return count

print("how many even numbers?: ", count_even_numbers([1, 2, 3, 4, 5]))



########################



## 4: define a function that takes in a string, reverses it, and returns the reversed string






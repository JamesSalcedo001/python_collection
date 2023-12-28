print("Hello World!")

print("Hello Sun!", end=" ")
print("Hello Moon!", end="!!")


# data types

dog_name = "Lucy"
print(f"Say Hello to my dog {dog_name}")

price_1 = 3
price_2 = 2.5

print(f"Item 1 costs ${price_1:.2f}")
# => Item 1 costs $3.00
print(f"Item 2 costs ${price_2:.2f}")
# => Item 2 costs $2.50

"hello"
# "hello"
"hello".upper()
# "HELLO"
"HELLO".lower()
# "hello"
"hello".capitalize()
# "Hello"
"hello" + "world"
# "helloworld"
"hello" * 3
# "hellohellohello"


type("hello")
# => <class 'str'>

dir("hello")
# => ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', ... ]

int("1")
# => 1
int(1.1)
# => 1
float("1.1")
# => 1.1

4 / 3
# 1.3333333333333333
4 / 3.0
# 1.3333333333333333
float(4 / 3)
# 1.3333333333333333

[1, 3, 400, 7]
# => [1, 3, 400, 7]

list()
# => []

list_abc = ['a','b','c']
list_abc[0]
# => 'a'
list_abc[1]
# => 'b'
list_abc[2]
# => 'c'



len([1, 3, 400, 7])
# 4
sorted([5, 100, 234, 7, 2])
# [2, 5, 7, 100, 234]
list_123 = [1, 2, 3]
list_123.pop()
# 3
list_123.remove(1)
print(list_123)
# [2]



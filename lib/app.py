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


(1, 2, 3)
# => (1, 2, 3)
tuple([1, 2, 3])
# => (1, 2, 3)


set()
# => {}

set(3, 2, 3, 'a', 'b', 'a')
# => TypeError: set expected at most 1 argument, got 6

set([3, 2, 3, 'a', 'b', 'a'])
# => {2, 3, 'a', 'b'}


s = {1, 2, 3}
s.pop()
# => 1
s.remove(3)
# => {2}


{ "key1": "value1", "key2": "value2" }

my_dict = { "key1": 1, "key2": 2 }
my_dict["key2"]
# => 2

my_dict = { "key1": "value1", "key2": "value2" }
print(my_dict["key3"])
# => KeyError: 'key3'

print(my_dict.get("key3"))
# => None

dict(x = 1, y = 2)
# => {'x': 1, 'y': 2}


no_value
# => NameError: name 'no_value' is not defined

no_value = None
print(no_value)
# => None

type(True)
# => <class 'bool'>
type(False)
# => <class 'bool'>

not True
# => False
not False
# => True
not 1
# => False
not 0
# => True
not ''
# => True
not None
# => True
not []
# => True
not ()
# => True
not {}
# => True


def my_function(param):
    print("Running my_function")
    return param + 1


my_function_return_value = my_function(1)
# => Running my_function
# => 2
my_function_return_value
# => 2

def say_hi(name):
    print(f"Hi there, {name}!")

say_hi()
# => TypeError: say_hi() missing 1 required positional argument: 'name'

def say_hi(name="Engineer"):
    print(f"Hi there, {name}!")

say_hi()
# => "Hi there, Engineer!"

say_hi("Sunny")
# => "Hi there, Sunny!"

def my_future_function():
    pass





def greet_programmer():
    print("Hello, programmer!")

def greet(name):
    print(f"Hello, {name}!")

def greet_with_default(name="programmer"):
    print(f"Hello, {name}!")

def add(num1, num2):
    return(num1 + num2)

def halve(number):
    return(number / 2)


change_the_world = "change yourself"

def change_yourself():
    global change_the_world
    change_the_world = "world changed"

# change_yourself()
# print(change_the_world)